import React, { useState } from 'react';


/* 
房间

*/

const Chat = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  return (
    <>
        <section className="h-screen flex flex-col">
            <header className="flex-none bg-slate-600 h-16 text-center flex flex-row flex-nowrap justify-between items-center px-2">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <div className="">
                        title
                </div>
                <button type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </button>
            </header>
            <main className="flex flex-1 flex-col items-stretch">
                <div className=" overflow-auto" style={{height:'calc(100vh - 8rem)'}}>
                    {
                        Array.from({length:11}).map((_,i)=>(
                            <div key={i} className="chat chat-start">
                                <div className="chat-bubble">Its over Anakin, <br/>I have the high ground.</div>
                            </div>
                        ))
                    }
                    <div className="chat chat-end">
                        <div className="chat-bubble">You underestimate my power!</div>
                    </div>
                </div>
                <div className="p-2 h-14 flex-none">
                    <input type="text" placeholder="Type here" className="bg-slate-300 input w-full " />
                </div>
            </main>
        </section>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="p-4 w-80 h-full bg-base-200 text-base-content">
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
                <label onClick={()=>{
                    console.log(123);
                }} className="modal-backdrop" htmlFor="my_modal_1">Close</label>
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
                <label onClick={()=>{
                    console.log(123);
                }} className="modal-backdrop" htmlFor="my_modal_2">Close</label>
            </div>
        </div>
    </>
  );
};

export default Chat;