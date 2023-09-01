import http from '../utils/request'


export const login = params => http.post('/login',params)

export const register = params => http.post('/login/register',params)

export const updateUser = params => http.post('/login/user/update',params)

export const retrievePassword = params => http.post('/login/retrieve-psd',params)