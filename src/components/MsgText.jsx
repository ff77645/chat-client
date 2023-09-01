import dayjs from "dayjs"


export default function MsgText({isSelf,text,nickname,date,avatar}){



    return (
        <div className={'p-2 chat ' + (isSelf ? 'chat-end' : 'chat-start') }>
            <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                    <img src={avatar} />
                </div>
            </div>
            <div className={ 'chat-header flex items-center gap-2' + isSelf ? 'flex-row-reverse' : 'flex-row'}>
                <span>{nickname}</span><time className="text-xs opacity-50">{dayjs(date).format('HH:mm')}</time>
            </div>
            <div className="chat-bubble">{text}</div>
        </div>
    )
}