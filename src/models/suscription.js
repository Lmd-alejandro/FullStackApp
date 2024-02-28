module.exports = ( sequelize, DataTypes ) => {
    const Subscription = sequelize.define (
        "Subscription",
        {
            id : {
                type: DataTypes.BIGINT(20),
                primaryKey: true, 
                autoIncrement: true,
            },
            estado : {
                type: DataTypes.TINYINT(4),
                defaultValue: 1,
            },
        },
        { tableName: "subscription" }
    );
    
    return Subscription;
};