import {React} from 'react'
import './InfoSection.css'

function InfoSection(props)
{
    return <div className = 'grid-container'>
        <div className = "left">
            <ul>
                <li> You can </li>
            </ul>
        </div>
        <div className = "right"> 
            <h1> I'm pretty organized. Why create a Todo List? </h1>
        </div> 
    </div>
}


export default InfoSection;