import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import {user} from '../../utils';

const RequireAuth = ({protectedName}) => {
    const [username] = useAtom(user);
    const location = useLocation();

    return (
        username === protectedName
        ? <Outlet />
        : <Navigate to='/login' state={{from: location}} replace />
    )

}

export default RequireAuth;
