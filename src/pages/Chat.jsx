import React, { useState } from 'react';


/* 
房间

*/

const Chat = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="h-full flex flex-col">
        <div className="bg-slate-600 flex-none h-16 text-center flex flex-row flex-nowrap justify-between items-center px-2">
            <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className="">
                    title
            </div>
            <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
        </div>
        <div className="flex-1 flex flex-col items-stretch">
            <div className="flex-1 overflow-auto">
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
        </div>
    </div>
  );
};

export default Chat;