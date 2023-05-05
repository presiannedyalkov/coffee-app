import React, { useCallback, useEffect } from "react";
import { Row, Col } from 'antd';
import { DefaultLayout } from "@/layout";

import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import CoffeeCard from "@/components/CoffeeCard";
import SearchItem from "@/components/SearchItem";

export default function CoffeeList({ config }) {
  let { entity, coffeeListAttributes } = config;

  const { result: listResult, isLoading: listIsLoading } = useSelector(
    selectListItems
  );

  const { pagination, items } = listResult;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(crud.list(entity));
  }, []);

  if (listIsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <DefaultLayout>
        <SearchItem config={config} />
        <Row gutter={16}>
          {items.map((item, index) => (
            <Col key={index} span={8}>
              <CoffeeCard 
                item={item}
                attributes={coffeeListAttributes}
              />
            </Col>
          ))}
        </Row>
      </DefaultLayout>
    </>
  );
}
