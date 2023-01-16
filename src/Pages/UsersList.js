import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers, deleteUser } from "../Redux/Actions/userActions";
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


export const UserList = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
      });
    const users = useSelector((state) => state.userReducer.users);
    
    useEffect(() => {
        dispatch(getUsers(dispatch));
      }, []);

    const handleChanges = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };  
     
    return (
        <>
        <h2>Add Users To List</h2>
        <input type='text' name='name' placeholder="Name" onChange={handleChanges} />
        <input type='email' name='email' placeholder="E-mail" onChange={handleChanges} />
        <div>
            <Button onClick={() => {
                            dispatch(addUser(user, dispatch));
                     }}>Add User</Button>
        </div>
        {users.map((user) => {
        return (
        <ListGroup style={{width:'34%', margin:'auto', marginBottom:'20px', marginTop:'20px' }} key={user.id} as="ul">
            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item>E-mail:{user.email}</ListGroup.Item>
        <div>
      <Button onClick={() => dispatch(deleteUser(user.id, dispatch))}>
      Delete User
    </Button>
    <Link to={`/users/${user.id}`}>
        <Button>Details User</Button>
         </Link>
         </div>
    </ListGroup>
        )})}
    </>
    )
}