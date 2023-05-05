import React from "react";

import CoffeeList from "@/components/CoffeeList";

function CoffeeListingPage() {
  const entity = "coffee";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const listingPageTitle = "Coffee List";
  const entityDisplayLabels = ["name"];

  const coffeeListAttributes = [
    { title: "Coffee Name", dataIndex: "name" },
    { title: "Type", dataIndex: "type" },
    { title: "Rating", dataIndex: "rating" },
    { title: "Image", dataIndex: "image" },
    { title: "Price", dataIndex: "price" },
    { title: "Notes", dataIndex: "notes" },
  ];

  const ADD_NEW_ENTITY = "Add new coffee";
  const ENTITY_NAME = "coffee";
  const CREATE_ENTITY = "Create coffee";
  const UPDATE_ENTITY = "Update coffee";
  const config = {
    entity,
    listingPageTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    coffeeListAttributes,
    listingPageTitle,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CoffeeList
      config={config}
    />
  );
}

export default CoffeeListingPage;
