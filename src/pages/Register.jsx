import {useNavigate} from 'react-router-dom'
import {useState,useRef} from 'react'
import {register,updateUser} from '../api/login'
import "./chat.css";




export default function Login(){
    const [userinfo,setUserinfo] = useState('')

    return (
        <div className="flex justify-center items-center h-full">
            {
                userinfo ? <Setting userinfo={userinfo} /> : <Register setUserinfo={setUserinfo}/>
            }
        </div>
      );
}


function Register({setUserinfo}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')

    const handleRegister = async ()=>{
        if(!email ||!password) return alert('请输入账号密码')
        if(password !== passwordConfirm) return alert('两次密码不一致')
        const res = await await register({
            email:email,
            password
        })
        console.log({res});

        //alert('注册成功');
        setUserinfo(res.user)
    }
    return (
        <div className="flex flex-col p-6 rounded-md sm:max-w-md w-full h-full sm:h-auto sm:p-10 dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">注册</h1>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">邮件地址</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="ikun@gmail.com" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">密码</label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">确认密码</label>
                        <input value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button onClick={handleRegister} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">注册</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:dark:text-gray-400">
                        <a rel="noopener noreferrer" href="/login" className="hover:underline dark:dark:text-violet-400">登录</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

const noop = ()=>{}

function getRandomName(length){
    function randomAccess(min,max){
        return Math.floor(Math.random() * (min - max) + max)
    }
    let name = ''
    for(let i = 0; i < length ;i++){
        name += String.fromCharCode(randomAccess(0x4e00,0x9FA5))
    }
    return name
}

function Setting({userinfo}){
    const navigate = useNavigate()
    const [nickname,setNickname] = useState(getRandomName(Math.ceil(Math.random() * 3) + 2))
    const [gender,setGender] = useState(0)
    const [avatar,setAvatar] = useState('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')
    const avatarInputRef = useRef()
    const handleConfirm = async ()=>{
        await updateUser({
            id:userinfo.id,
            nickname,
            gender,
            avatar,
        })
        alert("设置成功")
        navigate('/login')
    }

    const selectFile = ()=>{
        avatarInputRef.current.click()
    }

    const changeFile = ({target:{files}}) =>{
        console.log({files});
    }
    return (
        <div className="flex flex-col p-6 rounded-md sm:max-w-md w-full h-full sm:h-auto sm:p-10 dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">设置</h1>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        {/* <label htmlFor="avatar" className="block mb-2 text-sm">头像</label> */}
                        {/* <input value={avatar} onChange={e=>setAvatar(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" /> */}
                        <div className="flex justify-center">
                            <input onChange={changeFile} ref={avatarInputRef} type="file" className='file-input hidden' accept=".jpg,.png"/>
                            <div className="avatar user-avatar cursor-pointer">
                                <div className="w-24 rounded-full">
                                    {
                                        avatar ? <img src={avatar} />
                                            : <div onClick={selectFile} className='flex justify-center items-center w-full h-full bg-slate-600'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-white"
                                                >
                                                    <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                    />
                                                </svg>
                                            </div>
                                    }
                                </div>
                                {
                                    avatar && <span onClick={selectFile} className="user-avatar-edit w-full h-full rounded-full justify-center items-center absolute top-0 left-0 bg-black opacity-40 hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            />
                                        </svg>
                                    </span>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div >
                        <label htmlFor="nickname" className="text-sm">昵称</label>
                        <input value={nickname} onChange={e=>setNickname(e.target.value)} type="email" name="email" id="email" placeholder="ikun@gmail.com" className="input input-ghost w-full max-w-xs border-none focus:outline-none outline-none dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" />
                    </div>
                    <div className='flex items-center '>
                        <label htmlFor="gender" className="text-sm">性别</label>
                        {/* <input value={gender} onChange={e=>setGender(e.target.value)} type="password" name="password" id="password" placeholder="*****" className=" px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100" /> */}
                        <div className='flex flex-row gap-6'>
                            <label onClick={()=>setGender(1)} className="label cursor-pointer">
                                <span className="label-text mx-4">男</span> 
                                <input type="radio" onChange={noop} name="radio-10" className="radio checked:bg-blue-500" checked={gender === 1}  />
                            </label>
                            <label onClick={()=>setGender(2)} className="label cursor-pointer">
                                <span className="label-text mx-4">女</span> 
                                <input type="radio" onChange={noop} name="radio-10" className="radio checked:bg-red-500" checked={gender === 2} />
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className='flex gap-6'>
                    {/* <button onClick={handleConfirm} type="button" className="btn flex-1">跳过</button> */}
                    <button onClick={handleConfirm} type="button" className="flex-1 px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">确定</button>
                </div>
            </form>
        </div>
    )
}