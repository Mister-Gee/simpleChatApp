import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { authenticate } from '../../actions/authenticate';
import { adduser } from '../../actions/adduser';
import { useDispatch } from 'react-redux';


const AuthModal = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")

    const handleSubmit = () => {
        if(username !== ""){
            dispatch(adduser(username))
            dispatch(authenticate())
        }
    }
  return (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Control 
                type="text" 
                placeholder="Name" 
                className='auth-input'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary btn-signIn" onClick={handleSubmit}>Login</Button>
        </Modal.Footer>
    </Modal.Dialog>
  )
}

export default AuthModal