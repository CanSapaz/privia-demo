import React from 'react'
import Navbar from '../components/Navbar/Navbar'



function ErrorPage() {
  return (
    <div className='error-page'>
        <Navbar/>
        <div className='d-flex justify-content-center align-items-center not-found'>
           404 Not Found 
        </div>
    </div>
  )
}

export default ErrorPage