import logo from './logo.svg';
import './App.css';
import ToDoRow from './components/ToDoRow';
import Table from './components/Table';
import React , {useState} from 'react';
import Form from './FormToDo';




function App() {
 const [row,setRow] = useState([{id : 1, desc : "Tap on me", person: "To disappear" },
{id : 2, desc : "Passion", person: "Challenging Dev"},
{id : 3, desc : "Spring", person: "Boot"},
{id : 4, desc : "LeetCode", person: "Chinmay"}])

const[showForm, setShowForm] = useState(false);

const AddToDo = (task,Description)=>{
  let rowNumber =0;
  if(row.length>0){
rowNumber=row[row.length-1].id+1;
  }else{
    rowNumber=1;
  }

    const newRow = {
      id:rowNumber,
      desc: task,
      person : Description};
    setRow(row =>[...row,newRow])
  }

  const deleteToDo = (deleteRowNumber)=>{
    let filtered = row.filter(function(value){
      return value.id !== deleteRowNumber;
    });
    setRow(filtered);
  }
  



  
  return (
   <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Task To Do
        </div>
        <div className='card-body'>
       
     <Table row={row} deleteToDo={deleteToDo}/>
     <button onClick={()=>setShowForm(!showForm)} className='btn btn-primary' >
      {showForm ? 'Close New ToDo' : 'New ToDo'}</button>
     
     {showForm && <Form AddToDo= {AddToDo}/> }
      </div>
    </div>
    </div>
 
  );
}


export default App;
