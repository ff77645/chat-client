import {Card,CardBody,CardHeader,CardFooter,Input,Spacer,Button} from '@nextui-org/react'
import {useState,useRef} from 'react'
import {register,updateUser} from '../../api/login'



export default function Registe({setUserinfo}){
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
        <Card className='w-[500px] bg-primary-foreground'>
            <CardHeader className='pt-4'>
                <h1 className='text-3xl text-center font-bold w-full text-foreground'>注册</h1>
            </CardHeader>
            <CardBody>
                <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" label="邮箱" placeholder="请输入你的邮件地址" />
                <Spacer y={5}></Spacer>
                <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" label="密码" placeholder="请输入密码" />
                <Spacer y={5}></Spacer>
                <Input value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)} type="password" label="确认密码" placeholder="请再次输入密码" />
            </CardBody>
            <CardFooter className='flex flex-col pb-4'>
                <Button onClick={handleRegister} type="button" fullWidth className='bg-primary' size='lg'>注册</Button>
                <Spacer y={2}></Spacer>
                <div className="text-foreground">
                    <a href="/register" className='text-gray-300'> 去登陆 </a>
                </div>
            </CardFooter>
        </Card>
    )
}