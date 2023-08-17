import React, { useState,useRef,useEffect } from 'react';
import MsgText from '../components/MsgText';
import './chat.css'

/* 
房间

*/




const Chat = () => {
  const scrollRef = useRef(null)
  const scrollInnerRef = useRef(null)

  const [msgList,setMsgList] = useState(Array.from({length:20}).map(()=>({
    text:'Notable Scientists',
    username:'username',
    time:"10:30",
    isSelf:false,
  })))

  const [inputValue,setInputValue] = useState('')

  const handleEnter = e =>{
    if(e.key !== "Enter") return
    if (!inputValue) return 
    const now = new Date()
    const msg = {
        isSelf:Math.random() > .5 ? true : false,
        username:'username2',
        text:inputValue,
        time:now.getHours() + ':' + (''+now.getMinutes()).padStart(2,0),
    }
    setMsgList(msgList.concat(msg))
    setInputValue('')
  }

  useEffect(()=>{
    scrollRef.current.scrollTo({
        top:scrollInnerRef.current.offsetHeight,
        behavior:'smooth'
    })  
  },[msgList])

  return (
    <>
        <section className="h-screen flex flex-col">
            <header className="flex-none bg-slate-600 h-16 text-center flex flex-row flex-nowrap justify-between items-center px-2">
                <label htmlFor="my-drawer" className="btn btn-neutral btn-xs sm:btn-sm drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <div className="">
                        title
                </div>
                <button type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </button>
            </header>
            <main className="flex flex-1 flex-col items-stretch">
                <div ref={scrollRef} className=" overflow-auto" style={{height:'calc(100vh - 8rem)'}}>
                    <div ref={scrollInnerRef}>
                        {
                            msgList.map((item,index)=>(<MsgText key={index} isSelf={ item.isSelf } text={item.text} username={item.username} time={item.time} ></MsgText>))
                        }
                    </div>
                </div>
                <div className="p-2 h-14 flex-none flex flex-row ">
                    <div className="join w-full">
                        <input value={inputValue} onChange={e=>setInputValue(e.target.value)} onKeyDown={handleEnter} className="input input-bordered join-item focus:outline-none flex-1" placeholder="Type here"/>
                        <button className="btn join-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                        </button>
                        {
                            inputValue ? <button className="btn join-item ">发送</button> : 
                            <button className="btn join-item ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            </main>
        </section>
        {/* 抽屉 */}
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className="flex justify-center">
                        <div className="user-avatar avatar cursor-pointer">
                            <div className="w-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <span className="user-avatar-edit w-full h-full rounded-full justify-center items-center absolute top-0 left-0 bg-black opacity-40 hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-around">
                        <label htmlFor="my_modal_1" className="btn btn-neutral self-center">创建房间</label>
                        <label htmlFor="my_modal_2" className="btn btn-neutral self-center">加入房间</label>
                    </div>
                </div>
            </div>
        </div>
        {/* 创建房间 */}
        <div>
            <input type="checkbox" id="my_modal_1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-center">创建房间</h3>
                    <div className="flex justify-center mt-4">
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="房间名称"/>
                            <button className="btn join-item ">创建</button>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_1">Close</label>
            </div>
        </div>
        {/* 加入房间 */}
        <div>
            <input type="checkbox" id="my_modal_2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-center">加入房间</h3>
                    <div className="flex justify-center mt-4">
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="房间号"/>
                            <button className="btn join-item ">加入</button>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_2">Close</label>
            </div>
        </div>
    </>
  );
};

export default Chat;