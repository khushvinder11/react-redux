import React, { useState, useEffect } from "react";
import "./projectAddStyle.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../store/action/projectaction";
import { Alert, message } from "antd";
import { Radio, Input } from "antd";
const RadioGroup = Radio.Group;

const ProjectAdd = () => {
  const [inputValue, setInputValue] = useState({});
  console.log(inputValue, "inputValue");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ...
  const { id } = useParams();
  console.log(id, "id");
  const list = useSelector((state) => state.projectReducer.list);

  // Submit value    add User................
  const SubmitData = () => {
    if (
      !inputValue.Sname ||
      !inputValue.Fname ||
      !inputValue.State ||
      !inputValue.gender ||
      !inputValue.DFB
    ) {
      message.warning("Plese fill input field ?");
    } else {
      message.success("Submit your data.");
      dispatch(addUser(inputValue));
      navigate("/project/table");
    }
  };

  // Edit value..................
  useEffect(() => {
    const data = list?.filter((item) => {
      return item.id == id;
    });
    setInputValue(data[0]);
  }, [id]);

  const EditData = () => {
    if (id) {
      const payload = { ...inputValue, id: id };
      navigate("/project/table");
      dispatch(editUser(payload));
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ marginTop: "13px", color: "#1f627d" }}>
        <b>Login Form</b>
      </h2>
      <div class="imgcontainer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="Avatar"
          class="avatar"
        />
      </div>
      {/* .... */}
      <div className="input-field-container">
        <label for="Sname">
          <b>Student Name</b>
        </label>
        <input
          type="text"
          placeholder="Student Username"
          name="Sname"
          value={inputValue?.Sname}
          onChange={(e) =>
            setInputValue({
              ...inputValue,
              Sname: e.target.value,
            })
          }
        />
        <label for="psw">
          <b>Father Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Fathername"
          name="psw"
          value={inputValue?.Fname}
          onChange={(e) =>
            setInputValue({ ...inputValue, Fname: e.target.value })
          }
        />
        <label for="psw">
          <b>Date of Birth</b>
        </label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={inputValue?.DFB}
          onChange={(e) =>
            setInputValue({ ...inputValue, DFB: e.target.value })
          }
        ></input>

        <label for="cars">
          <b>State</b>
        </label>
        <select
          name="cars"
          id="cars"
          value={inputValue?.State}
          onChange={(e) =>
            setInputValue({ ...inputValue, State: e.target.value })
          }
        >
          <option value="..">Select...................</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
          <option value="Rajsathan">Rajsathan</option>
          <option value="U.P">U.P</option>
        </select>
        <label>
          {" "}
          <b>Gender</b>
        </label>
        <div>
          <RadioGroup
            onChange={(e) =>
              setInputValue({ ...inputValue, gender: e.target.value })
            }
            value={inputValue?.gender}
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </RadioGroup>
        </div>
        {id ? (
          <button type="submit" onClick={() => EditData()}>
            Edit
          </button>
        ) : (
          <button type="submit" onClick={() => SubmitData()}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectAdd;
