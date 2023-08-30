import axios from "axios"

let token = ''

const resuest = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
})

resuest.interceptors.request.use((cofnig)=>{
    cofnig.headers.authorization = token || (token = localStorage.getItem('token'))
    console.log({cofnig});
    return cofnig
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