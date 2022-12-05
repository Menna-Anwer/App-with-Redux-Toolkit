import React from 'react'
import { useRouteError,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
  return (
    <div>
       <div className='text-center mt-5'>
       <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
             <Button variant="link" onClick={()=>navigate("/",{replace:true})}>Link</Button>
            </div>
       </div>

    </div>
  )
}

export default ErrorPage
