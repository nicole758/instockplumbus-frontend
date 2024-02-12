import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import { Route, Routes } from "react-router-dom";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Header from "./components/Header/Header";
// import InventoryItemDet from "./pages/InventoryItemDet/InventoryItemDet";
import InventoryList from "./pages/InventoryList/InventoryList";
import AddNewInventory from "./pages/AddNewInventory/AddNewInventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import EditInventory from "./pages/EditInventory/EditInventory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/edit/:id" element={<EditWarehouse />} />
        <Route path="/warehouses/add" element={<AddNewWarehouse />} />
        <Route path="/inventories" element={<InventoryList />} />
        <Route path="/inventories/add" element={<AddNewInventory />} />
        <Route path="/inventories/edit/:id" element={<EditInventory />} />
      </Routes>
    </>
  );
}

export default App;
