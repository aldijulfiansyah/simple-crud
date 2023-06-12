import { Form, Button } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const InputForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const sendToApi = () => {
    if (firstName != "" && lastName != "") {
      axios.post(`https://647471af7de100807b1af26c.mockapi.io/crud`, {
      firstName,
      lastName
    })
    .then(() => {
      alert("Create successful");
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
      alert("Create failed");
    });
      } else {
        return alert('form empty')
      }
    
  }

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input name="fname" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input name="lname" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      </Form.Field>
      <Button type="submit" onClick={()=> sendToApi()}>Submit</Button>
    </Form>
  );
};
export default InputForm;
