import {instanceAxiosClose, instanceAxiosOpen} from "../../instance.axios";
import {paths} from "../../paths";
import {TCreateProduct, TEditProduct, TRemoveProduct} from "./types.data";

export const productsRequests = () => ({
    open: () =>  ({
        getProductsList: () => {
            return instanceAxiosOpen().get(paths.products)
        },
        getProductsListByCatalog: (catalogId: number) => {
            return instanceAxiosOpen().get(`${paths.products}?catalogId=${catalogId}`)
        }
    }),
    close: (token: string | null) => ({
        createProduct: (body: TCreateProduct) => {
            return instanceAxiosClose(token).post(paths.products, body)
        },
        editProduct: (body: TEditProduct) => {
            return instanceAxiosClose(token).put(`${paths.products}/${body.id}`, body)
        },
        removeProduct: (body: TRemoveProduct) => {
            return instanceAxiosClose(token).delete(`${paths.products}/${body.id}`)
        }
    })
})