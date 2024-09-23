import  { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate } from 'react-router-dom'
import PropTypes from "prop-types";

function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    if (loading) {
       return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };