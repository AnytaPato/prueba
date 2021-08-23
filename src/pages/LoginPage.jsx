import React from 'react';
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
      
     <div className="container teal #e3f2fd blue lighten-5"> 
       <br />
         <h3 className="#2962ff-text blue-text text-darken-2"><i class="material-icons">offline_pin</i>LOGIN</h3>
       <hr/>
       <div className="row container">
      
        <form className="col s12">
        <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">email</i>
          <input 
          id="icon_prefix2" 
          className="materialize-textarea"
          type="text"
          />
          <label htmlfor="icon_prefix2">
              Email</label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">https</i>
          <input 
          id="icon_prefix2" 
          className="materialize-textarea"
          type="text"
          />
          <label htmlfor="icon_prefix2">
              Password</label>
        </div>
        
      </div>
     
      <button className="btn waves-efect waves-left #2962ff blue accent-4" type="submit">
      <i class="material-icons left">cloud</i>
        Login
     </button>
     <hr/>
  
        
      <GoogleButton className="#2962ff blue accent-4" onClick={()=>console.log("google")}/>
      <br />
       <Link to="/register">Si no estás registrado hace click aquí <i className="material-icons">
         arrow_back
</i></Link>
        </form>
        
        
       </div> 
     
     </div>
     
  
     
      
    )
}

export default LoginPage
