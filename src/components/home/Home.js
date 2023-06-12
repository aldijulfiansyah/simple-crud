import { useState } from "react";
import { Button } from "semantic-ui-react";
import TableUser from "../table/TableUser";
import InputForm from "../form/InputForm";
import UpdateForm from "../form/UpdateForm";
const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleViewDataClick = () => {
    setShowTable(!showTable);
  };

  const handleCreateDataClick = () => {
    setShowInput(!showInput);
  };



  return (
    <div className="Head">
      <div className="lorem">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>--Simple CRUD--</h2>
          <h3>React, Axios , MockAPI & Semantic-UI</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            primary
            style={{ margin: "auto", display: "block" }}
            onClick={handleViewDataClick}
          >
            {showTable ? "Hide Data" : "View Data"}
          </Button>
          <Button
            secondary
            style={{ margin: "auto", display: "block" }}
            onClick={handleCreateDataClick}
          >
            {showInput ? "Hide Create" : "Create Data"}
          </Button>
        </div>
        {showTable && <TableUser />}
        {showInput && <div style={{ marginTop: "20px" }}><InputForm /></div> }
      </div>
    </div>
  );
};

export default Home;
