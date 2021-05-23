import {config} from "../config";
import {catalogPaths} from "./Catalog/paths";

const {catalogs} = config

export const catalogsPaths = {
    path: catalogs,
    catalog: {...catalogPaths}
}