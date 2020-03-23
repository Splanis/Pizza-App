import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { registerAction, loginAction } from "../../store/actions/authActions";

import { Button, Form, Segment, Input } from "semantic-ui-react";

const Register = () => {
    const [errors, setError] = useState({
        emailError: "",
        passwordError: ""
    });
    const { emailError, passwordError } = errors;

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        password2: "",
        username: "",
        name: "",
        floor: "",
        doorbell: "",
        address: "",
        phone: "",
        postal_code: ""
    });
    const { email, password, password2, username, name, floor, doorbell, address, postal_code, phone } = credentials;

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        if (password === password2) {
            dispatch(registerAction(credentials));
        } else {
            setError({ emailError: "", passwordError: "Οι κωδικοί δεν ταιριάζουν" });
        }
    };

    return (
        <Segment style={{ width: 400 }} placeholder>
            <Form unstackable onSubmit={handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={email}
                        onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                        label="Email"
                        error={
                            emailError
                                ? {
                                      content: emailError
                                  }
                                : null
                        }
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={username}
                        onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                        label="Ψευδώνυμο"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="password"
                        value={password}
                        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        label="Κωδικός"
                        error={
                            passwordError
                                ? {
                                      content: passwordError
                                  }
                                : null
                        }
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="password"
                        value={password2}
                        onChange={e => setCredentials({ ...credentials, password2: e.target.value })}
                        label="Επανάληψη Κωδικού"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={name}
                        onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                        label="Ονοματεπώνυμο"
                        required
                    ></Form.Field>{" "}
                    <Form.Field
                        control={Input}
                        type="text"
                        value={doorbell}
                        onChange={e => setCredentials({ ...credentials, doorbell: e.target.value })}
                        label="Κουδούνι"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={floor}
                        onChange={e => setCredentials({ ...credentials, floor: e.target.value })}
                        label="Όροφος"
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={phone}
                        onChange={e => setCredentials({ ...credentials, phone: e.target.value })}
                        label="Τηλέφωνο"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={address}
                        onChange={e => setCredentials({ ...credentials, address: e.target.value })}
                        label="Διεύθυνση"
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={postal_code}
                        onChange={e => setCredentials({ ...credentials, postal_code: e.target.value })}
                        label="Τ.Κ"
                        required
                    ></Form.Field>
                </Form.Group>
                <Button primary type="submit">
                    Εγγραφή
                </Button>
            </Form>
        </Segment>
    );
};

export default Register;
