import React from 'react';

import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="row">
        <div className="container teal #e3f2fd  lighten-5"> 
          <br />
            <h3 className="center-align blue-text"> 
                 REGISTRO</h3>
          <hr/>
          <div className="row container">
         
           <form className="col s12">
           <div className="row">
           <div className="input-field col s12">
             <i className="material-icons prefix">accessibility</i>
             <input 
             id="icon_prefix2" 
             className="materialize-textarea"
             type="text"
             />
             <label htmlfor="icon_prefix2">
                 Nombre y apellido</label>
           </div>
           <div className="input-field col s12">
             <i className="material-icons prefix">call</i>
             <input 
             id="icon_prefix2" 
             className="materialize-textarea"
             type="text"
             />
             <label htmlfor="icon_prefix2">
                Nùmero de teléfono </label>
           </div>
           <div className="input-field col s12">
             <i className="material-icons prefix">edit_location</i>
             <input 
             id="icon_prefix2" 
             className="materialize-textarea"
             type="text"
             />
             <label htmlfor="icon_prefix2">
                 Dirección</label>
           </div>
   
           <div className="input-field col s12">
             <i className="material-icons prefix">flag</i>
             <input 
             id="icon_prefix2" 
             className="materialize-textarea"
             type="text"
             />
             <label htmlfor="icon_prefix2">
                Nacionalidad</label>
           </div>

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
             <i className="material-icons prefix">enhanced_encryption
</i>
             <input 
             id="icon_prefix2" 
             className="materialize-textarea"
             type="text"
             />
             <label htmlfor="icon_prefix2">
                password</label>
           </div>
           
         </div>
        
         <button className="btn waves-efect waves-left #2962ff blue accent-4" type="submit">
         <i class="material-icons left">cloud</i>
           Registro
        </button>
        <hr/>
     
           
         <GoogleButton className="#2962ff blue accent-4" onClick={()=>console.log("google")}/>
         <br />
          <Link to="/login">Si ya estás registrado hace click aquí <i className="material-icons">
            arrow_back
   </i></Link>
           </form>
           
           
          </div> 
        
        </div>
        </div>
     
        
         
       )
};

export default RegisterPage;
