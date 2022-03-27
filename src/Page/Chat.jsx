import React, {useEffect, useState, useRef} from 'react';
import Frame from './Components/Frame';
import IncomingChat from './Components/IncomingChat';
import OutgoingChat from './Components/OutgoingChat';
import { Button, Row } from 'react-bootstrap';
import AuthModal from './Components/AuthModal';
import { useSelector } from 'react-redux';

const Chat = () => {
    const [chatMessages, setChatMessages] = useState([])
    const [chatMessagesCount, setChatMessagesCount] = useState([])

    const [offSet, setOffset] = useState(25)

     const auth = useSelector(state => state.auth)
     const user = useSelector(state => state.user)

     const loadStorageMsgs = () => {
        let msgHistory = JSON.parse(localStorage.getItem("sca_msg"))
         if(msgHistory){
            let data = JSON.parse(localStorage.getItem("sca_msg"))
            setChatMessagesCount(data.length)
            setChatMessages(data.slice(Math.max(data.length - offSet, 0)))
         }
     }

    useEffect(() => {
        loadStorageMsgs()
     }, [offSet])
     
    const onStorage = () => {
        loadStorageMsgs()
    };

    window.addEventListener('storage', onStorage);  
    
  const chatRef = useRef(null)
  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages.length])

  const handleOffset = () => {
      setOffset(prev => prev + 25)
  }

  return (
    <div className='chat-container'>
        <Frame>
        {auth ? 
        <>
            {chatMessagesCount > 25 &&
                <Row>
                    <Button className='see-more-btn' onClick={handleOffset}>See More</Button>
                </Row>
            }
            {chatMessages.map((data, index) => {
                return data.username === user ?
                <Row key={index}>
                    <OutgoingChat 
                        user={data.username}
                        message={data.msg}
                    />
                </Row>
                :
                <Row key={index}>
                    <IncomingChat 
                        user={data.username}
                        message={data.msg}
                    />
                </Row>
            })}
        </>
        :
        <AuthModal />
        }
        <div ref={chatRef} />
        </Frame>
    </div>
  )
}

export default Chat