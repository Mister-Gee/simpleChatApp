import React from 'react';
import Frame from './Components/Frame';
import IncomingChat from './Components/IncomingChat';


const Chat = () => {
     

  return (
    <div className='chat-container'>
        <Frame>
            <IncomingChat 
                user="Gbenga"
                message="Hello World"
            />
        </Frame>
    </div>
  )
}

export default Chat