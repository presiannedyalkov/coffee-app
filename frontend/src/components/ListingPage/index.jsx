import React, { useCallback, useEffect } from "react";
import { Card, Row, Col, PageHeader, Button } from 'antd';
const { Meta } = Card;

import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import uniqueId from "@/utils/uinqueId";

export default function ListingPage({ config }) {
  let { entity, coffeeAttributes, listingPageTitle } = config;

  console.log("entity", entity);

  const { result: listResult, isLoading: listIsLoading } = useSelector(
    selectListItems
  );

  console.log("listResult", listResult);

  const { pagination, items } = listResult;

  const dispatch = useDispatch();

  const handelListLoad = useCallback((pagination) => {
    dispatch(crud.list(entity, pagination.current));
  }, []);

  useEffect(() => {
    dispatch(crud.list(entity));
  }, []);

  return (
    <>
      <Row gutter={16}>
        {items.map((item, index) => (
          <Col key={index} span={8}>
            {console.log("item: ", item)}
            <Card title={item.name}>
              {coffeeAttributes.slice(1).map((attribute, index) => {
                const value = item[attribute.dataIndex];
                return value ? (
                  <Row key={index} className="attribute-row">
                    <Col span={16} className="attribute-title">
                      {attribute.title}:
                    </Col>
                    <Col span={8} className="attribute-value">
                      {value}
                    </Col>
                  </Row>
                ) : null;
              })}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
