
import {Navigate} from "react-router-dom";
import {isLoggedIn} from "../../utility/utility.js";

const PrivetRoutes = ({children}) => {

    if(!isLoggedIn()) {
        return <Navigate to="/login" replace />;
    }
    return children
};

export default PrivetRoutes;