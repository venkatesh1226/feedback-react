import { Link, Navigate,useParams } from "react-router-dom"
const About = ({ status }) => {
    const s= useParams().no
    if (status === 404)
        return <Navigate to="/"/>
    return <div className="about">
        <h1>About Page:{ s}</h1>
        <h6>
            This website is used to rate the services or products for availed product or sevices.
        </h6>
        <Link to={"/"}><p>Home</p></Link>
    </div>
}
export default About