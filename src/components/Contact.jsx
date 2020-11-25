import React from "react";

function Contact(props) {
  return (
    <div>
      <div
        onClick={() => {
          props.handleClick(props.contact);
        }}
      >
        {props.contact.name} {props.contact.surname}
      </div>
    </div>
  );
}

export default Contact;
