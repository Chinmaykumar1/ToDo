function ToDoRow(props){
    return(
        <tr onClick={() => props.dleteToDo(props.rowId)}>
            <th scope='row'>{props.rowId}</th>
            <td>{props.desc}</td>
            <td>{props.person}</td>
        </tr>
    )
}
export default ToDoRow;