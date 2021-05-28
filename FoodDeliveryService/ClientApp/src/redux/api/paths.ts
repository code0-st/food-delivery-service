export const paths = {
    baseUrl: 'https://localhost:44333/',
    login: 'login',
    enums: {
        orderStatus: 'api/orderstatus',
        catalogs: 'api/catalogs',
        departments: 'api/departments',
        positions: 'api/positions',
    },
    workers: {
        me: 'api/workers/me',
        list: 'api/workers',
        sort: 'api/workers/sort'
    },
    clients: {
        me: 'api/clients/me',
        list: 'api/clients',
        sort: 'api/clients/sort'
    },
    products: 'api/products',
    orders: {
        list: 'api/orders',
        sort: 'api/orders/sort',
        status: 'api/orders/status',
    },
    productsInOrder: '/api/ProductsInOrders',
}