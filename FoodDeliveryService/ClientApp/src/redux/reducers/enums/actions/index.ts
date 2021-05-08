import {
    setCatalogs,
    setCatalogsLoading, setDepartments,
    setDepartmentsLoading, setOrderStatuses,
    setOrderStatusesLoading, setPositions,
    setPositionsLoading
} from "./actions";
import {instance} from "../../../api";

export const getCatalogsAsync = () => async (dispatch: any) => {
    dispatch(setCatalogsLoading(true))
    try {
        const res = await instance().open().getCatalogs()
        dispatch(setCatalogs(res.data))
    } catch (e) {
        alert(e)
    }
    dispatch(setCatalogsLoading(false))
}

export const getDepartmentsAsync = () => async (dispatch: any) => {
    dispatch(setDepartmentsLoading(true))
    try {
        const res = await instance().open().getDepartments()
        dispatch(setDepartments(res.data))
    } catch (e) {
        alert(e)
    }
    dispatch(setDepartmentsLoading(false))
}

export const getOrderStatusesAsync = () => async (dispatch: any) => {
    dispatch(setOrderStatusesLoading(true))
    try {
        const res = await instance().open().getOrderStatuses()
        dispatch(setOrderStatuses(res.data))
    } catch (e) {
        alert(e)
    }
    dispatch(setOrderStatusesLoading(false))
}

export const getPositionsAsync = () => async (dispatch: any) => {
    dispatch(setPositionsLoading(true))
    try {
        const res = await instance().open().getPositions()
        dispatch(setPositions(res.data))
    } catch (e) {
        alert(e)
    }
    dispatch(setPositionsLoading(false))
}