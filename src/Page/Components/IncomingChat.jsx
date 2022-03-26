import React from 'react'

const IncomingChat = ({user, message}) => {
  return (
    <div className='incoming-chat'>
        <div className='avatar'>
            <span className="iconify" data-icon="carbon:user-avatar-filled"></span>
        </div>
        <div className='message'>
            <div className='user'>{user}</div>
            <div className='message'>{message}</div>
        </div>
    </div>
  )
}

export default IncomingChat