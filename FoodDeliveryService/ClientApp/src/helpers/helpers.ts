const USER_ROLE = 'USER_ROLE'
export const saveUserRole = (role: string) => {
    localStorage.setItem(USER_ROLE, role)
}
export const getUserRole = () => {
    return localStorage.getItem(USER_ROLE)
}