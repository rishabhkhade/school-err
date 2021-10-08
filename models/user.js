'use strict';
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		mobile_no: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
        password: {
            type: DataTypes.STRING(666),
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        tableName: 'users',
    });

    User.associate = function (models) {
        // associations can be defined here
    };
    
    return User;
};