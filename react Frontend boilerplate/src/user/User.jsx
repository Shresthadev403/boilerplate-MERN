import { Link} from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { getUsers } from "../auth/admin";
import { getProfile } from "../auth/user";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUsers().then((data) => {
     // console.log("all users:", data);
      setUsers(data.data.users);
    });
  }, []);


  const renderUsers = () => {
    return users.map((user, i) => {
    //  console.log(user);
      return (<div  key={i}>
      <div className="column card">
      <h2>Name:{user.name}</h2>
      <p>Email:{user.email}</p>
      <div className="form-control">
      <Link  to={`/user/profile/${user._id}`} className="button-submit" >View profile</Link>
      </div>
      
      </div>
      </div>);
    });
  };

  //console.log(users);

  if (users == null) return null;
  else {
    return <div className="row">{renderUsers()}</div>;
  }
}

export default User;
