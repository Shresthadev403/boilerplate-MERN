import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { deleteUser, getProfile } from "../auth/user";
import {useNavigate,useParams}from 'react-router-dom';
import { getJwt, signOut } from "../auth/auth";
import { infoNotification } from "../core/toast";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[location,setLocation]=useState("");
  const[aboutme,setAboutme]=useState("");
  const {userId}=useParams();

  const navigate=useNavigate();
  const deleteButton=()=>{
    deleteUser(userId).then((data)=>{
    //  console.log(data);

      if(data && getJwt().user.role==='admin'){
        infoNotification(data.data.msg);
        navigate('/users');
      }else{
        infoNotification("your account has been deleted sucessfully");
        signOut();
        navigate('/');
       setTimeout( window.location.reload(), 25000 )
        
      }

    });
  }
  const navigateToUserEditProfilePage=()=>{
    navigate(`/user/${userId}/edit`);
  }
  useEffect(() => {
    getProfile(userId).then((data) => {
      //  console.log("myprofile:",data);
      setName(data.data.name);
      setEmail(data.data.email);
      setLocation(data.data.location);
      setAboutme(data.data.aboutme);
    });
  }, [userId]);

  return (
    <>
      <div className="card">
        <h2 className="card-item">Name:{name}</h2>
        <h1 className="card-item">Email:{email}</h1>
        <h1 className="card-item">Location:{location}</h1>
        <h1 className="card-item">About me:{aboutme}</h1>
      </div>
     {(getJwt().user.role==='admin'|| getJwt().user._id===userId)&&( <div className="form-control">
        <div>
        <button type="submit" className="button-submit"onClick={navigateToUserEditProfilePage} >
        <b>Edit Profile</b>
      </button>
      <button type="submit" className="button-submit" onClick={deleteButton}>
        <b>Delete</b>
      </button>
        </div>      
      </div>)}
     
    </>
  );
}

export default Profile;
