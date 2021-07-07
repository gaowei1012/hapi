/**
 * 定义 shops 数据模型
 */

module.exports = (sequelize, DataTypes) => sequelize.define(
    'shops',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        thumb_url: DataTypes.INTEGER
    },
    {
        tableName: 'shops'
    }
);