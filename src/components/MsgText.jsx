


export default function MsgText({isSelf,text,username,time}){



    return (
        <div className={'p-2 chat ' + (isSelf ? 'chat-end' : 'chat-start') }>
            <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {username}<time className="text-xs opacity-50">{time}</time>
            </div>
            <div className="chat-bubble">{text}</div>
        </div>
    )
}