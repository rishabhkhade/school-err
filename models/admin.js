'use strict';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
	const Admin = sequelize.define('Admin', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		email: {
			type: DataTypes.STRING(191),
			allowNull: false,
			// unique: true
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
		tableName: 'admins',
	});
	
	Admin.associate = function (models) {
		// associations can be defined here
		
	};

	// queries and other function starts
	Admin.getAdmin = async (reqData, models) => {
		try {
			// console.log(reqData);
			// const { Role } = models;
			return await Admin.findOne({
				where: {
					email: reqData.email
				}
			});
		} catch (e) {
			return false;
		}
	}

	return Admin;


};