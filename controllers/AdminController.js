// models import here
import sCode from "../custom/status-codes";
const { bad_request } = sCode;

import { User, UserRefreshToken } from '../models';
import validateLogin from '../validation/adminLogin';
import { getValidationErrMsg } from '../custom/error-msg';



export default {
    async getLogin(req, res) {
        try {
            const { error } = validateLogin(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            const user = await User.getUser(req.body, model);
            if (!user) return res.status(bad_request).send({ error: { email: "Email does't exists." } });

            if (!User.validatePassword(req.body.password, user.password)) return res.status(un_authorized).send({ error: { password: "Incorrect Password" } });
            
            const { id, email, name, role_id, mobile_no } = user;
            const userSerialize = { id, email, name, role_id, mobile_no, client_type: 'Admin' };
            const token = User.generateTokens(userSerialize);

            // create data for current user in refresh token table
            const tokenSave = await UserRefreshToken.saveUserAndTokenData(user, token);
            if (!tokenSave) return res.status(server_error).send({ message: 'Internal Server Error' });

            Object.assign(token, { user_refresh_token_id: tokenSave.id, client_type: 'Admin' });
            res.status(ok).send({ user, token });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
}