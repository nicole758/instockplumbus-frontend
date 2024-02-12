import React from "react";
import "./InventoryList.scss";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import sort from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

//there will be a axios post in this component
// from inventories endpoint

function InventoryList() {
  axios
    .get("http://localhost:5050/inventories")
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return (
    <section className="inventory">
      <section className="inventory__nav">
        <h1 className="inventory__heading">Inventory</h1>
        <div className="inventory__nav-right">
          <label htmlFor="search">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="inventory__search"
            />
          </label>
          <Link to={"/inventories/add"}>
            <button className="inventory__add">+ Add New Item </button>
          </Link>
        </div>
      </section>
      <div className="inventory__header invetory__header--tablet">
        <div className="inventory__header-cat inventory__header-cat--1 ">
          INVENTORY ITEM
          <img className="inventory__header-sort" src={sort} alt="sort icon" />
        </div>
        <div className="inventory__header-cat inventory__header-cat--2 ">
          CATEGORY
          <img className="inventory__header-sort" src={sort} alt="sort icon" />
        </div>
        <div
          className="inventory__header-cat 
        inventory__header-cat--3"
        >
          STATUS
          <img className="inventory__header-sort" src={sort} alt="sort icon" />
        </div>

        <div
          className="inventory__header-cat
        inventory__header-cat--4 "
        >
          QTY
          <img className="inventory__header-sort" src={sort} alt="sort icon" />
        </div>
        <div
          className="inventory__header-cat 
        inventory__header-cat--5"
        >
          WAREHOUSE
          <img className="inventory__header-sort" src={sort} alt="sort icon" />
        </div>

        <div className="inventory__header-cat  ">ACTIONS</div>
      </div>

      <InventoryItem />
    </section>
  );
}

export default InventoryList;
