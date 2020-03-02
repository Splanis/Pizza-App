import React, { useState } from "react";

import { Button, Form, Segment } from "semantic-ui-react";

export const Register = props => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
        name: "",
        city: "",
        address: "",
        phone: "",
        postal_code: ""
    });

    const { email, password, name, city, address, postal_code, phone } = details;

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Segment style={{ width: 500 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setDetails({ ...details, email: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Κωδικός</label>
                    <input type="password" value={password} onChange={e => setDetails({ ...details, password: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Ονοματεπώνυμο</label>
                    <input type="text" value={name} onChange={e => setDetails({ ...details, name: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Πόλη</label>
                    <input type="text" value={city} onChange={e => setDetails({ ...details, city: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Διεύθυνση</label>
                    <input type="text" value={address} onChange={e => setDetails({ ...details, address: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Τ.Κ</label>
                    <input type="text" value={postal_code} onChange={e => setDetails({ ...details, postal_code: e.target.value })} />
                </Form.Field>

                <Form.Field>
                    <label>Τηλέφωνο</label>
                    <input type="text" value={phone} onChange={e => setDetails({ ...details, phone: e.target.value })} />
                </Form.Field>
                <Button primary type="submit">
                    Εγγραφή
                </Button>
            </Form>
        </Segment>
    );
};
