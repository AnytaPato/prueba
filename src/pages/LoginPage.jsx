import React from 'react'

const LoginPage = () => {
    return (
   
     <div className="container">
         <h4>Login</h4>
        <hr />
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
          <label for="icon_prefix2">
              Email</label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">https</i>
          <input 
          id="icon_prefix2" 
          className="materialize-textarea"
          type="text"
          />
          <label for="icon_prefix2">
              Password</label>
        </div>
        
      </div>
      <button className="btn waves-effect waves-light" type="submit"><i class="material-icons right">cloud</i>Enviar</button>
        </form>
       </div>   
     </div>
     
     
      
    )
}

export default LoginPage
