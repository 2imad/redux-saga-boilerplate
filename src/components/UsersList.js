import React from 'react';
import { ListGroup, ListGroupItem, Button, InputGroup } from 'reactstrap';

const UsersList = ({ users }) => {
  const sortByName = (a, b) => {
    const nameA = a.firstName.toUpperCase();
    const nameB = b.firstName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    if (a.lastName < b.lastName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  };
  return (
    <ListGroup className="user-list">
      <div className="user-wrapper">
        {users.sort(sortByName).map((u, i) => (
          <ListGroupItem key={i}>
            <section className="user-section">
              <div className="user-holder">
                {u.firstName} {u.lastName}
              </div>
              <div>
                <Button outline color="danger">
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
      </div>
    </ListGroup>
  );
};

export default UsersList;
