import React from "react";

import { useSelector, useDispatch } from "react-redux";

const Dashboard = props => {
    const stores = useSelector(state => state.stores);
    const dispatch = useDispatch();

    return <div>Dashboard</div>;
};

export default Dashboard;
