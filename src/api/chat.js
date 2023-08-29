import http from '../utils/request'

export const createRoom = params =>http.post('/chat/create-room',params)

export const getRoom = params => http.get('/chat/room',{params})
