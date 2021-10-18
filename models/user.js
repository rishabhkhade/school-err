'use strict';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
		is_active: {
			type: DataTypes.BOOLEAN(true),
			allowNull: true,
			defaultValue: '1'
		},
		profile_img: {
			type: DataTypes.STRING(666),
			allowNull: true,
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

    // queries and other function starts
	User.getUser = async (reqData, models) => {
		try {
			// const { Role } = models;
			return await User.findAll({
				where: {
					email: reqData.email
				},
				// include: [
				// 	{ model: Role, as: 'role', attributes: ['role_name', 'description', 'permission'] }
				// ],
				attributes: [
					'id', 'name', 'email', 'mobile_no', 'password',
					'profile_img',  'status', 'is_active'
				]
			});
		} catch (e) {
			return false;
		}
	}
	User.checkPasswordRequest = async (reqData) => {
		try {
			return await User.findOne({
				where: {
					email: reqData.email,
					otp: reqData.otp
				},
				attributes: [
					'id', 'name', 'email', 'otp'
				]
			});
		} catch (e) {
			return false;
		}
	}

	User.checkUser = async (reqData) => {
		try {
			return await User.findOne({
				where: {
					email: reqData.email,
					status: true
				},
				attributes: [ 'email', 'password', 'status']
			});
		} catch (e) {
			return false;
		}
	}

	User.getList = async (models, curPage, pgSize) => {
		const { Role } = models;
		try {
			return await User.findAndCountAll({
				where: {
					status: true
				},
				distinct: true,
				order: [['name', 'ASC']],
				offset: (curPage - 1) * pgSize,
				limit: pgSize,

				include: [
					{ model: Role, as: 'role', attributes: ['role_name'] }
				],
				attributes: [
					'id', 'name', 'email', 'mobile_no', 'password',
					'profile_img',  'status', 'is_active'
				]
			});
		} catch (e) {
			return [];
		}
	};

	User.saveRecord = async (reqData) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				const hashPassword = bcrypt.hashSync(reqData.password, bcrypt.genSaltSync(10), null);
				const saveObj = {
					...reqData,
					password: hashPassword,
					createdAt: new Date(),
					updatedAt: new Date()
				};
				return await User.create(saveObj, { transaction: t });
			});
			// return result from saved record
			return result;
		} catch (e) {
			return false;
		}
	};

	User.getRecordById = async (id) => {
		try {
			const searchRecord = await User.findByPk(id, {
				attributes: ['id', 'name', 'email', 'mobile_no', 'password',
					'profile_img',  'status', 'is_active']
			});
			if (!searchRecord || !searchRecord.status) return false;
			return searchRecord;
		} catch (e) {
			return false;
		}
	};

	User.updateRecord = async (record, reqData) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				let hashPassword = record.password;
				if (reqData.password != undefined && reqData.password != null && reqData.password != '') {
					hashPassword = bcrypt.hashSync(reqData.password, bcrypt.genSaltSync(10), null)
				}
				const updateObj = {
					...reqData,
					password: hashPassword,
					updatedAt: new Date()
				};
				return await record.update(updateObj, { transaction: t });
			});
			// return result from updated record
			return result;
		} catch (e) {
			return false;
		}
	};

	User.deleteRecord = async (record) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				return await record.update({
					status: false,
					updatedAt: new Date()
				});
			});
			// return result from updated record
			return result;
		} catch (e) {
			return false;
		}
	};


	User.validatePassword = (pass, hashPass) => {
		return bcrypt.compareSync(pass, hashPass);
	}

	User.generateTokens = (userSerialize) => {
		const accessSecret = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : '';
		const refreshSecret = process.env.REFRESH_TOKEN_SECRET ? process.env.REFRESH_TOKEN_SECRET : '';
		return {
			access_token: jwt.sign(userSerialize, accessSecret, { expiresIn: '6h' }),
			refresh_token: jwt.sign(userSerialize, refreshSecret)
		}
	}
    
    return User;
};