import React, { useState,useEffect } from "react";
import './MovieList.css'
import data from "../Data/data";
import { useDispatch } from "react-redux";
import {add,remove} from '../store/cartSlice';
import { useSelector } from 'react-redux';


import {addMovie,removeMovie,setMovie} from '../store/dataSlice';

function MovieList(){
    const userdata = useSelector((state)=>state.name);
    const name = userdata.name;
    const password = userdata.password;

    const dispatch = useDispatch();
    const [admin,setAdmin] = useState();
    // const newData = useSelector((state)=>state.data);
    // let arr = useSelector((state)=>state.data).data;
    let arr = useSelector((state)=>state.data).data2;
    console.log("arr from movielist",arr);
    // console.log("newdata=",newData.data);
    // const [arr,setArr] = useState(newData.data);
    // const [updateUi,setUpdateUi] = useState('');
    useEffect(()=>{
        console.log("useeffect");
        console.log("data",name,password);
        if(name==='admin' && password ==="admin"){
            setAdmin(true);
        }
        else{
            setAdmin(false);
        }
        
    },[arr])

    useEffect(()=>{
        if(name==='admin' && password ==="admin"){
            setAdmin(true);
        }
        else{
            setAdmin(false);
        }
        console.log("admin",admin);
        const sorteddata=[...arr]
        .sort((a,b)=>Number(a.year)-Number(b.year))
        dispatch(setMovie(sorteddata))
    },[])

    console.log("arr",arr);
    const [title,setTitle] = useState('');
    const [director,setDirector] = useState('');
    const [year,setYear] = useState('');
    
    const [runtime,setRuntime] = useState('');
   
    const SortName=(e)=>{
        e.preventDefault();
        console.log("sort name");
        const sorteddata=[...arr]
        .sort((a,b)=>a.title.localeCompare(b.title))
       
        dispatch(setMovie(sorteddata))
       
    
    }
    const SortDirector=(e)=>{
        e.preventDefault();
        
        const sorteddata=[...arr]
        .sort((a,b)=>a.director.localeCompare(b.director))
        
        dispatch(setMovie(sorteddata))
       
    
    }
   
    const handleAdd = (Movie)=>{
        dispatch(add(Movie));
    }
    const handleDelete = (Movie)=>{
        dispatch(removeMovie(Movie))
    }
    const addItem = ()=>{
        let temp = {
            title:title,
            director:director,
            runtime:runtime,
            year:year
        }
        dispatch(addMovie(temp))
        // setUpdateUi('a');
       
    }
    return(
        <div>

             {
             admin?
             <div>
            <h1 className="text-primary d-flex justify-content-center m-4">Add Movie</h1>
            <form className="row mx-4 d-flex justify-content-center align-items-center">
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter title"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setDirector(e.target.value)} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Director"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setYear(e.target.value)} type="number" className="form-control"  placeholder="Enter year"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setRuntime(e.target.value)} type="number" className="form-control"  placeholder="Enter runtime"></input>
                </div>
                
               
            </form>
            <button
                onClick={(e)=>addItem(e)}
                type="submit" className="btn btn-primary m-2">Submit</button>    
           
             </div>:<div></div>}

            <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Movies List</h1>
            <form className="d-flex justify-content-center g-2 align-items-center">
                    <div className="form-group mx-5">
                      
                    </div>
                    <div className="d-flex">
                    <h4 className="m-2"> Sort By: </h4>
                   
                    <button className="btn btn-primary m-2" onClick={(e)=>SortName(e)}>Title </button>
                     <button className="btn btn-primary m-2" onClick={(e)=>SortDirector(e)}>Director Name</button>
                    
                     </div>
                    
                  
                </form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            arr.map((item)=>(
            <div className="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">By - {item.director}</h6>
                  <p className="card-text">{item.runtime} minutes</p>
                  <p className="card-text">{item.year}</p>
                    <button onClick={()=>handleAdd(item)} className="m-2 btn btn-primary" >Add to Watchlist</button>
                 
                    {admin?
                    <button onClick={()=>handleDelete(item)} className="m-2 btn btn-primary" >Delete Movie</button>
                    :<div></div>}
                </div>
            </div>
            </div>
            ))}
            </div>

        </div>
    )
}
export default MovieList;