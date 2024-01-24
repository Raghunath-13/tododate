import Todoitem from "./Todoitem";

const Todoitems=({todoItems,onDeleteClick})=>{
    return (
    <div className='item-container'>
     {todoItems.map(item=> <Todoitem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>)}
    {/* <Todoitem todoDate="14/02/24" todoName="buy milk"/> */}
    {/* <Todoitem todoDate="17/02/24" todoName="buy bread"/>
    <Todoitem todoDate="19/02/24" todoName="buy eggs"/> */}
 
    
 
   
    </div>
    )
};

export default Todoitems;