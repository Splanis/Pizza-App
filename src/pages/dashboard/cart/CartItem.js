import React from "react";

import { useDispatch } from "react-redux";

import { incrementQuantityAction, decrementQuantityAction } from "../../../store/actions/cartActions";

import { List, Icon, Button } from "semantic-ui-react";

const CartItem = ({ id, name, price, quantity }) => {
    const dispatch = useDispatch();

    return (
        <List.Item style={{ margin: 10 }} key={id}>
            <List.Content>
                <List.Header as="a">{name}</List.Header>
                <List.Description style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="euro" /> {price}
                    <Button.Group size="mini" style={{ margin: "0 10px" }}>
                        <Button onClick={() => dispatch(decrementQuantityAction(id))}>
                            <Icon name="minus" style={{ marginRight: 10 }} />
                        </Button>
                        <Button.Or text={quantity} />
                        <Button onClick={() => dispatch(incrementQuantityAction(id))}>
                            <Icon name="add" style={{ marginLeft: 10 }} />
                        </Button>
                    </Button.Group>
                </List.Description>
            </List.Content>
        </List.Item>
    );
};

export default CartItem;
