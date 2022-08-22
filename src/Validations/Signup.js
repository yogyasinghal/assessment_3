// events -> onblur etc

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Signup(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [phone,setPhone] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkPhone,setCheckPhone] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass&&phone){
            setFlag(true);
        }
    })
    console.log("flag",flag);
    const WarningEmail = ()=>{
        console.log("required");
        if(email)
        setCheckEmail("")
        else
        setCheckEmail("Enter valid email address")
    }
    const WarningName = ()=>{
        console.log("required");
        if(name)
        setCheckName('')
        else
        setCheckName("Enter valid Name")
    }
    const WarningPass = ()=>{
        // console.log("required");
        if(pass)
        setCheckPass('');
        else
        setCheckPass("Enter valid Password")
    }
    const WarningPhone = ()=>{
        // console.log("required");
        if(pass)
        setCheckPhone('');
        else
        setCheckPhone("Enter valid Phone")
    }
    
    return(
        <div> 
        <h1 className="text-primary d-flex justify-content-center m-4">Signup</h1>

        <form className="d-grid justify-content-center g-2 align-items-center">
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningName} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"></input>
                <p className="text-danger" >{checkName}</p>
            </div>
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input type="number" onBlur={WarningPhone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Phone no"></input>
                <p className="text-danger" >{checkPhone}</p>
            </div>
           
            <div className="form-group m-1">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="validationServer03" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <p className="text-danger">{checkEmail}</p>
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p className="text-danger">
                {checkPass}
            </p>
            
            <Link className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/login'> Submit </Link>
        </form>



        </div>
    )
}
export default Signup;