import {keys} from "./keys";
import {enumsRequests} from "./requests/enums/enumsRequests";

export const instance = () => {
    const mainKey = keys.main
    const token = localStorage.getItem(mainKey)
    return {
        open: () => ({
            ...enumsRequests().open(),
        }),
        close: () => ({
            ...enumsRequests().close(token)
        }),
    }
}