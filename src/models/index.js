const Sequelize = require ("sequelize");
const {
    nameDb,
    PasswordDb,
    userDb,
    portDb,
    hostDB,
} = require("../config/index");
const fs = require("fs");
const path = require("path");

const baseName = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(nameDb, PasswordDb, userDb,{
    dialect:"mysql",
    port:"portDb",
    host:"hostDB",
    loggin: false
});

const listFile = fs.readdirSync(__dirname).filter((file) =>{
    return ( 
        file.indexOf(".") !== 0 &&
        file !== baseName &&
        file.slice(-3) === ".js"
    );
});

listFile.forEach(file =>{
    const model = require(path.join(__dirname,file))(
        sequelize,
        Sequelize.DataTypes
    );
    db[model.name] = model;
});

Object.keys(db).forEach(model =>{
    if (db[model].associate){
        db[model].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = sequelize;