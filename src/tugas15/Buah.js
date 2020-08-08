import React from "react";
import { DataBuahProvider } from "./ContextBuah";
import ListDataBuah from "./ListDataBuah";
import FormBuah from "./FormBuah";

const Buah = () => {
  return (
    <DataBuahProvider>
      <ListDataBuah />
      <FormBuah />
    </DataBuahProvider>
  )
}

export default Buah;