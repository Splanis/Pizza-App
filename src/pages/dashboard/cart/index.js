import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Segment, List, Icon, Button } from "semantic-ui-react";

import { incrementQuantityAction, decrementQuantityAction } from "../../../store/actions/cartActions";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCost = useSelector(state => state.cart.totalCost);
    const dispatch = useDispatch();

    return (
        <Segment placeholder style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <List relaxed>
                {cartItems.length === 0 ? (
                    <p>Το καλάθι είναι άδειο</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <List.Item style={{ margin: 10 }} key={item.id}>
                                <List.Content>
                                    <List.Header as="a">{item.name}</List.Header>
                                    <List.Description style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon name="euro" /> {item.price}
                                        <Button.Group size="mini" style={{ margin: "0 10px" }}>
                                            <Button onClick={() => dispatch(decrementQuantityAction(item.id))}>
                                                <Icon name="minus" style={{ marginRight: 10 }} />
                                            </Button>
                                            <Button.Or text={item.quantity} />
                                            <Button onClick={() => dispatch(incrementQuantityAction(item.id))}>
                                                <Icon name="add" style={{ marginLeft: 10 }} />
                                            </Button>
                                        </Button.Group>
                                    </List.Description>
                                </List.Content>
                            </List.Item>
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
