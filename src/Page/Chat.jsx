import React, {useEffect, useState} from 'react';
import Frame from './Components/Frame';
import IncomingChat from './Components/IncomingChat';
import OutgoingChat from './Components/OutgoingChat';
import { Row } from 'react-bootstrap';
import AuthModal from './Components/AuthModal';
import { useSelector } from 'react-redux';

const Chat = () => {
    const [chatMessages, setChatMessages] = useState([])
     const auth = useSelector(state => state.auth)
     const user = useSelector(state => state.user)

     const loadStorageMsgs = () => {
        let msgHistory = JSON.parse(localStorage.getItem("sca_msg"))
         if(msgHistory){
            setChatMessages(JSON.parse(localStorage.getItem("sca_msg")))
         }
     }

    useEffect(() => {
        loadStorageMsgs()
     }, [])
     
    const onStorage = () => {
        loadStorageMsgs()
    };

    window.addEventListener('storage', onStorage);   
  return (
    <div className='chat-container'>
        <Frame>
        {auth ? 
        <>
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
        </Frame>
    </div>
  )
}

export default Chat