import React, { useEffect, useState } from "react";
import data from "./server/data";
import Contacts from "./components/Contacts";
import Details from "./components/Details";
import Create from "./components/Create";
import Search from "./components/Search";
import Container from "react-bootstrap/Container";
import { Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default function App() {
  const [list, setList] = useState(data);
  const [selectedContact, setSelectedContact] = useState();
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [filteredList, setFilteredList] = useState(data);
  const [createNewContact, setCreateNewContact] = useState(false);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleClick = (contact) => {
    setShowContactDetails(true);
    setSelectedContact(contact);
  };

  const handleUpdate = (updatedContact) => {
    const index = list.findIndex((contact) => contact.id === updatedContact.id);
    let newList = [...list]; // create a copy of the state array
    newList[index] = { ...updatedContact };
    setList(newList);
    setShowContactDetails(false);
    return;
  };

  const handleClose = () => {
    setShowContactDetails(false);
    setShowCreate(false);
    setCreateNewContact(false);
    return;
  };

  const handleDelete = (contactId) => {
    const newList = list.filter((contact) => contact.id !== contactId);
    setList(newList);
    setShowContactDetails(false);
    return;
  };

  const handleNew = () => {
    setShowCreate(true);
    setCreateNewContact(true);
    return;
  };

  const handleCreate = (contact) => {
    const contactId = list.length + 1;
    contact.id = contactId;
    let newList = [...list]; // create a copy of the state array
    newList.push(contact);
    setList(newList);
    setShowCreate(false);
    setCreateNewContact(false);
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
    <>
      {createNewContact ? (
        <Container className="mt-4">
          {showCreate === true && (
            <Create handleCreate={handleCreate} handleClose={handleClose} />
          )}
        </Container>
      ) : (
        <Container className="mt-4">
          <h2>Contatti</h2>
          <Search handleSearch={handleSearch} />
          <Contacts list={filteredList} handleClick={handleClick} />
          <br />
          <Button id="new" name="new" onClick={() => handleNew()}>
            Nuovo
          </Button>
          {showContactDetails === true && (
            <Details
              contact={selectedContact}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          )}
        </Container>
      )}
    </>
  );
}
