import React, { useState } from "react";

function Form(props){
   const[Task,setTask] =useState('');
   const[Desc,setDesc] =useState('');

   const onSubmit = ()=>{
    if(Task!=="" && Desc!==""){
        props.AddToDo(Task,Desc);
       setDesc('');
       setTask('');
    }
   }
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Task</label>
                    <input
                     type="text"
                      className="form-control"
                       required
                       onChange={e=>setTask(e.target.value)}
                       value={Task}
                       ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control"
                     rows={3} 
                     required
                     onChange={e=>setDesc(e.target.value)}
                     value={Desc}
                     >
                     </textarea>
                </div>
                <button onClick={onSubmit} type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>


        </div>
    )
};

export default Form;