import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./NotFound.css"





const NotFound = ()=>{


    useEffect(()=>{
        document.body.style.zoom = "70%";
      },[])
  





    return(
        <div>

<section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Looks like you are lost
		</h3>
		
		<p>the page you are looking for is not avaible!</p>
		<Link to ="/Home">
        <button className="btn minus btn-primary px-3 py-2 ms-2" style={{backgroundColor:'green'}}  >
                   Go Back To Home
                  </button>
        </Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>

        </div>
    )
}

export default NotFound