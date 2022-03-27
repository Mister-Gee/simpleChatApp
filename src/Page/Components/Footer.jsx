import React, {useState} from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Footer = () => {
    const [message, setMessage] = useState("")
    const user = useSelector(state => state.user)
    const auth = useSelector(state => state.auth)


    const handleSubmit = () => {
        if(message !== "" && auth){
            let msgObj = {
                username: user,
                msg: message
            }

            let msgStorage = JSON.parse(localStorage.getItem("sca_msg"))
            if(msgStorage == null){
                msgStorage = []
            }
            msgStorage.push(msgObj)
            setMessage("")
            localStorage.setItem("sca_msg", JSON.stringify(msgStorage))
            window.dispatchEvent(new Event("storage"));
        }
    }
  return (
    <footer>
        <Form className="form">
            <Row>
                <Form.Group as={Col} controlId="formGridText">
                    <Form.Control 
                        type="text" 
                        placeholder="Start Typing..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Button onClick={handleSubmit}>Send</Button>
                </Form.Group>
            </Row>
        </Form>
    </footer>
  )
}

export default Footer