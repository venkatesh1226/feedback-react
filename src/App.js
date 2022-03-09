import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import React, { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'
import About from './components/About'
import { createContext } from 'react'

export var AppContext= createContext(null)
var App = () => {
    var [data, setData] = useState(FeedbackData);
    var d = true;
    
    var crossHandler = (id) => { 
        const newItems=[]
        data.forEach(item => {
           if(item.id !== id)newItems.push(item); 
        }) 
        setData(newItems)
        console.log(data)
    }

    var submitHandler = (rating, review) => {
      
       const newData = [ { id: Date.now(), rating: rating, text: review },...data];
        setData(newData)
        
    }
    
    const [editMode, seteditMode] = useState(false)
    const [editData, seteditData]=useState({})
    
    const editHandler = (id,rate,text) => {
        seteditMode(true);
        seteditData({ id: id, rate: rate, text:text})
       
    }


    const value = {
        data: data,
        remove: crossHandler,
        add: submitHandler,
        editMode: editMode,
        edit: editHandler,
        editData:editData
       
    }
    
    return <Router>
         <Routes>
        <Route path="/" element={
        <>    
        <AppContext.Provider value={value}>
        <Header text="FEEDBACK APP" textColor={"#D82148"} ></Header>
        <FeedbackForm  dark={d} ></FeedbackForm>
        <FeedbackStats  />
        <FeedbackList  dark={d}/>
        <Link to={"/about"}><FaQuestion/></Link>
        </AppContext.Provider>
        </>}/>
       
            <Route path='/about/:no' element={
                <About status={200}/>
            } />
            
            <Route path='/about' element={
                <About status={200}/>
            } />
        </Routes>
        
        
    </Router>
}
export default App