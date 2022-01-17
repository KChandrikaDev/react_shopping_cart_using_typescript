import React from "react";
import { UsersType } from "../types/users.type";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { fail } from "assert";
type IProps = {
  Users:UsersType[];
};

const UserAuth: React.FC<IProps> = ({Users}) => {
  const [email, setEmail] = React.useState("");
  const [pswd, setPswd]= React.useState("");
  const [ user, SetUser] = React.useState(null);
  const [IsLoggedIn, setIsLoggedIn] =React.useState(false);
  const[ show, setShow] = React.useState(false)
  const navigate = useNavigate();

 const onSubmit=(e:any) =>{
   e.preventDefault();
    console.log("submit", email, pswd)
    console.log("Users", Users)
    
    if(email !=="" && pswd !==""){
     
      setShow(true)
   const findData= Users.find(u=>{
     return (u.email === email)&&(u.password === pswd)
   })
   if(email === findData?.email && pswd === findData.password)  setIsLoggedIn(true)
   if(findData?.type==='user'){
    //  setIsLoggedIn(true)
    navigate("/");
    localStorage.setItem("users", JSON.stringify(findData))
    window.location.reload()
   }
   else if(findData?.type === 'admin'){
    //  setIsLoggedIn(true)
    navigate("/products");
    localStorage.setItem("users", JSON.stringify(findData))
    window.location.reload()

   }
   setEmail("")
   setPswd("")

 }
 
 
 }
  return (
    <>
     <div id="animate-area-login">
    <div className="container shadow w-25 login text-white" >
      {show?(IsLoggedIn ?
    <p className="text-success">SuccessFully LoggedIn...</p>:
    <p className="text-danger">Invalid Creditionals...</p>):""}
         
      <form onSubmit={(e)=>onSubmit(e)}>
        <h1 className="text-center mt-1 text-white">LogIn</h1>
       
        <div className=" mt-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control login-box"
           
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            // onChange={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control login-box"
           
            placeholder="Enter password"
            name="pswd"
            value={pswd}
            // onChange={(e)=>handleInputChange(e)}
            onChange={(e)=>{
              setPswd(e.target.value)
            }}
          />
        </div>
        <div className="mb-5\3 ">
          <button className="btn btn-info  login-button mb-5">Login</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default UserAuth;
