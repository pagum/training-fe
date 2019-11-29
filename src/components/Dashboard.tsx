import React, {  useContext } from 'react'; 
import { StoreContext, Group, Task } from '../StoreContext';
import { TaskList } from './TaskList';
import { appData } from '../data';

export const Dashboard = () => {
  const data = useContext(StoreContext) 
 const allData= data? data: appData
  const {tasks,comments} = allData  
  return (
    <div >
      {allData.groups && allData.groups.map((group: Group) => {
        console.log(group) 
        const tasksForGroup=tasks.filter((task:Task)=>task.group===group.id)
        return (
    <TaskList key={group.id} group={group} tasks={tasksForGroup} comments={comments}/>
  )})}
</div> )
} 