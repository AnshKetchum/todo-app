import {React} from 'react'
import './TodoItem.css';
import pencil from './pencil.png'
import check from './check-mark.png'
import right from './right-arrow.png'
import left from './arrow.png'

//Class on line 12,14,15,16
//Alt message isn't sensible
//Conflicting position styles on the tailwind classes - Stage 2

//Look for all POSSIBLE bugs
function TodoItem(props)
{
    return (
        <div class=" todo-container p-10 bg-white" >  
            <div className ="max-w-sm rounded overflow-hidden shadow-lg card-container">
                  <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> {props.title} </div>
                        <p class="text-gray-700 text-base">
                        <strong> Description: </strong> {props.description}
                        </p>
                        <p class="text-gray-700 text-base"> <strong> Deadline: </strong> {props.deadline} </p>
                        <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-marigold-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleClickEdit(props.id)}> 
                              <img src= {pencil} alt = "oops"/>
                        </button>
                        <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleClick(props.id)}> 
                              <img src= {check} alt = "oops"/>
                        </button>
                        <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleRotate(props.id, 1)}>
                              <img src = {left} alt = "oops" />
                        </button>
                        <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleRotate(props.id, -1)}> 
                              <img src = {right} alt = "oops" />
                        </button>
                  </div>
            </div>
      </div>


    )
}

export default TodoItem;


/*
                <div class=" todo-container p-10 bg-white" >  
        <div class="max-w-sm rounded overflow-hidden shadow-lg card-container">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"> {props.title} </div>
            <p class="text-gray-700 text-base">
                <strong> Description: </strong> {props.description}
            </p>
            <p class="text-gray-700 text-base"> <strong> Deadline: </strong> {props.deadline} </p>
            <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-marigold-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleClickEdit(props.id)}> 
                  <img src= {pencil} alt = "oops"/>
            </button>
            <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleClick(props.id)}> 
                  <img src= {check} alt = "oops"/>
            </button>
            <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleRotate(props.id, 1)}>
                  <img src = {left} alt = "oops" />
            </button>
            <button className = "w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick = {() => props.handleRotate(props.id, -1)}> 
                  <img src = {right} alt = "oops" />
            </button>
          </div>
        </div>
        </div>
*/