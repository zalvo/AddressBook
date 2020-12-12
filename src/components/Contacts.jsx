import React from "react";
import Contact from "./Contact";
import ListGroup from "react-bootstrap/ListGroup";

function Contacts(props) {
  return (
    <ListGroup variant="flush">
      {props.list.map((contact) => {
        return (
          <ListGroup.Item>
            <Contact
              key={contact.id}
              contact={contact}
              handleClick={props.handleClick}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Contacts;
