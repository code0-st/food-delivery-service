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