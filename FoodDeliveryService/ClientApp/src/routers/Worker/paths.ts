import {config} from "../config";

const {worker} = config

export const workerPaths = {
    path: worker,
    orders:`${worker}/orders`,
    clients: `${worker}/clients`,
    catalogs: `${worker}/catalogs`,
    products: `${worker}/products`,
    workers: `${worker}/workers`,
}