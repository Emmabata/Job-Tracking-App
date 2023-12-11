import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return ( 
        <div>
            <h1>Error Page
            <Link to="/">Back home</Link>
            </h1>
        </div>
    );
}

export default Error;