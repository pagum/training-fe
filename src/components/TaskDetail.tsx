import React, { useContext, ChangeEvent, FormEvent } from 'react';
import { appData } from '../data';
import { StoreContext, Task, Comment, Group } from '../StoreContext';
import {
  setTaskName,
  setTaskCompletion,
  setTaskGroup,
  addTaskComment
} from '../api';
import { UsernameDisplay } from './UsernameDisplay';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

interface AddCommentArgs {
  taskId: string;
  ownerId: string;
  e: FormEvent<HTMLFormElement>;
}

export const TaskDetail = () => {
  const taskId = window.location.pathname.split('/')[2];

  const data = useContext(StoreContext);
  const allData = data ? data : appData;
  const { tasks, comments, groups } = allData;
  let task = tasks.find((task: Task) => task.id === taskId);
  let commentsForTask = comments.filter(
    (comment: Comment) => comment.task === taskId
  );
  //let isOwner =  session.id === task.owner;

  const { isComplete, name, id, owner } = task;
  const addComment = ({ taskId, ownerId, e }: AddCommentArgs) => {
    e.preventDefault();
    //@ts-ignore
    const input = e.target[`commentContents`];
    const commentId = uuid();
    const content = input.value;
    if (content !== ``) {
      input.value = ``;
      addTaskComment({ commentId, taskId, ownerId, content });
    }
  };
  return (
    <>
      <div>
        <div>
          <input
            type='text'
            value={task.name}
            onChange={setTaskName}
            id={id}
            className='form-control form-control-lg'
          />
        </div>
        {/*if isOwner */}
        <h3>
          {task.name} {isComplete ? `✓` : null}
        </h3>
      </div>
      <div className='mt-3'>
        <div>
          <div>
            You are the owner of this task.
            <button
              className='btn btn-primary ml-2'
              onClick={() =>
                setTaskCompletion({ taskId: id, isComplete: !isComplete })
              }
            >
              {isComplete ? `Reopen` : `Complete`} This Task
            </button>
          </div>
        </div>

        {/*if isOwner */}
        <div>
          <UsernameDisplay id={task.owner} /> is the owner of this task.
        </div>
      </div>

      <div className='mt-2'>
        {commentsForTask.map((comment: Comment) => (
          <div key={comment.id}>
            <UsernameDisplay id={comment.owner} /> : {comment.content}
          </div>
        ))}
      </div>

      <form className='form-inline'>
        <span className='mr-4'>Change Group</span>
        <select onChange={setTaskGroup} className='form-control'>
          {groups.map((group: Group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </form>

      <form
        className='form-inline'
        onSubmit={e => addComment({ taskId: id, ownerId: owner, e })}
      >
        <input
          type='text'
          name='commentContents'
          autoComplete='off'
          placeholder='Add a comment'
          className='form-control'
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>

      <div>
        <Link to='/dashboard'>
          <button className='btn btn-primary mt-2'>Done</button>
        </Link>
      </div>
    </>
  );
};
