import {setProductsList, setProductsListLoading} from "./actions";
import {instance} from "../../../api";
import {ICreateProduct, IEditProduct, IRemoveProduct} from "./types";

export const getProductsListAsync = () => async (dispatch: any) => {
    dispatch(setProductsListLoading(true))
    try {
        const res = await instance().open().getProductsList()
        dispatch(setProductsList(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setProductsListLoading(false))
}

export const getProductsListByCatalogAsync = (catalogId: number) => async (dispatch: any) => {
    dispatch(setProductsListLoading(true))
    try {
        const res = await instance().open().getProductsListByCatalog(catalogId)
        dispatch(setProductsList(res.data))
    } catch (e) {
        console.log(e)
    }
    dispatch(setProductsListLoading(false))
}

export const createProductAsync: ICreateProduct = payload => async (dispatch: any) => {
    await instance().close().createProduct(payload)
        .then(res => {
            dispatch(getProductsListAsync())
        })
        .catch(err => {
            console.log(err)
        })
}

export const editProductAsync: IEditProduct = payload => async (dispatch: any) => {
    await instance().close().editProduct(payload)
        .then(res => {
            dispatch(getProductsListAsync())
        })
        .catch(err => {
            console.log(err)
        })
}

export const removeProductAsync: IRemoveProduct = payload => async (dispatch: any) => {
    await instance().close().removeProduct(payload)
        .then(res => {
            dispatch(getProductsListAsync())
        })
        .catch(err => {
            console.log(err)
        })
}