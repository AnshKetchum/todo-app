import './App.css';
import './index.css'
import TodoItem from './components/TodoItem/TodoItem'
import TodoCreator from './components/TodoCreator/TodoCreator';
import IntroSection from './components/IntroSection/IntroSection';
import {React, Component} from 'react'
import axios from 'axios';

const style1 = {
  backgroundImage: 'linear-gradient(to left bottom, #af0c39, #ba0056, #b60080, #9700b4, #1222eb);'
}

var todos = [
  {
    id: 0,
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed pharetra dui, quis dapibus lorem. Pellentesque ac tincidunt odio. Ut ut enim risus. Sed id quam volutpat, interdum odio vel, pretium tortor. Praesent faucibus tristique ultrices. Nulla iaculis ipsum vitae viverra gravida. Sed ultrices a odio nec interdum. Morbi maximus ligula non sapien ultrices convallis. Vestibulum lacus nisl, volutpat et euismod et, dapibus vitae felis. Donec placerat, mauris ac dapibus condimentum, augue urna tempus magna, auctor maximus felis sapien ac purus. Nulla posuere id neque at eleifend. Nulla turpis felis, euismod at suscipit id, pretium et lectus. Phasellus ullamcorper sagittis metus id ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam cursus quis massa ac aliquet. Aenean faucibus metus non lacinia dignissim.' ,
    deadline: '4-4-4444',
  },
  {
    id: 1,
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed pharetra dui, quis dapibus lorem. Pellentesque ac tincidunt odio. Ut ut enim risus. Sed id quam volutpat, interdum odio vel, pretium tortor. Praesent faucibus tristique ultrices. Nulla iaculis ipsum vitae viverra gravida. Sed ultrices a odio nec interdum. Morbi maximus ligula non sapien ultrices convallis. Vestibulum lacus nisl, volutpat et euismod et, dapibus vitae felis. Donec placerat, mauris ac dapibus condimentum, augue urna tempus magna, auctor maximus felis sapien ac purus. Nulla posuere id neque at eleifend. Nulla turpis felis, euismod at suscipit id, pretium et lectus. Phasellus ullamcorper sagittis metus id ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam cursus quis massa ac aliquet. Aenean faucibus metus non lacinia dignissim.' ,
    deadline: '4-4-4444',
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed pharetra dui, quis dapibus lorem. Pellentesque ac tincidunt odio. Ut ut enim risus. Sed id quam volutpat, interdum odio vel, pretium tortor. Praesent faucibus tristique ultrices. Nulla iaculis ipsum vitae viverra gravida. Sed ultrices a odio nec interdum. Morbi maximus ligula non sapien ultrices convallis. Vestibulum lacus nisl, volutpat et euismod et, dapibus vitae felis. Donec placerat, mauris ac dapibus condimentum, augue urna tempus magna, auctor maximus felis sapien ac purus. Nulla posuere id neque at eleifend. Nulla turpis felis, euismod at suscipit id, pretium et lectus. Phasellus ullamcorper sagittis metus id ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam cursus quis massa ac aliquet. Aenean faucibus metus non lacinia dignissim.' ,
    deadline: '4-4-4444',
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed pharetra dui, quis dapibus lorem. Pellentesque ac tincidunt odio. Ut ut enim risus. Sed id quam volutpat, interdum odio vel, pretium tortor. Praesent faucibus tristique ultrices. Nulla iaculis ipsum vitae viverra gravida. Sed ultrices a odio nec interdum. Morbi maximus ligula non sapien ultrices convallis. Vestibulum lacus nisl, volutpat et euismod et, dapibus vitae felis. Donec placerat, mauris ac dapibus condimentum, augue urna tempus magna, auctor maximus felis sapien ac purus. Nulla posuere id neque at eleifend. Nulla turpis felis, euismod at suscipit id, pretium et lectus. Phasellus ullamcorper sagittis metus id ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam cursus quis massa ac aliquet. Aenean faucibus metus non lacinia dignissim.' ,
    deadline: '4-4-4444',
  },
]



