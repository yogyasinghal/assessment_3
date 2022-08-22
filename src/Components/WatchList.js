import React, { useEffect, useState } from "react";
import './MovieList.css';
import { useDispatch } from "react-redux";
import {remove} from '../store/cartSlice';
import { useSelector } from 'react-redux';
// import data from "../Data/data";
function WatchList(){
    const [login,setLogin] = useState(false);
    const arr = useSelector((state)=>state.cart);
    console.log("arr",arr);
    // const temp = useSelector((state)=>state.name);
    // console.log("temp cart = ",temp);
    const data = useSelector((state)=>state.name);
    const name = data.name;
    const password = data.password;
    useEffect(()=>{
        if(name!=="" && password!==""){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    },[])
    console.log("name= cart ",name);
    // const password = data.password;
    const dispatch = useDispatch();
    
    const handleDelete=(movie)=>{
        console.log("delete ",movie);
        dispatch(remove(movie));
    }
    
    return(
        <div>
        {login?
        <div>
            <h1 id="e1" className="text-primary d-flex justify-content-center m-4" > {name}'s Watchlist</h1>
           
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            arr.map((item)=>(
            <div class="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.author}</h6>
                  <p className="card-text">{item.language}</p>
                  <p className="card-text">{item.year}</p>
                   <button onClick={()=>handleDelete(item)}>Delete item</button>
                
                </div>
            </div>
            </div>
            ))}
            </div>

        </div>
        :<div><h1>Please Login to Continue</h1></div>
    }
    </div>
    )
}
export default WatchList;