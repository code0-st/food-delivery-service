import {
    setCatalogs,
    setCatalogsLoading, setDepartments,
    setDepartmentsLoading, setOrderStatuses,
    setOrderStatusesLoading, setPositions,
    setPositionsLoading
} from "./actions";
import {instance} from "../../../api";
import {ICreateCatalog, IEditCatalog, IRemoveCatalog} from "./types";


export const getCatalogsAsync = () => async (dispatch: any) => {
    dispatch(setCatalogsLoading(true))
    try {
        const res = await instance().open().getCatalogs()
        dispatch(setCatalogs(res.data))
    } catch (e) {
    }
    dispatch(setCatalogsLoading(false))
}

export const getDepartmentsAsync = () => async (dispatch: any) => {
    dispatch(setDepartmentsLoading(true))
    try {
        const res = await instance().close().getDepartments()
        dispatch(setDepartments(res.data))
    } catch (e) {
    }
    dispatch(setDepartmentsLoading(false))
}

export const getOrderStatusesAsync = () => async (dispatch: any) => {
    dispatch(setOrderStatusesLoading(true))
    try {
        const res = await instance().close().getOrderStatuses()
        dispatch(setOrderStatuses(res.data))
    } catch (e) {
    }
    dispatch(setOrderStatusesLoading(false))
}

export const getPositionsAsync = () => async (dispatch: any) => {
    dispatch(setPositionsLoading(true))
    try {
        const res = await instance().close().getPositions()
        dispatch(setPositions(res.data))
    } catch (e) {
    }
    dispatch(setPositionsLoading(false))
}

export const createCatalogAsync: ICreateCatalog = payload => async (dispatch: any) => {
    await instance().close().createCatalog(payload)
        .then(res => {
            dispatch(getCatalogsAsync())
        })
        .catch(err => {
            console.log(err)
        })
}

export const editCatalogAsync: IEditCatalog = payload => async (dispatch: any) => {
    await instance().close().editCatalog(payload)
        .then(res => {
            dispatch(getCatalogsAsync())
        })
        .catch(err => {
            console.log(err)
        })
}

export const removeCatalogAsync: IRemoveCatalog = payload => async (dispatch: any) => {
    await instance().close().removeCatalog(payload)
        .then(res => {
            dispatch(getCatalogsAsync())
        })
        .catch(err => {
            console.log(err)
        })
}