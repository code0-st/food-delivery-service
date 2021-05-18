import {setProductsList, setProductsListLoading} from "./actions";
import {instance} from "../../../api";

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