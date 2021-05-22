const USER_ROLE = 'USER_ROLE'
const USER_ID = 'USER_ID'


export const saveUserRole = (role: string) => {
    localStorage.setItem(USER_ROLE, role)
}
export const getUserRole = () => {
    return localStorage.getItem(USER_ROLE)
}

export const saveUserId = (id: string) => {
    localStorage.setItem(USER_ID, id)
}
export const getUserId = () => {
    return localStorage.getItem(USER_ID)
}