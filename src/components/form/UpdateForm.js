import { Form, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  const sendToApi = () => {
    if (firstName != "" && lastName != "") {
      axios.put(`https://647471af7de100807b1af26c.mockapi.io/crud/${id}`, {
      firstName,
      lastName
    })
    .then(() => {
        alert("Update successful");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Update failed");
      });
      } else {
        return alert('form empty')
      }
    
  }

  useEffect(()=>{
    setFirstName(localStorage.getItem('firstName') || " ");
    setLastName(localStorage.getItem('lastName') || " " );
  },[])

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  console.log ("firstname : ", firstName, "last name : ", lastName)
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input name="fname" onChange={handleFirstNameChange} placeholder="First Name" value={firstName}/>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input name="lname" onChange={handleLastNameChange} placeholder="Last Name" value={lastName}/>
      </Form.Field>
      <Button type="submit" onClick={()=> sendToApi()}>Update</Button>
    </Form>
  );
};
export default UpdateForm;
