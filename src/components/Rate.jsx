import {  useContext } from "react";
import { AppContext } from "../App";
const Rate = ({ number, click }) => {
    const  rate = useContext(AppContext).editData.rate
    const editMode=useContext(AppContext).editMode
    
  
    const rateHandle = (i)=> {
       
        for (var j = 1; j < 11; j++){
            if (j >i)
                document.getElementsByClassName("r" + j)[0].className = "numberView disable r" + j;
            else
                document.getElementsByClassName("r" + j)[0].className = "numberView r" + j;
        }
        click(i);
        
    }

    if (editMode) {
       
        rateHandle(rate)
    }
    
    return <div className={"numberView disable r"+number} onClick={()=>rateHandle(number)}>
        {number}
    </div>
}
export default Rate