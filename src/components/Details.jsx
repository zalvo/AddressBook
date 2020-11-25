import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function Details(props) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(props.contact.name);
    setSurname(props.contact.surname);
    setNumber(props.contact.number);
    setEmail(props.contact.email);
  }, [props]);

  const handleUpdate = () => {
    let updatedContact = {
      id: props.contact.id,
      name: "",
      surname: "",
      number: null,
      email: ""
    };
    updatedContact.name = name;
    updatedContact.surname = surname;
    updatedContact.number = number;
    updatedContact.email = email;
    props.handleUpdate(updatedContact);
    return;
  };

  return (
    <div>
      <h2>Informazioni contatto</h2>
      <Form.Group>
        <Form.Label>ID</Form.Label>
        <Form.Control type="number" value={props.contact.id} disabled />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          value={props.contact.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Numero</Form.Label>
        <Form.Control
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Button onClick={() => handleUpdate()}>Salva</Button>{" "}
      <Button variant="secondary" onClick={props.handleClose}>
        Chiudi
      </Button>{" "}
      <Button
        variant="danger"
        onClick={() => props.handleDelete(props.contact.id)}
      >
        Elimina
      </Button>
    </div>
  );
}

export default Details;
