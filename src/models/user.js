const DataTypes = require("express");

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("Users", {
        id: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        profile:{
            type: DataTypes.STRING(500),
            allowNull: false,

        },
        estado:{
                type: DataTypes.TINYINT(4),
                defaultValue: 1, 
        },
    },
    {
        tableName: "Users",
        timestamps: false,
    }
);

    return User;
};