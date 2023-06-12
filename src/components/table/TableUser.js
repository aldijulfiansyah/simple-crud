import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TableUser = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
     axios.get('https://647471af7de100807b1af26c.mockapi.io/crud').then((getData)=>{
      setDataUser(getData.data)
    }).catch((error)=> {
      console.error(error);
    })
  }, [])

  const handleUpdate = (user) => {
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this data?")
    
    if (confirmDelete) {
      axios.delete(`https://647471af7de100807b1af26c.mockapi.io/crud/${id}`)
      .then(() => {
        alert("Delete successful");
        setDataUser(dataUser.filter(user => user.id !== id));
      })
      .catch((error) => {
        console.error(error);
        alert("Delete failed");
      });
    }
    
  };

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="center aligned">ID</Table.HeaderCell>
            <Table.HeaderCell className="center aligned">First Name</Table.HeaderCell>
            <Table.HeaderCell className="center aligned">Last Name</Table.HeaderCell>
            <Table.HeaderCell className="center aligned">Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataUser.map((user)=> (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>
                <Link to={`/update/${user.id}`} onClick={() => handleUpdate(user)}>
                  <Button color="blue">update</Button>
                </Link> 
                  <Button color="red" onClick={() => handleDelete(user.id)}>delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TableUser;
