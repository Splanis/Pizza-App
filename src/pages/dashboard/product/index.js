import React from "react";

import { useDispatch } from "react-redux";

import { Card, Icon, Image, Button } from "semantic-ui-react";

import { addToCartAction } from "../../../store/actions/cartActions";

const Product = ({ id, name, photo, overview, price }) => {
    const dispatch = useDispatch();

    return (
        <Card style={{ margin: 5, height: 350, width: 300 }}>
            <Image src={photo} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{overview}</Card.Description>
            </Card.Content>
            <Card.Content extra style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <Icon name="euro" /> {price}
                </div>
                <Button
                    primary
                    style={{ marginLeft: "auto" }}
                    onClick={() => {
                        dispatch(addToCartAction({ id, name, photo, overview, price }));
                    }}
                >
                    Προσθήκη
                </Button>
            </Card.Content>
        </Card>
    );
};

export default Product;
