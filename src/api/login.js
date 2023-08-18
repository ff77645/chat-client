import http from '../utils/request'


export const login = params => http.post('/login',params)

export const register = params => http.post('/login/register',params)