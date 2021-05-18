import {keys} from "./keys";
import {enumsRequests} from "./requests/enums/enumsRequests";
import {authRequests} from "./requests/auth/authRequests";
import {userRequests} from "./requests/user/userRequests";
import {productsRequests} from "./requests/products/productsRequests";

export const instance = () => {
    const mainKey = keys.main
    const token = localStorage.getItem(mainKey)
    return {
        open: () => ({
            ...enumsRequests().open(),
            ...authRequests().open(),
            ...productsRequests().open(),
        }),
        close: () => ({
            ...enumsRequests().close(token),
            ...userRequests().close(token)
        }),
    }
}