import React from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './Card'
import { AppContext } from '../App'
import { useContext } from 'react'
function FeedbackItems({id,rate,text,dark}) {
  
  const remove = useContext(AppContext).remove
  const edit=useContext(AppContext).edit
 
  return (
      <Card dark={dark}>
      <div className='numberView'>{rate}</div>
      <div className='controlButtons'>
        <button className='edit' onClick={()=>edit(id,rate,text)} ><FaEdit/></button>
        <button className="cross" onClick={()=>remove(id)}><FaTimes /></button>
      </div>
        <div className='textView'>
              {text}
          </div>
      
         
      </Card>
    )
}

export default FeedbackItems