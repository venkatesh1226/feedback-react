import FeedbackItems from "./FeedbackItems";
import { useContext } from "react";
import { AppContext } from "../App";
const FeedbackList = ({   dark }) => {
    var items = useContext(AppContext).data
    var remove=useContext(AppContext).remove
    if (items.length === 0)
        return <p>No Feedbacks Yet!!</p>
    const crossHandler = (id) => {
        remove(id)
    }
    
    return <div className="feedbackList">
        {
           items
            .map(
             (value) =>
                (<FeedbackItems
                    id={value.id}
                    rate={value.rating}
                    text={value.text}
                    removeHandler={crossHandler}
                    dark={dark}
                />))
    }
    </div>
}
    

export default FeedbackList;