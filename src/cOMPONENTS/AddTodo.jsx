import { useState } from "react"

function AddTodo({onNewItem}){

  const [todoName, settodoName] = useState("")
  const [dueDate, setDuedate] = useState("")

  const handleNameChange=(event)=>{
   settodoName(event.target.value)
  }
  const handleDateChange=(event)=>{
   setDuedate(event.target.value)
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName,dueDate)
    setDuedate("")
    settodoName("")
  }

    return(
        <div className="container">
 
  <div className="row kg-rows">
    <div className="col-6">
      <input type='text' value={todoName} placeholder='enter todo here' onChange={handleNameChange}/>
    </div>
    <div className="col-4">
      <input type='date' value={dueDate} onChange={handleDateChange} />
    </div>
    <div className="col-2">
    <button type="button" className="btn kg-button btn-success" onClick={handleAddButtonClicked}>Add</button>
    </div>
  </div>
</div>
    )
}
export default AddTodo;