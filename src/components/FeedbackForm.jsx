import Rating from "./Rating";
import { useContext, useState,useRef } from "react";
import  { AppContext } from "../App";
const FeedbackForm = ({ dark }) => {
    const add = useContext(AppContext).add
    let editMode = useContext(AppContext).editMode
    const editData=useContext(AppContext).editData
    const c = (dark) ? "feedbackForm dark" : "feedbackForm";
    var rating=0
    const txtRef = useRef(null);
    
    const remove=useContext(AppContext).remove
    
    if (editMode) {
        txtRef.current.value = editData.text;
        
    }

    else {
        
    }


    const addFeedback = (txt) => {
        if (rating === 0 || txt.length < 50)
            alert("message should atleast have 50 characters and please enter rating")
        else {
            if (editMode) {
                remove(editData.id)
               
            }
            
            for (var j = 1; j < 11; j++)
                document.getElementsByClassName("r" + j)[0].className = "numberView disable r" + j;
            document.getElementById("comment").value = ""
            console.log(document.getElementById("comment").value)
            add(rating, txt)
            editMode=false


            
        }
    }


    return <div className={c}>
        
        <h3>How would you rate your service with us?</h3> 
        <Rating getRate={ (r)=>(rating=r)}/>
            <form >
            <textarea id={"comment"} rows="5" cols="40" placeholder={"Enter Your Review"} ref={ txtRef}/>
            </form>
            <button onClick={()=>addFeedback(document.getElementById("comment").value.trim())}>
            Submit    
            </button>
        
        
    </div>
}
export default FeedbackForm