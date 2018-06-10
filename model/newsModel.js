const Sequelize = require('sequelize');
const sequelize = _loadSequelize();
const categoryModel = require('./categoryModel')
const newsModel = sequelize.define('news', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    keywords: { type: Sequelize.STRING, allowNull: false },
    content: { type: Sequelize.TEXT, allowNull: false },
    thumb: { type: Sequelize.STRING, allowNull: false },
    position: { type: Sequelize.STRING, allowNull: false },
    categoryId: {
        type: Sequelize.INTEGER,
        references: {
            model: categoryModel,
            key: 'id',
        }
    }
});
module.exports = newsModel;