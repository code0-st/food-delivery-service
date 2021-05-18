import {TEnumItem} from "../enums/types.data";

export interface IUser {
    id: string
    firstName: string
    lastName: string
    patronymic: string
    phone: string
    userName: string
}

export interface IWorker extends IUser {
    workPhone: string
    department: TEnumItem
    position: TEnumItem
}

export interface IClient extends IUser {
    address: string
    discount?: TEnumItem
}