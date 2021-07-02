import {React} from 'react'
import './TodoCreator.css'

//class instead of className
function TodoCreator (props)
{
    return (
        <div class="register-photo">
        <div class="form-container">
            <div class="image-holder">
                <h2 class="text-center"><strong>Have something you gotta do? </strong> Create a Todo! </h2>
            </div>

            <div class="form">
                <div class="form-group"><textarea class="form-control" type="text" onChange = {props.titleChange} value ={props.title} placeholder="Enter something to call your todo!" cols = "100" rows = "200"/></div>
                <div class="form-group"><textarea class="form-control" type="text" onChange = {props.descChange} value = {props.desc} placeholder="Enter a description" cols = "100" rows = "200"/></div>
                <div class="form-group"><textarea class="form-control" type="text" onChange = {props.deadlineChange} value = {props.deadline} placeholder="Tell us when you want to complete it" cols = "100" rows = "200" /></div>

                <div class="form-group">     <button class="btn btn-success btn-block w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"  onClick = {props.handleSubmit}> Add the Todo! </button> </div>
            </div>
        </div>
    </div>	
    )
}

export default TodoCreator;