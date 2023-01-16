import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../Redux/Actions/userActions";
 
export const UserDetail = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    useEffect(() => {
        dispatch(getUserById(userId, dispatch));
      }, []);
      
    return (
        <>
      <h1>User Details</h1>
      <h4>Full Name:{user.name}</h4>
      <h4>E-mail : {user.email}</h4>
    </>
    )
}