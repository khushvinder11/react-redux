import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            style={{ width: "105px" }}
            onClick={() => navigate("/project/add")}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default Errorpage;
