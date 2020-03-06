import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Segment, Header, Form, Radio, Button, Icon, Item, Image } from "semantic-ui-react";

const Cart = () => {
    const userProfile = useSelector(state => state.firebase.profile);
    const { name, phone, address, postal_code, floor, doorbell } = userProfile;
    const cart = useSelector(state => state.cart);
    console.log(cart);
    return (
        <Segment style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Header as="h1">Ολοκλήρωση Παραγγελίας</Header>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Segment placeholder style={{ margin: 10, justifyContent: "flex-start" }}>
                    <Header>Στοιχεία αποστολής</Header>
                    <p>{name}</p>
                </Segment>
                <Segment placeholder style={{ margin: 10, justifyContent: "flex-start" }}>
                    <Header>Τρόπος Πληρωμής</Header>
                    <Form>
                        <Form.Field>Επιλέξτε τρόπο πληρωμής:</Form.Field>
                        <Form.Field>
                            <Radio label="Μετρητά" name="radioGroup" checked selected />
                        </Form.Field>
                        <Form.Field>
                            <Radio label="Paypal" name="radioGroup" disabled />
                        </Form.Field>
                        <Form.Field>
                            <Radio label="Χρεωστική/Πιστωτική Κάρτα" name="radioGroup" disabled />
                        </Form.Field>
                    </Form>
                </Segment>
                <Segment placeholder style={{ margin: 10, justifyContent: "flex-start" }}>
                    <Header>Καλάθι</Header>
                    <Segment>
                        <Item.Group divided>
                            {cart.cartItems.map(item => (
                                <Item key={item.id}>
                                    <Item.Image size="tiny" src={item.photo} />
                                    <Item.Content verticalAlign="middle" style={{ textAlign: "center" }}>
                                        {item.name} : {item.quantity}
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </Segment>
                    <Segment>
                        Κόστος: {cart.totalCost.toFixed(2)} <Icon name="euro" />
                    </Segment>
                </Segment>
            </div>
            <Button primary animated="vertical" style={{ width: 120 }}>
                <Button.Content hidden>Αποστολή</Button.Content>
                <Button.Content visible>
                    <Icon name="shop" />
                </Button.Content>
            </Button>
        </Segment>
    );
};

export default Cart;
