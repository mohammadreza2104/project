import React, {createContext, useState} from "react";
import uuid from "uuid/dist/v4";


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: "write some code", id: 1},
        {title: "wash the car", id: 2},
        {title: "read the book", id: 3}
    ]);

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuid()}])

    };
    const removeTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))

    };
    const clearList = () =>{
        setTasks([]);
    }

    return <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList}}>
        {props.children}
    </TaskListContext.Provider>
}

export default TaskListContextProvider;