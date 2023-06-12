import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";
const App = () => {
  return (
    <>
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/create" element={<Create />}> </Route>
            <Route path="/read" element={<Read />}> </Route>
            <Route path="/delete/:id" element={<Delete />}> </Route>
            <Route path="/update/:id" element={<Update />}> </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
