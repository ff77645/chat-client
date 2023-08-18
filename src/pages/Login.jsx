import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {login} from '../api/login'

export default function Login(){
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = async ()=>{
        if(!email || !password) return alert('请输入账号密码')
        const res = await login({
            username:email,
            password
        })
        console.log({res});
        localStorage.setItem('userinfo',JSON.stringify(res))
        navigate('/chat')
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col p-6 rounded-md sm:max-w-md w-full h-full sm:h-auto sm:p-10 dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">登录</h1>
                {/* <p className="text-sm dark:dark:text-gray-400">登录访问您的帐户</p> */}
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">邮件地址</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="ikun@gmail.com" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="flex justify-start mb-2">
                            <label htmlFor="password" className="text-sm">密码</label>
                        </div>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                        <div className="flex justify-end mb-2">
                            <a rel="noopener noreferrer" href="/forgot" className="text-xs hover:underline dark:dark:text-gray-400">忘记密码?</a>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button onClick={handleLogin} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">登录</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:dark:text-gray-400">还没有账户? 
                        <a rel="noopener noreferrer" href="/register" className="hover:underline dark:dark:text-violet-400">注册</a>.
                    </p>
                </div>
            </form>
        </div>
        </div>
      );
}