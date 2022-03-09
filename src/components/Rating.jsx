import Rate from "./Rate"

const Rating = ({getRate}) => {
    const refresh = (i) => {
        getRate(i);
    }
    return <div className="rating">
        <ul className="rateList">
            <Rate number={1} click={refresh}/>
            <Rate number={2} click={refresh}/>
            <Rate number={3} click={refresh}/>
            <Rate number={4} click={refresh}/>
            <Rate number={5} click={refresh}/>
            <Rate number={6} click={refresh}/>
            <Rate number={7} click={refresh}/>
            <Rate number={8} click={refresh}/>
            <Rate number={9} click={refresh}/>
            <Rate number={10} click={refresh}/>
            
       </ul>
    </div>
}
export default Rating 