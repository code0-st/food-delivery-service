export interface IUserBody {
    lastName: string,
    firstName: string,
    patronymic: string,
    phone: string,
    userName: string,
    password: string,
    userRole: "client" | "worker"
}

export interface IWorkerBody extends IUserBody {
    workPhone?: string
    departmentId: number
    positionId: number
}

export interface IClientBody extends IUserBody {
    address: string
    discountId?: number
}

export type TGetUserInfo = {
    searchValue?: string
}
export type TGetSortedClients = {
    isAsc: boolean
    sortState: 'FirstName' | 'LastName'
}

export type TGetSortedWorkers = {
    isAsc: boolean
    sortField: 'FirstName' | 'LastName' | 'Department' | 'Position'
}