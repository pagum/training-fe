import { ChangeEvent } from 'react';

export const requestTaskCreation = (id: string) => {
  console.log(id);
  //api stuff
};
interface SetTaskNameProps {
  e: ChangeEvent<HTMLInputElement>;
}
export const setTaskName = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target);
};

interface SetTaskCompletionProps {
  taskId: string;
  isComplete: boolean;
}
export const setTaskCompletion = ({
  taskId,
  isComplete
}: SetTaskCompletionProps) => {
  console.log(taskId, isComplete);
};

export const setTaskGroup = (event: ChangeEvent<HTMLSelectElement>) => {
  console.log(event);
};

interface AddTaskCommentProps {
  commentId: string;
  taskId: string;
  ownerId: string;
  content: string;
}
export const addTaskComment = ({
  commentId,
  taskId,
  ownerId,
  content
}: AddTaskCommentProps) => {
  console.log(commentId, taskId, ownerId, content);
};
interface RequestCreateUserAccountProps {
  username: string;
  password: string;
}
export const requestCreateUserAccount = ({
  username,
  password
}: RequestCreateUserAccountProps) => {
  console.log('Creating!', username, password);
};


interface RequestAuthenticateUserProps {
  username: string;
  password: string;
}
export const requestAuthenticateUser = ({
  username,
  password
}: RequestCreateUserAccountProps) => {
  console.log('Creating!', username, password);
};
