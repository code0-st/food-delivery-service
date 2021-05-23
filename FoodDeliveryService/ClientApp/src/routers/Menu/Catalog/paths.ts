import {config} from "../../config";

const {catalog} = config

export const catalogPaths = {
    catalog: (id: number | string = ":id") => ({
        path: `${catalog}/${id}`
    })
}