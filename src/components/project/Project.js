import { Button, Input, message, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./projectStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { Empty, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined, AudioOutlined } from "@ant-design/icons";
import { deleteUser } from "../../store/action/projectaction";
import Search from "antd/lib/transfer/search";

const Project = () => {
  const list = useSelector((state) => state.projectReducer.list);
  console.log(list, "list data");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  console.log(data, "data search value");
  const [searchValue, setSearchValue] = useState();
  console.log(searchValue, "search value");
  // Search items...................
  const { Search } = Input;

  useEffect(() => {
    const searchData = list?.filter((val) => val.Sname.includes(searchValue));
    if (searchValue?.length) {
      setData(searchData);
    } else {
      setData(list);
    }
  }, [searchValue]);

  return (
    <div className="project-container">
      <h1>Student Data</h1>
      {/* .... */}
      {list.length ? (
        <Space direction="vertical">
          <Search
            placeholder="Search text ...................."
            onChange={(e) => setSearchValue(e.target.value)}
            enterButton
            style={{ width: 504 }}
          />
        </Space>
      ) : (
        " "
      )}

      {/* ..... */}
      {list.length ? (
        <table id="customers">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>State</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          {data?.map((value, key) => {
            return (
              <tr>
                <td>{key + 1}</td>
                <td>{value.Sname}</td>
                <td>{value.Fname}</td>
                <td>{value.State}</td>
                <td>{value.gender}</td>
                <td>{value.DFB}</td>
                <td style={{ textAlign: "center", cursor: "pointer" }}>
                  {" "}
                  <DeleteOutlined
                    onClick={() => dispatch(deleteUser(value.id))}
                  />
                </td>
                <td style={{ textAlign: "center", cursor: "pointer" }}>
                  <EditOutlined
                    onClick={() => navigate(`/project/edit/${value.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Project;
