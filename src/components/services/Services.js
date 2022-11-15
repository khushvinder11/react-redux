import { Table } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./servicesStyle.scss";
import { deleteUser, editUser } from "../../store/action/action";

const Services = (props) => {
  const list = useSelector((state) => state.todoReducer.list);
  console.log(list, "list of services");
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  console.log(props.data, "props");
  // ...Table...
  const columns = [
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Address",
      dataIndex: "password",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (obj) => (
        <a
          onClick={() => {
            console.log(obj.id, "obj id deleted");
            dispatch(deleteUser(obj.id));
          }}
        >
          Delete
        </a>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (obj) => (
        <a
          onClick={() => {
            nevigate(`/service/edit/${obj.id}`);
            // dispatch(editUser(obj));
          }}
        >
          Edit
        </a>
      ),
    },
  ];

  return (
    <div>
      {/* .................table */}
      <h1>User data</h1>
      <div style={{ width: "1035px", margin: " 90px auto " }}>
        <Table columns={columns} dataSource={list} size="middle" />
      </div>
    </div>
  );
};

export default Services;
