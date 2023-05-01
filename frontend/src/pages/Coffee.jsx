import React from "react";

import CrudModule from "@/modules/CrudModule";
import CoffeeForm from "@/forms/CoffeeForm";

function Coffee() {
  const entity = "coffee";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const panelTitle = "Coffee Panel";
  const dataTableTitle = "Coffee List";
  const entityDisplayLabels = ["name"];

  const readColumns = [
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

const dataTableColumns = [
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
  const DATATABLE_TITLE = "Coffee List";
  const ENTITY_NAME = "coffee";
  const CREATE_ENTITY = "Create coffee";
  const UPDATE_ENTITY = "Update coffee";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<CoffeeForm />}
      updateForm={<CoffeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Coffee;
