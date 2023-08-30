import dayjs from "dayjs"


export default function MsgText({isSelf,text,nickname,date,avatar}){



    return (
        <div className={'p-2 chat ' + (isSelf ? 'chat-end' : 'chat-start') }>
            <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                    <img src={avatar} />
                </div>
            </div>
            <div className={isSelf ? 'chat-header flex flex-row-reverse items-center gap-2' : 'chat-header flex flex-row items-center gap-2'}>
                <span>{nickname}</span><time className="text-xs opacity-50">{dayjs(date).format('HH:mm')}</time>
            </div>
            <div className="chat-bubble">{text}</div>
        </div>
    )
}