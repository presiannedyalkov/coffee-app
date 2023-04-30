import React from "react";

import AdminCrudModule from "@/modules/AdminCrudModule";
import AdminForm from "@/forms/AdminForm";

export default function Admin() {
  const entity = "admin";
  const searchConfig = {
    displayLabels: ["name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const panelTitle = "Admin Panel";
  const dataTableTitle = "Admin Lists";
  const entityDisplayLabels = ["name"];

  const readColumns = [
    { title: "Name", dataIndex: "name" },
  ];

  const dataTableColumns = [
    { title: "Name", dataIndex: "name" },
  ];
  const ADD_NEW_ENTITY = "Add new admin";
  const DATATABLE_TITLE = "Admins List";
  const ENTITY_NAME = "admin";
  const CREATE_ENTITY = "Create admin";
  const UPDATE_ENTITY = "Update admin";

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
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
