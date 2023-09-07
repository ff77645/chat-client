import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {login} from '../api/login'
import {Card,CardBody,CardHeader,CardFooter,Input,Spacer,Button} from '@nextui-org/react'

export default function Login(){
    const navigate = useNavigate()

    const [email,setEmail] = useState('admin@qq.com')
    const [password,setPassword] = useState('123456')

    const handleLogin = async ()=>{
        if(!email || !password) return alert('请输入账号密码')
        const res = await login({
            email:email,
            password
        })
        console.log({res});
        localStorage.setItem('token',res.token)
        localStorage.setItem('userinfo',JSON.stringify(res.user))
        navigate('/chat')
    }
    return (
        <div className="h-screen flex justify-center items-center bg-background">
            <Card className='w-[500px] bg-primary-foreground'>
                <CardHeader className='pt-4'>
                    <h1 className='text-3xl text-center font-bold w-full text-foreground'>登陆</h1>
                </CardHeader>
                <CardBody>
                    <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" label="邮箱" placeholder="请输入你的邮件地址" />
                    <Spacer y={5}></Spacer>
                    <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" label="密码" placeholder="请输入密码" />
                </CardBody>
                <CardFooter className='flex flex-col pb-4'>
                    <Button onClick={handleLogin} type="button" fullWidth className='bg-primary' size='lg'>登陆</Button>
                    <Spacer y={2}></Spacer>
                    <div className="text-foreground">
                        <span className='text-gray-500'>还没有账户? </span>
                        <a href="/register" className='text-gray-300'> 注册 </a>
                    </div>
                </CardFooter>
            </Card>
        </div>    
    );
}