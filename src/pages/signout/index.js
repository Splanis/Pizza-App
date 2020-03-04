import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { signOutAction } from "../../store/actions/authActions";

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(signOutAction());
    }, [dispatch]);

    return null;
};

export default Logout;
