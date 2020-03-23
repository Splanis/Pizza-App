import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import { Segment, List, Icon, Button, Header } from "semantic-ui-react";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCost = useSelector(state => state.cart.totalCost);

    return (
        <Segment placeholder style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", width: 205 }}>
            <List relaxed>
                {cartItems.length === 0 ? (
                    <p>Το καλάθι είναι άδειο</p>
                ) : (
                    <div>
                        <Header style={{ textAlign: "center" }}>Καλάθι</Header>
                        {cartItems.map(item => (
                            <CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} />
                        ))}
                        <Segment style={{ margin: 10, display: "flex", justifyContent: "center" }}>
                            Συνολικό πόσο: {totalCost.toFixed(2)} <Icon name="euro" />
                        </Segment>
                        <Link to="/cart">
                            <Button primary animated="vertical" style={{ width: 120 }}>
                                <Button.Content hidden>Ολοκλήρωση</Button.Content>
                                <Button.Content visible>
                                    <Icon name="shop" />
                                </Button.Content>
                            </Button>
                        </Link>
                    </div>
                )}
            </List>
        </Segment>
    );
};

export default Cart;
