import React, {  useContext } from 'react'; 
import { StoreContext, Group } from '../StoreContext';
import { TaskList } from './TaskList';
import { appData } from '../data';

export const Dashboard = () => {
  const data = useContext(StoreContext) 
 const allData= data? data: appData
  const {tasks,comments} = allData  
  return (
    <div >
  {allData.groups&&allData.groups.map((group:Group)=>(
    <TaskList key={group.id} group={group} tasks={tasks} comments={comments}/>
  ))}
</div> )
} 