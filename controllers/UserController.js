import sCode from "../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import { User } from '../models';
import user from "../validation/user";


//validation import
import validateUser from '../validation/user';


export default {
    async getUsers(req, res) {
        try {
            const user = await User.findAll({
                attributes: [
					'id', 'name', 'email', 'mobile_no',
					'profile_img', 'is_active'
				]
            });
            return res.status(200).send({ user });
        } catch (e) {
            console.log(e);
            return res.status(500).send(e);
        }
    },

    async addUser(req, res) {
        try {
            const saveObj = {
                ...req.body,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const user = await User.create(saveObj);

            return res.status(200).send({ user });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async getUser(req, res) {
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
					'profile_img', 'role_id', 'status', 'is_active'
				]
			});
            return res.status(200).send({ user });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async updateUser(req, res,) {
        try {
            const saveObj = {
                ...req.body,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const user = await User.create(saveObj);

            return res.status(200).send({ user });

            // const { id } = req.params;
            // const decId = getDecryptId(id);

            // // const { error } = validateUser(req.body, decId);
            // if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            // let recordExist = await User.getRecordById(decId);

            // if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('user') });

            // const userExist = await User.checkUser(req.body);
            // if (userExist !== null && userExist.id != decId) return res.status(bad_request).send({ error: { email_id: " This email has been already used." } });

            // const user = await User.updateRecord(recordExist, req.body);
            // if (!user) return res.status(server_error).send({ message: getServerErrorMsg() });
            // res.status(created).send({ user });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async deleteUser(req, res) {
        try {
            await User.destroy({
                where:{

                    id : req.params.id
                },
                
            })
            // const { id } = req.params;
            // // const decId = getDecryptId(id);
            // let recordExist = await User.getRecordById(decId);
            // if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('user') });

            // const user = await User.deleteRecord(recordExist);
            // if (!user) return res.status(server_error).send({ message: getServerErrorMsg() });
            // res.status(ok).send({ user });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}