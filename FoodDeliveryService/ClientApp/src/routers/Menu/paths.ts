import {config} from "../config";
import {catalogPaths} from "./Catalog/path";

const {catalogs} = config

export const catalogsPaths = {
    path: catalogs,
    catalog: {...catalogPaths}
}