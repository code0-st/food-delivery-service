import {mainPaths} from "./Main/paths";
import {menuPaths} from "./Menu/path";

export const ROUTE_PATHS = {
    login: '/login',
    profile: '/profile',
    contacts: '/contacts',
    main: {...mainPaths},
    menu: {...menuPaths}
}