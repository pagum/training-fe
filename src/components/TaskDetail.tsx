import React, { useContext } from 'react'
import { appData } from '../data'
import { StoreContext } from '../StoreContext'

export const TaskDetail = () => { 
  const data = useContext(StoreContext) 
 const allData= data? data: appData
  const { tasks, comments } = allData  


  return <div>'detail'</div>
}