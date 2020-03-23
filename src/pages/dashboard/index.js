import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Grid, Menu, Segment } from "semantic-ui-react";

import Product from "./product";
import Cart from "./cart";

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState("Πίτσες");
    const menu = useSelector(state => state.menu);

    return (
        <Grid style={{ display: "flex", justifyContent: "center" }}>
            <Grid.Column width={2}>
                <Menu fluid vertical tabular style={{ position: "fixed" }}>
                    {menu.categories.map(category => (
                        <Menu.Item
                            key={category.id}
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
                    {menu.categories
                        .find(category => category.name === activeItem)
                        .items.map(item => (
                            <Product
                                key={item.id}
                                id={item.id}
                                photo={item.photo}
                                name={item.name}
                                ingredients={item.ingredients}
                                price={item.price}
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
