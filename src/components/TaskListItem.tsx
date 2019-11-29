import React, {  useContext } from 'react'; 
import { StoreContext, Group, Task, Comment } from '../StoreContext';
import { TaskList } from './TaskList';
import { Link } from 'react-router-dom';


interface TaskListItemProps{
  task: Task
  comments:Comment[]
}

export const TaskListItem = ({task,comments}:TaskListItemProps) => {
 
  const { id, isComplete,name } = task
  const commentCount = comments.filter(comment => comment.task === id).length 
  return (
    <div >
    <Link to={`/task/${id}`}  >
        <div className="card p-2 mt-2">
            <span>
                {name} ({commentCount}) {isComplete ? `✓` : null}
            </span>
        </div>
    </Link>
</div> )
} 