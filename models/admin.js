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
			const { Role } = models;
			return await Admin.findOne({
				where: {
					email: reqData.email
				},
				include: [
					{ model: Role, as: 'role', attributes: ['role_name', 'description', 'permission'] }
				],
				attributes: [
					'id', 'name', 'email', 'mobile_no', 'password',
					 'role_id', 'status', 'is_active'
				]
			});
		} catch (e) {
			return false;
		}
	}

	return Admin;


};