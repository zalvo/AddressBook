import React from "react";
import { Form } from "react-bootstrap";

function Search(props) {
  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Control placeholder="Cerca..." onChange={props.handleSearch} />
      </Form.Group>
    </Form>
  );
}

export default Search;
