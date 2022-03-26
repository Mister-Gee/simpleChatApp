import React from 'react'

const OutgoingChat = ({user, message}) => {
  return (
    <div className='outgoing-chat'>
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

export default OutgoingChat