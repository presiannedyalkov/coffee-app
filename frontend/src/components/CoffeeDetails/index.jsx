import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";
import { Card, Row, Col } from 'antd';

export default function CoffeeDetails({ attributes }) {

  const entity = "coffee";

  const { coffeeId } = useParams();
  const { result: result, isLoading: isLoading } = useSelector(
    selectListItems
  );
  const { items } = result;
  const thisCoffee = items.find(item => item._id === coffeeId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(crud.list(entity));
  }, []);

  if (!thisCoffee || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Card title={thisCoffee.name}>
        {attributes.slice(1).map((attribute, index) => {
          const value = thisCoffee[attribute.dataIndex];
          return value ? (
            <Row 
              key={index} 
              style={{
                marginBottom: "8px",
              }}>
              <Col span={16}>
                {attribute.title}:
              </Col>
              <Col span={8}>
                {value}
              </Col>
            </Row>
          ) : null;
        })}
      </Card>
    </>
  );
}
