const TaskItem = ({ task, ontoggle, onDelete }) => {
    return(
        <li className="flex justify-between items-center bg-white p-2 mb-2 shadow">
            <span onClick = {() => ontoggle(task._id)} className={`cursor-pointer ${task.completed? "line-through text-gray-500": ""}`}>
                {task.text}
            </span>
            <button onClick={() => onDelete(task._id)} className="text-red-500 font-bold">
                X
            </button>
        </li>
    );
};

export default TaskItem;