class App extends Component
{
    constructor(props)
    {
      super(props)

      this.getTodos() 

      this.handleSubmit = this.handleSubmit.bind(this) //Forget to bind, errors in components
      this.handleDescChange = this.handleDescChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)
      this.handleDeadlineChange = this.handleDeadlineChange.bind(this)
      this.handleButtonDoneClick = this.handleButtonDoneClick.bind(this)
      this.handleButtonEditClick = this.handleButtonEditClick.bind(this)
      this.handleRotate = this.handleRotate.bind(this) //Line 180, error possibility 


      this.state = {
          runningDes: "",
          runningTitle: "",
          runningDeadline: "",
          todos: todos
      }
    }

    getTodos()
    {
        axios.get('https://jsonplaceholder.typicode.com/todos').then( res => {
          var tmp = this.state.todos

          res.data.forEach( dat => {
              tmp.push({
                id: dat.id - 1,
                title: "This is the " + dat.id + (dat.id === 1 ? "st" :"th" ) + "todo!",
                desc: dat.title,
                deadline: "6-22-2021"
              })
          })

          this.setState({
            todos: tmp,
          })
        })
        console.log(todos)
        
    }

    handleTitleChange(e)
    {
        this.setState({ runningTitle: e.target.value})
    }
    handleDescChange(e)
    {
        this.setState({ runningDes: e.target.value})
    }
    handleDeadlineChange(e)
    {
        this.setState({ runningDeadline: e.target.value})
    }

    handleSubmit()
    {
        if(this.state.runningDes === '' || this.state.runningTitle === '' || this.state.runningDeadline === '')
        {
          alert('At least one of the fields isn\'t complete. Please fill it up!')
          return 
        }
      
        this.setState( (currentState) => {
          return {
            todos: currentState.todos.concat([{id: currentState.todos.length, title: currentState.runningTitle, desc: currentState.runningDes, deadline: currentState.runningDeadline }]),
            runningDes: "",
            runningDeadline: "",
            runningTitle: "",
          }
        })
    }

    handleButtonDoneClick(id)
    {
        this.setState( (currentState) => {
          return {
            todos: currentState.todos.filter( (todo) => todo.id !== id)
          }
        })
        alert('Congratulations!')
    }

    handleButtonEditClick(id)
    {
      this.setState( (currentState) => {
        return {
          todos: currentState.todos.filter( (todo) => todo.id !== id),
          runningTitle: currentState.todos[id].title,
          runningDes: currentState.todos[id].desc,
          runningDeadline: currentState.todos[id].deadline,
        }
      })

      alert('We have moved your edits to the edit wizard! Edit it and add it back when you are ready!')
    }


    
    handleRotate(id, n)
    {
        let rotated = [...this.state.todos.slice(n, this.state.todos.length), ...this.state.todos.slice(0, n)]
        for(let i = 0; i < rotated.length; i++)
          rotated[i].id = i;
        
        this.setState( (currentState) => {
          return {
            todos: rotated
          }
        })
    }

    render()
    {
      return (
        <div className="App" style = {style1} >
          <IntroSection />

          <TodoCreator  
          handleSubmit = {this.handleSubmit} 

          title = {this.state.runningTitle}
          desc  = {this.state.runningDes}
          deadline = {this.state.runningDeadline}

          titleChange = {this.handleTitleChange}
          descChange = {this.handleDescChange}
          deadlineChange = {this.handleDeadlineChange} 
          />
          
           <div className = "grid-container bg-gradient-to-br from-green-400 to-cyan-500">
              {this.state.todos.map( (todo) => {
                return <TodoItem className = "todo-item" id = {todo.id} title = {todo.title} description = {todo.desc} deadline = {todo.deadline} handleClick = {this.handleButtonDoneClick} handleClickEdit = {this.handleButtonEditClick}
                handleRotate = {this.handleRotate}  />
              })}
           </div>
        </div>
      );
    }
}


export default App;
