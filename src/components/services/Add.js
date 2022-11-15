import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, deleteUser } from "../../store/action/action";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate, "navigate navigate");
  const { id } = useParams();
  console.log(id, "id");
  const list = useSelector((state) => state.todoReducer.list);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (id) {
      const payload = { ...values, id: id };
      navigate("/service/table");
      dispatch(editUser(payload));
      form.resetFields();
    } else {
      dispatch(addUser(values));
      form.resetFields();
      navigate("/service/table");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const data = list.filter((item) => {
      return item.id == id;
    });
    form.setFieldsValue(data[0]);
    const formValues = form.getFieldsValue();
  }, [id]);

  return (
    <div style={{ margin: "64px auto", width: "40%" }}>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password style={{ padding: "7px 12px", height: "38px" }} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* <Table data={inputData} /> */}
    </div>
  );
};

export default Add;
