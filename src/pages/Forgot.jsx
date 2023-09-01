import {useNavigate} from 'react-router-dom'
import {useState} from 'react'



export default function Forgot(){

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [verifyCode,setVerifyCode] = useState('')
    const [countDown,setCountDown] = useState(0)

    const handleConfirm = async ()=>{
      // if(!email || !password) return alert('请输入账号密码')
      // const res = await login({
      //     username:email,
      //     password
      // })
      // console.log({res});
      // localStorage.setItem('userinfo',JSON.stringify(res))
      // navigate('/chat')
    }


    const countDownTime = number =>{
        if(number < 0) return
        setTimeout(()=>{
            setCountDown(number)
            countDownTime(number - 1)
        },1000)
    }

    const sendVerifyCode = ()=>{
        if(countDown) return
        countDownTime(10)
    }

    return (
      <div className="flex justify-center items-center h-full">
      <div className="flex flex-col p-6 rounded-md sm:max-w-md w-full h-full sm:h-auto sm:p-10 dark:dark:bg-gray-900 dark:dark:text-gray-100">
          <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">找回密码</h1>
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
                          <label htmlFor="password" className="text-sm">新密码</label>
                      </div>
                      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                  </div>
                  <div>
                      <div className="flex justify-start mb-2">
                          <label htmlFor="password" className="text-sm">确认密码</label>
                      </div>
                      <input value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                  </div>
                  <div>
                      <div className="flex justify-start mb-2">
                          <label htmlFor="password" className="text-sm">验证码</label>
                      </div>
                      <div className="flex gap-2">
                        <input value={verifyCode} onChange={e=>setVerifyCode(e.target.value)} type="text" placeholder="验证码" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                        <button onClick={sendVerifyCode} type='button' className="px-3 py-3 text-sm whitespace-nowrap rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                          {
                            countDown > 0 ? (countDown+'').padStart(2,0) : '获取验证码'
                          }
                        </button>
                      </div>
                  </div>
              </div>
              <div className="space-y-2">
                  <div>
                      <button onClick={handleConfirm} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">确认</button>
                  </div>
                  <p className="px-6 text-sm text-center dark:dark:text-gray-400">
                      <a rel="noopener noreferrer" href="/login" className="hover:underline dark:dark:text-violet-400">返回登录</a>
                  </p>
              </div>
          </form>
      </div>
  </div>
      )
}