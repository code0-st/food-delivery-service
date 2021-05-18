import {TLoginBody} from "../../../reducers/auth/types.data";
import {instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";

export const authRequests = () => ({
    open: () => ({
        login: (body: TLoginBody) => {
            return instanceAxiosOpen().post(paths.login, body)
        }
    }),
    close: () => ({})
})