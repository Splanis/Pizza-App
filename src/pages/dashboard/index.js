import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Grid, Menu, Segment } from "semantic-ui-react";

import Item from "./item";
import Cart from "./cart";

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState("Πίτσες");
    const menu = useSelector(state => state.menu);

    return (
        <Grid>
            <Grid.Column width={2}>
                <Menu fluid vertical tabular>
                    {menu.categories.map(category => (
                        <Menu.Item
                            key={category.id}
                            name={category.name}
                            active={activeItem === category.name}
                            onClick={() => setActiveItem(category.name)}
                        />
                    ))}
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                <Segment style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    {menu.categories
                        .find(category => category.name === activeItem)
                        .items.map(item => (
                            <Item
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
