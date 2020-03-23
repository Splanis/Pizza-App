import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { addCommentsAction } from "../../store/actions/cartActions";

import { Segment, Header, Form, Radio, Button, Icon, Item } from "semantic-ui-react";

const Cart = () => {
    const isUser = useSelector(state => (state.auth.profile ? true : false));
    const cart = useSelector(state => state.cart);
    const profile = useSelector(state => state.auth.profile);
    const comments = useSelector(state => state.cart.comments);
    const { name, phone, address, postal_code, floor, doorbell } = profile || {};
    const dispatch = useDispatch();

    return (
        <Segment style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Header as="h1">Ολοκλήρωση Παραγγελίας</Header>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Segment placeholder style={{ margin: 10, justifyContent: "flex-start" }}>
                    <Header>Στοιχεία αποστολής</Header>
                    <p>
                        Ονοματεπώνυμο: <b>{name}</b>
                    </p>
                    <p>
                        Τηλέφωνο: <b>{phone}</b>
                    </p>
                    <p>
                        Kουδούνι: <b>{doorbell}</b>
                    </p>
                    <p>
                        Όροφος: <b>{floor}</b>
                    </p>
                    <p>
                        Διεύθυνση: <b> {address}</b>
                    </p>
                    <p>
                        Τ.Κ: <b>{postal_code}</b>
                    </p>
                    {isUser && (
                        <Link to="/profile">
                            <Button>Αλλαγή Στοιχείων</Button>
                        </Link>
                    )}
                </Segment>

                <Segment placeholder style={{ margin: 10 }}>
                    <Header style={{ textAlign: "center" }}>Τρόπος Πληρωμής</Header>
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

                <Segment placeholder style={{ margin: 10 }}>
                    <Header style={{ textAlign: "center" }}>Σχόλια Παραγγελίας</Header>
                    <textarea
                        placeholder="π.χ Ρέστα από πενηντάρικο"
                        style={{ width: 200, height: 180, padding: 5, resize: "none" }}
                        value={comments}
                        onChange={e => {
                            dispatch(addCommentsAction(e.target.value));
                        }}
                    />
                </Segment>

                <Segment placeholder style={{ margin: 10, justifyContent: "flex-start" }}>
                    <Header>Καλάθι</Header>
                    <Segment>
                        <Item.Group divided>
                            {cart.cartItems.map(item => (
                                <Item key={item.id}>
                                    <Item.Image size="tiny" src={item.photo} />
                                    <Item.Content verticalAlign="middle" style={{ textAlign: "center" }}>
                                        {item.name} : {item.quantity} x {item.price} = {item.quantity * item.price}
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </Segment>
                    <Segment>
                        Κόστος: {cart.totalCost.toFixed(2)} <Icon name="euro" />
                    </Segment>
                    <Link to="/">
                        <Button>Αλλαγή</Button>
                    </Link>
                </Segment>
            </div>

            {isUser ? (
                <Button primary animated="vertical" style={{ width: 120 }}>
                    <Button.Content hidden>Αποστολή</Button.Content>
                    <Button.Content visible>
                        <Icon name="shop" />
                    </Button.Content>
                </Button>
            ) : (
                <Link to="/login">
                    <Button>Σύνδεση</Button>
                </Link>
            )}
        </Segment>
    );
};

export default Cart;
