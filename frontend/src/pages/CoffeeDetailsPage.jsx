import React from "react";
import { DefaultLayout } from "@/layout";

import CoffeeDetails from "@/components/CoffeeDetails";

function CoffeeDetailsPage() {
  const coffeePageAttributes = [
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

  return (
    <>
      <DefaultLayout>
        <CoffeeDetails
          attributes={coffeePageAttributes}
        />
      </DefaultLayout>
    </>
  );
}

export default CoffeeDetailsPage;
