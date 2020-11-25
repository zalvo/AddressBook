import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function Create(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleCreate = () => {
    if (name === "" && surname === "") {
      setShow(true);
    } else {
      let contact = {
        id: "",
        name: "",
        surname: "",
        number: null,
        email: ""
      };
      contact.name = name;
      contact.surname = surname;
      contact.number = number;
      contact.email = email;
      props.handleCreate(contact);
    }
  };

  return (
    <div>
      <h2>Nuovo contatto</h2>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          placeholder="Cognome"
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
          placeholder="Numero"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      {show === true && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          Compila i campi per proseguire
        </Alert>
      )}
      <br />
      <Button variant="secondary" onClick={props.handleClose}>
        Chiudi
      </Button>{" "}
      <Button id="create" name="create" onClick={() => handleCreate()}>
        Salva
      </Button>
    </div>
  );
}

export default Create;
