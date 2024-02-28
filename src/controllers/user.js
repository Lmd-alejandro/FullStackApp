const { response, request} = require ("express");
const { sequelize, Users: userModel } = require ("../models");
const { keyToken } = require ("../config");
const jwt = require ("jsonwebtoken");


const creatUser = async(req = request, res = response) => {
    const transaction = await sequelize.transaction();
    try {
        const { name, email, password, profile } = req.body;
        
        if (!name && !email && !password){
            await transaction.rollback();
            return resp.status(400).json({
                status: false, 
                msg: "All fields are required"
            });
        }

        const userCreated = await userModel.create(
            {name, email, password, profile },
            {
                transaction,
            }
        );

        await transaction.commit();
        return resp.status(200).json({
            status: true, 
            msg: "Successful registration",
            userCreated,
        });
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        return resp.status(500).json({
            status: false,
            msg: "Server error",
        });
    }
};

const login = async(req= request, resp= response) =>{
    const token = jwt.sign({ id:1 }, keyToken, { expiresIn: "1d"});
    resp.json({ token });
}

module.exports ={
        creatUser,
        login
};