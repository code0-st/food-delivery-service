import {keys} from "./keys";
import {enumsRequests} from "./requests/enums/enumsRequests";
import {authRequests} from "./requests/auth/authRequests";
import {userRequests} from "./requests/user/userRequests";
import {productsRequests} from "./requests/products/productsRequests";
import {ordersRequests} from "./requests/orders/ordersRequests";

export const instance = () => {
    const mainKey = keys.main
    const token = localStorage.getItem(mainKey)
    return {
        open: () => ({
            ...enumsRequests().open(),
            ...authRequests().open(),
            ...productsRequests().open(),
            ...userRequests().open(),
        }),
        close: () => ({
            ...enumsRequests().close(token),
            ...userRequests().close(token),
            ...ordersRequests().close(token),
            ...productsRequests().close(token),
        }),
    }
}