import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchMenuAction } from "../../store/actions/menuActions";

import { Grid, Menu, Segment } from "semantic-ui-react";

import Product from "./product";
import Cart from "./cart";

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState("Πίτσες");
    const menu = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuAction());
    }, []);

    return (
        <Grid style={{ display: "flex", justifyContent: "center" }}>
            <Grid.Column width={2}>
                <Menu fluid vertical tabular style={{ position: "fixed" }}>
                    {menu.map(category => (
                        <Menu.Item
                            key={category._id}
                            name={category.name}
                            active={activeItem === category.name}
                            onClick={() => setActiveItem(category.name)}
                            style={{ width: 250 }}
                        />
                    ))}
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={11}>
                <Segment style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    {menu
                        .find(category => category.name === activeItem)
                        .products.map(product => (
                            <Product
                                key={product._id}
                                id={product._id}
                                photo={product.photo}
                                name={product.name}
                                overview={product.overview}
                                price={product.price}
                            />
                        ))}
                </Segment>
            </Grid.Column>

            <Grid.Column width={2}>
                <Cart />
            </Grid.Column>
        </Grid>
    );
};

export default Dashboard;
