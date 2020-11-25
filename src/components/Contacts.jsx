import React from "react";
import Contact from "./Contact";
import { ListGroup } from "react-bootstrap";

function Contacts(props) {
  return (
    <ListGroup>
      <div>
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
      </div>
    </ListGroup>
  );
}

export default Contacts;
