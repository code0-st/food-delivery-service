import {catalogsPaths} from "./Menu/paths";
import {productsPaths} from "./Products/paths";
import {profilePaths} from "./Profile/paths";
import {workerPaths} from "./Worker/paths";

export const ROUTE_PATHS = {
    login: '/login',
    signUp: '/sign-up',
    contacts: '/contacts',
    products: {...productsPaths},
    catalogs: {...catalogsPaths},
    profile: {...profilePaths},
    worker: {...workerPaths},
}