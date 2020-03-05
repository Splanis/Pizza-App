import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../store/actions/authActions";

import { Button, Form, Segment, Input } from "semantic-ui-react";

const SignUp = () => {
    const [errors, setError] = useState({
        emailError: "",
        passwordError: ""
    });
    const { emailError, passwordError } = errors;

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        password2: "",
        displayName: "",
        firstName: "",
        lastName: "",
        city: "",
        address: "",
        phone: "",
        postal_code: ""
    });
    const { email, password, password2, displayName, firstName, lastName, city, address, postal_code, phone } = credentials;

    const dispatch = useDispatch();
    const authError = useSelector(state => state.auth.authError);

    useEffect(() => {
        // Translating AuthErrors in Greek
        switch (authError) {
            case "auth/invalid-email":
                setError({ passwordError: "", emailError: "Το Email είναι λάθος" });
                break;
            case "auth/email-already-in-use":
                setError({ passwordError: "", emailError: "Το Email χρησιμοποιείται ήδη" });
                break;
            case "auth/weak-password":
                setError({ emailError: "", passwordError: "Αδύναμος κωδικός" });
                break;
            default:
                setError({ ...errors });
        }
    }, [authError]);

    const handleSubmit = e => {
        e.preventDefault();
        if (password === password2) {
            dispatch(signUpAction(credentials));
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
                        value={displayName}
                        onChange={e => setCredentials({ ...credentials, displayName: e.target.value })}
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
                        value={firstName}
                        onChange={e => setCredentials({ ...credentials, firstName: e.target.value })}
                        label="Όνομα"
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={lastName}
                        onChange={e => setCredentials({ ...credentials, lastName: e.target.value })}
                        label="Επώνυμο"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={city}
                        onChange={e => setCredentials({ ...credentials, city: e.target.value })}
                        label="Πόλη"
                        required
                    ></Form.Field>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={address}
                        onChange={e => setCredentials({ ...credentials, address: e.target.value })}
                        label="Διεύθυνση"
                        required
                    ></Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field
                        control={Input}
                        type="text"
                        value={postal_code}
                        onChange={e => setCredentials({ ...credentials, postal_code: e.target.value })}
                        label="Τ.Κ"
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
                <Button primary type="submit">
                    Εγγραφή
                </Button>
            </Form>
        </Segment>
    );
};

export default SignUp;
