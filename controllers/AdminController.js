import { getValidationErrMsg } from '../custom/error-msg';
import sCode from "../custom/status-codes";
const { bad_request } = sCode;
// models import here
import model from '../models';
const { Admin, User } = model;

// import { User, UserRefreshToken } from '../models';
import validateLogin from '../validation/adminLogin';



export default {
    async getLogin(req, res) {
        try {
            const { error } = validateLogin(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            const user = await Admin.getAdmin(req.body, model);
            // console.log(user,">>>>>>>");
            if (!user) return res.status(bad_request).send({ error: { email: "Email does't exists." } });
            
            if (!User.validatePassword(req.body.password, user.password)) return res.status(un_authorized).send({ error: { password: "Incorrect Password" } });
            // if (req.body.password != user.password) return res.status(sCode.un_authorized).send({ error: { password: "Incorrect Password" } });
            
            const { id, email, name } = user;
            const userSerialize = { id, email, name };
            const token = User.generateTokens(userSerialize);

            Object.assign(token, { client_type: 'Admin' });
            res.status(200).send({ user, token });
        } catch (e) {
            console.log(e);
            res.status(sCode.server_error).send(e);
        }
    },
}