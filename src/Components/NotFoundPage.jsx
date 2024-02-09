import React from 'react'
import Img404 from '../Img/404-img.jpg'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='container'>
       <h1 className='text-center mt-5'>404 Not Found!</h1> 
       <div className='img-404'>
        <img src={Img404} />
       </div>
       <div className='d-flex justify-content-center pb-5'>
            <Link to={'/'} className='btn btn-primary'>Go to Home page</Link>
       </div>
    </div>
  )
}

export default NotFoundPage