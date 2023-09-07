import {useState} from 'react'
import Setting from './Setting';
import Registe from './Registe';


export default function Register(){
    const [userinfo,setUserinfo] = useState('')

    return (
        <div className="h-screen flex justify-center items-center bg-background">
            {/* {
                userinfo ? <Setting userinfo={userinfo} /> : <Register setUserinfo={setUserinfo}/>
            } */}
            <Setting userinfo={userinfo} />
        </div>
    );
}