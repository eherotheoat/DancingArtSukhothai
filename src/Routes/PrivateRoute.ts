import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const memberId = localStorage.getItem('memberId');

  // Life cycle
  useEffect(() => {
    if(memberId){
      navigate("/")
    }else{
      navigate("/auth/login")
    }
  }, []);

  

  // Alert error
  useEffect(() => {
    
  }, []);

  return children;
}

export default PrivateRoute;
