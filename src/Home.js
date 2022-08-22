import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className='App'>
     
        <h1>End your Movie Search Here</h1>
        <div className = "justify-content-evenly m-4 p-2" style = {{display:"flex"}}>
        
        <Link className='btn btn-primary ' to='/login'>Login</Link>
       
        
        </div>
    
        
      </div>
    );
  }
  
  export default Home;