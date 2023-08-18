import axios from "axios"


const resuest = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
})

resuest.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.error('请求错误:',err)
    const msg = err.response.data?.msg
    msg && alert(msg)
    return Promise.reject(err)
})



export default resuest