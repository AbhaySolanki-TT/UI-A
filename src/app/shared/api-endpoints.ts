export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/Auth/login',
        REGISTER: '/Auth/register',
        UPDATE: '/Auth',
        GET_BY_ID: (id: string | number) => `/Auth/Get/${id}`,
        CHANGE_PASSWORD: '/Auth/change-password',
    }
};