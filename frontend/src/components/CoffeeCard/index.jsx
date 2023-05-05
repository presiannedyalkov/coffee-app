import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from 'antd';

export default function CoffeeCard({ item, attributes }) {

  return (
    <>
      <Card title={item.name}>
        {attributes.slice(1).map((attribute, index) => {
          const value = item[attribute.dataIndex];
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
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        > 
          <Link to={`/coffee-list/${item._id}`}>
            <Button>
              Show more
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
}
