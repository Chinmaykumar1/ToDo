import ToDoRow from "./ToDoRow";

function Table(props){
    return (
        <table className="table table-hover" >
        <thead>
            <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Assigned</th>
            </tr>
        </thead>
        <tbody>
    {props.row.map(todo=>(
        <ToDoRow key={todo.id} rowId = {todo.id} desc = {todo.desc} person= {todo.person} dleteToDo={props.deleteToDo} />
    ))}
        </tbody>
        </table>
    )
}
export default Table;