import {createBrowserRouter} from "react-router-dom"; 
import Home from './Pages/Home';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import User from './Pages/User';
import Sighnup from './Pages/Signup';
import Front from './Pages/Front'
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage />
    },
    {
        path:"/login",
        element:<Login/>,
        errorElement:<ErrorPage />
    },
    {
        path:"/user",
        element:<User/>,
        errorElement:<ErrorPage />
    },
    {
        path:"/register",
        element:<Sighnup/>,
        errorElement:<ErrorPage />
    },
    
    {
        path:"/dashboard",
        element:<Front/>,
        errorElement:<ErrorPage />
    },
]) 
export default router;
