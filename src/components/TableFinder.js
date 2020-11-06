import React, {useState} from 'react'
import './projects.css'
import tablefinder from '../images/tablefinder.png'

const TableFinder = () => {

    const [show, setShow] = useState(false)

    return(
        <div className='singleProjOuterDiv'>
            <div className='singleProjUpperDiv'>
                    <div className='singleProjTitleDiv'>
                            <h3 onClick={() => setShow(!show)} className='projectTitle'>TABLEFINDER</h3>
                            <p>TableFinder is a web application that allows users to browse restaurants in their location, or the location of their choice. They can filter restaurants by cuisine, and sort the results by price range or rating.</p>
                    </div>
                    
                    <div className='singleProjImgDiv'>
                        <img src={tablefinder} className='singleProjImg'/>
                        <div className="overlay">
                            <a href="https://www.youtube.com/watch?v=3jys7rMQ0io&feature=youtu.be" target="_blank" rel="noopener noreferrer"  className='icon'>
                                <i className="fa fa-youtube fa-4x"></i>
                            </a>
                        </div>
                    </div>
            </div>
            {show ? 
                <div>
                    <p>With authentication and authorization, only users who are logged in can make a reservation, they can indicate their party size, and select a time. TableFinder will then show the user the available time slots for the selected restaurants, so the user can proceed with the reservation.</p>
                <ul>
                    <li>CRUD: a user can create, view, edit, delete their account, and create and delete their reservations.</li>
                    <li>Backend: Ruby on Rails</li>
                    <li>Frontend: React with class components, functional components, React Hooks and React Router</li>
                    <li>API integration: Google Maps and Zomato Api (for restaurants data)</li>
                    <li>CSS Framework: Semantic UI</li>

                    <li>Github Backend: https://github.com/ClaFiore/Mod4BackEnd</li>
                    <li>Github Frontend: https://github.com/ClaFiore/Mod4FrontEnd</li>
                    <li>Demo: https://www.youtube.com/watch?v=3jys7rMQ0io&feature=youtu.be</li>
                </ul>
                </div>
                :
                null}
        </div>
    )
}

export default TableFinder