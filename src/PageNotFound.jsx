
import "./style/PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {


    return (<div id="page-not-found">
        <h3>Sorry about this but we cant find the page you were looking for</h3>

        <h4> why not try one of these links</h4>
<div id="page-not-found-links">
        <Link  to="/">Cats4Lyf Home Page</Link>
        <Link to="/catInfo">Our Cat of the day</Link>
        </div>
    </div>




    );
};

export default PageNotFound;
