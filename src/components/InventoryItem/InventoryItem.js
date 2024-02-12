import "./InventoryItem.scss";
import edit from "../../assets/Icons/edit-24px.svg";
import del from "../../assets/Icons/delete_outline-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import Modal from "../Modal/Modal";
import InventoryDelete from "../InventoryDelete/InventoryDelete";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

//we are going to be passing in data into this component
//there will be a axios PUT & DELETE in this component
// from inventories/:id endpoint
// i think we are going to need state because of the qty change will need to change the IN STOCK TAG ??

function InventoryItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5050/inventories")
      .then((response) => {
        // Handle successful response

        setItems(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5050/warehouses")
      .then((response) => {
        // Handle successful response

        setWarehouses(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <>
      {items.map((item) => (
        <>
          <div className="mobile">
            <div className="mobile__top">
              <div className="mobile__left">
                <div className="mobile__left-item">
                  <h3 className="mobile__heading">Inventory Item</h3>
                  <span className="mobile__content mobile__content--blue">
                    {item.item_name}
                    <img
                      className="mobile__chev-icon"
                      src={chevron}
                      alt="chevron icon"
                    />
                  </span>
                </div>
                <div className="mobile__left-category">
                  <h3 className="mobile__heading">Category</h3>
                  <span className="mobile__content ">{item.category}</span>
                </div>
              </div>
              <div className="mobile__right">
                <div className="mobile__right-status">
                  <h3 className="mobile__heading">Status</h3>
                  <span className="mobile__content">{item.status}</span>
                </div>
                <div className="mobile__right-qty">
                  <h3 className="mobile__heading ">Qty</h3>
                  <span className="mobile__content">{item.quantity}</span>
                </div>
                <div className="mobile__right-warehouse">
                  <h3 className="mobile__heading">Warehouse</h3>
                  {warehouses
                    .filter((warehouse) => warehouse.id === item.warehouse_id)
                    .map((matchingWarehouse) => (
                      <span className="mobile__content">
                        {matchingWarehouse.warehouse_name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="mobile__btns">
              <img
                src={del}
                alt="del-icon"
                className="mobile__del"
                onClick={() => setDeleteId(item.id)}
              />
              <Link to={`/inventories/edit/${item.id}`}>
                <img src={edit} alt="edit-icon" className="mobile__edit" />
              </Link>
            </div>
          </div>

          <div className="tablet">
            <div className="tablet__container tablet__container--1">
              <span className="tablet__content tablet__content--1">
                {item.item_name}
                <img
                  src={chevron}
                  alt="chevron-icon"
                  className="tablet__content tablet__content--icon"
                />
              </span>
            </div>

            <span className="tablet__content tablet__content--2">
              {item.category}
            </span>

            <div className="tablet__content--3">
              <span className={`${item.quantity > 0 ? "instock" : "outstock"}`}>
                {item.status}
              </span>
            </div>

            <span className="tablet__content tablet__content--4">
              {item.quantity}
            </span>
            {warehouses
              .filter((warehouse) => warehouse.id === item.warehouse_id)
              .map((matchingWarehouse) => (
                // console.log(matchingWarehouse.warehouse_name)
                <span className="tablet__content tablet__content--5">
                  {matchingWarehouse.warehouse_name}
                </span>
              ))}

            <div className="tablet__btns">
              <img
                onClick={() => setDeleteId(item.id)}
                src={del}
                alt="del-icon"
                className="tablet__del"
              />
              <Link to={`/inventories/edit/${item.id}`}>
                <img src={edit} alt="edit-icon" className="tablet__edit" />
              </Link>
            </div>
            <Modal open={deleteId !== null}>
              <InventoryDelete
                onClose={() => setDeleteId(null)}
                id={deleteId}
                name={items.find((item) => item.id === deleteId)?.item_name}
              />
            </Modal>
          </div>
        </>
      ))}
    </>
  );
}

export default InventoryItem;
