import {instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";

export const productsRequests = () => ({
    open: () =>  ({
        getProductsList: () => {
            return instanceAxiosOpen().get(paths.products)
        },
        getProductsListByCatalog: (catalogId: number) => {
            return instanceAxiosOpen().get(`${paths.products}?catalogId=${catalogId}`)
        }
    })
})