import React from "react";

import ListingPage from "@/components/ListingPage";

function CoffeeListingPage() {
  const entity = "coffee";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const listingPageTitle = "Coffee List";
  const entityDisplayLabels = ["name"];

  const coffeeAttributes = [
    { title: "Coffee Name", dataIndex: "name" },
    { title: "Type", dataIndex: "type" },
    { title: "Grind Espresso", dataIndex: "grindEspresso" },
    { title: "Grind Filter Coffee", dataIndex: "grindFilterCoffee" },
    { title: "Temperature Espresso", dataIndex: "temperatureEspresso" },
    { title: "Temperature Filter Coffee", dataIndex: "temperatureFilterCoffee" },
    { title: "Input Espresso", dataIndex: "inputEspresso" },
    { title: "Output Espresso", dataIndex: "outputEspresso" },
    { title: "Ratio", dataIndex: "ratio" },
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
    coffeeAttributes,
    listingPageTitle,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <ListingPage
      config={config}
    />
  );
}

export default CoffeeListingPage;
