import React from "react";
import { Form, Input } from "antd";

export default function CoffeeForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Coffee Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Coffee Type"
        name="type"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Grind for espresso"
        name="grindEspresso"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Grind for filter coffee"
        name="grindFilterCoffee"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Temperature for espresso"
        name="temperatureEspresso"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Temperature for filter coffee"
        name="temperatureFilterCoffee"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Input espresso"
        name="inputEspresso"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Output espresso"
        name="outputEspresso"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ratio"
        name="ratio"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Rating"
        name="rating"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Notes"
        name="notes"
      >
        <Input />
      </Form.Item>
    </>
  );
}
