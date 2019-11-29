import   {   createContext} from 'react' 
export interface Group{
  name: string;
  id:string;
  owner:string;
}

export interface User{
    id:string;
    name:string;
    passwordHash: string;
    friends:string[];
}

export interface Task{
  name: string;
      id: string;
      group: string;
      owner: string;
      isComplete:boolean
}

export interface Comment{
  owner: string;
  id: string;
  task: string;
  content: string;
}

export interface Data{
  users: User[];
  groups: Group[];
  tasks: Task[];
  comments:Comment[]
}
const initialState={ }

export  const StoreContext= createContext<any>(initialState);
 export const StoreContextProvider = StoreContext.Provider;
  
 export const StoreContextConsumer = StoreContext.Consumer;
 


 