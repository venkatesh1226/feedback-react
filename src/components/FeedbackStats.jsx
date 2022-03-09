import { AppContext } from "../App";
import { useContext } from "react";
const FeedbackStats = () => {
    var data=useContext(AppContext).data
    var sum = 0;
    var avg = () => {
        if (!isNaN(data)) return 0;
        data.forEach(item => {
            sum += item.rating;
        
        });
       
        return ((sum/ data.length)+"").substring(0,4)
    }
    
    return <div className="stats">
        <h4>{data.length } Reviews</h4>
        <h4>Average Rating: {avg()}</h4>
        </div>
}
export default FeedbackStats