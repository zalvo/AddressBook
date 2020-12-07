import React, { useEffect, useState } from "react";
import data from "../server/data";
import Contacts from "./Contacts";
import Details from "./Details";
import Create from "./Create";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useHistory } from "react-router-dom";

export default function Routing() {
  const [list, setList] = useState(data);
  const [selectedContact, setSelectedContact] = useState();
  const [filteredList, setFilteredList] = useState(data);
  let history = useHistory();

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleClick = (contact) => {
    setSelectedContact(contact);
    history.push(`/detail/${contact.id}`);
    return;
  };

  const handleUpdate = (updatedContact) => {
    const index = list.findIndex((contact) => contact.id === updatedContact.id);
    let newList = [...list]; // create a copy of the state array
    newList[index] = { ...updatedContact };
    setList(newList);
    history.push("/");
    return;
  };

  const handleClose = () => {
    history.push("/");
    return;
  };

  const handleDelete = (contactId) => {
    const newList = list.filter((contact) => contact.id !== contactId);
    setList(newList);
    history.push("/");
    return;
  };

  const handleNew = () => {
    history.push("/new");
    return;
  };

  const handleCreate = (contact) => {
    const contactId = list.length + 1;
    contact.id = contactId;
    let newList = [...list]; // create a copy of the state array
    newList.push(contact);
    setList(newList);
    history.push("/");
    return;
  };

  const handleSearch = (e) => {
    let search = e.target.value.toLocaleLowerCase();
    setFilteredList(
      list.filter((contact) => {
        return (
          contact.name.toLocaleLowerCase().includes(search) ||
          contact.surname.toLocaleLowerCase().includes(search) ||
          contact.number.toString().includes(search)
        );
      })
    );
    return;
  };

  return (
    <Switch>
      <Route exact path="/">
        <Container className="mt-4">
          <h2>Contatti</h2>
          <Search handleSearch={handleSearch} />
          <Contacts list={filteredList} handleClick={handleClick} />
          <br />
          <Button variant="primary" onClick={() => handleNew()}>
            Nuovo
          </Button>
        </Container>
      </Route>
      <Route exact path="/detail/:id">
        <Container className="mt-4">
          <Details
            contact={selectedContact}
            handleClose={handleClose}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </Container>
      </Route>
      <Route exact path="/new">
        <Container className="mt-4">
          <Create handleCreate={handleCreate} handleClose={handleClose} />
        </Container>
      </Route>
    </Switch>
  );
}
