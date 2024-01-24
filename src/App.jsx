import { useState } from 'react'


import AppName from './cOMPONENTS/AppName'
import AddTodo from './cOMPONENTS/AddTodo'


import './App.css'
import Todoitem from './cOMPONENTS/Todoitem'
import Todoitems from './cOMPONENTS/Todoitems'
import Welcome from './cOMPONENTS/Welcome'


function App() {


const [todoItems, settodoItems] = useState([])
const handleNewItem=(itemName,ItemDueDate)=>{
console.log(`New item added:${itemName} Date:${ItemDueDate}`)
const newTodoItems =[...todoItems,{name:itemName,dueDate:ItemDueDate}]
settodoItems(newTodoItems)
}

const HandleDeleteItem =(todoItemName)=>{
const newTodoItems=todoItems.filter(item=>item.name !== todoItemName )
settodoItems(newTodoItems)
}

  return (
    <>
   <center className="todo-container">
    
   <AppName/>

   <AddTodo onNewItem={handleNewItem}/>
   {todoItems.length ===0 && <Welcome todoItems={todoItems}/>}
   <Todoitems todoItems={todoItems} onDeleteClick={HandleDeleteItem}/>
  
   
   </center>
      
      
   



    </>
  )
}

export default App
