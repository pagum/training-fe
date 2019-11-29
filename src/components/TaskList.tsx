import React from 'react'
import { Group,Task, Comment } from '../StoreContext'
import { TaskListItem } from './TaskListItem'
import { requestTaskCreation } from '../api'

interface TaskListProps{
  group: Group
  tasks: Task[]
  comments:Comment[]
}
export const TaskList = ({ group,tasks,comments }: TaskListProps) => {
 console.log(tasks)
  return (<>
    <div>{group.name}</div>
  <div>
            {tasks.map(task=>(
              <TaskListItem task={task} key={task.id} comments={comments}/>
            ))}
        </div>
         <div>
            <button className="btn btn-primary btn-block mt-2" onClick={()=>requestTaskCreation(group.id)}>Add New</button>
        </div>  
  
  
  </>)
}