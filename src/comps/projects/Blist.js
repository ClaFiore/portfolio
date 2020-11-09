import React, {useState} from 'react'
import './eachproj.css'

const Blist = (props) => {

  return(
    <div className='projContainer1'>
        <h3 className='projtitle'>THE B LIST - RENT A BAG, LIST A BAG</h3>

        <div className='projContent2'>
             <div className='projDescription3'>
                 <p>With 'The B List' users can browse and sort all the handbags available, and they can select the handbag of their choice to rent it. All handbags are listed by users, who can be listers and renters at the same time.</p>
                 <p>Each user can add a balance to their account and use it to complete the rental transaction. Tha amount increases or decreases after any transaction.</p>
                 <p>I built 'The B List' with a partner, during our time at Flatiron School. We used Ruby on Rails for our backend and vanilla Javascript and CSS for our frontend.</p>
             </div>
             <div className='projFacts4'>
                 <div className='projTechnologies5'>
                     <h4>Technologies/Libraries/Gems: </h4>
                    
                     <p>CSS: vanilla css</p>
                     <p>JS: vanilla JavaScript</p>
                     <p>Full CRUD actions on bags, users, and rented items</p>
              
                 </div>
                 <div className='projLinks6'>
                 <h4>Find my work here: </h4>
                     <p><a className='projLink' href="https://www.youtube.com/watch?v=SXgqQyT7wz8&feature=youtu.be" target="_blank" rel="noopener noreferrer">Video Demo</a></p>
                     <p><a className='projLink' href='https://github.com/ClaFiore/rent-a-bag'>Github Backend</a></p>
                     <p><a className='projLink' href='https://github.com/ClaFiore/rent-a-bag-frontend'>Github Frontend</a></p>
                 </div>
             </div>
        </div>
    </div>
)
}

export default Blist