import React from "react";
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import "./WarehouseList.scss";
import sort from '../../assets/Icons/sort-24px.svg'
import { Link } from "react-router-dom";


function WarehouseList() {
 
  

  return (


   
    <section className="warehouse">
      <section className="warehouse__nav">
        <h1 className="warehouse__heading">Warehouses</h1>
        <div className="warehouse__nav-right">
          <label htmlFor="search">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="warehouse__search"
            />
          </label>
          <Link to={`/warehouses/add`} className="warehouse__add">
          <button className="warehouse__add">+ Add New Warehouse </button>
          </Link>
        </div>
      </section>
      <div className="warehouse__header">
        <div className="warehouse__header-cat ">
          WAREHOUSE
          <img src={sort} alt="sort icon" />
        </div>
        <div className="warehouse__header-cat ">
          ADDRESS
          <img src={sort} alt="sort icon" />
        </div>
        <div className="warehouse__header-cat ">
          CONTACT NAME
          <img src={sort} alt="sort icon" />
        </div>
        <div className="warehouse__header-cat ">
          <p className="warehouse__header-cat--mod">CONTACT INFORMATION</p>
          <img src={sort} alt="sort icon" />
        </div>
        <div className="warehouse__header-cat warehouse__header-spaced ">
          ACTIONS
        </div>
        
      </div>
      <WarehouseItem />

      
    </section>
    
  );
}

export default WarehouseList;
