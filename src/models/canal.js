module.exports = ( sequelize, DataTypes ) =>{
    const Channel = sequelize.define(
        "Channel",
        {
            id: {
                type: DataTypes.BIGINT(20),
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            vp_categoria: {
                type: DataTypes.BIGINT(20),
                allowNull: false,
            },
            estado: {
                type: DataTypes.TINYINT(4),
                defaultValue: 1,
            },
        },
        { tableName: "canal" }
    );
    return Channel;
};