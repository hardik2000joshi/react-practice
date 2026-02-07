
import { createRoot } from "react-dom/client";
import Table from "./table";
import Blue from "./App"
import {CompaniesPage} from "./App";
import { IndustriesPage } from "./App";
import TabPage from "./Tab"
createRoot(document.getElementById('root')).render(
  <div>
  <h1 style={{color: "red", backgroundColor: "purple"}}>
    React is a front end javascript library for building user interface
    </h1>
    <Table />
    <Blue />
    <TabPage />
    <CompaniesPage/>
    <IndustriesPage />

    </div>
);


