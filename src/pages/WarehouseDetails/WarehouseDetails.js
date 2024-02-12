import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { ReactComponent as EditIcon } from "../../assets/Icons/edit-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";

function WarehouseDetails() {
  // const [isOpen, setIsOpen] = useState(false);
  const [warehouse, setWarehouse] = useState([]);
  const [inventory, setInventory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/warehouses/${id}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  //this gets the inventory for a specific warehouse
  useEffect(() => {
    axios
      .get(`http://localhost:5050/warehouses/${id}/inventories`)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    console.log("inventory updated:", inventory);
  }, [inventory]);

  return (
    <>
      <article className="details">
        <div className="details__top">
          <div className="details__top-loc">
            <Link to="/warehouses">
              <img
                className="details__top-icon"
                src={backIcon}
                alt="arrow-back-icon"
              />
            </Link>

            <h1 className="details__top-heading">{warehouse.warehouse_name}</h1>
          </div>
          <button className="details__top-button">
            <EditIcon className="details__top-edit" fill="white" /> Edit
          </button>
        </div>
        <div className="details__bottom">
          <div className="details__bottom-address">
            <div className="details__cont">
              <p className="details__cont-heading">WAREHOUSE ADDRESS:</p>
              <p className="details__cont-p--width">{warehouse.address}</p>
            </div>
          </div>
          <div className="details__bottom-contacts">
            <div className="details__cont">
              <p className="details__cont-heading">CONTACT NAME:</p>
              <p className="details__cont-p">{warehouse.contact_name}</p>
              <p className="details__cont-p">{warehouse.contact_position}</p>
            </div>
            <div className="details__cont">
              <p className="details__cont-heading">CONTACT INFORMATION:</p>
              <p className="details__cont-p">{warehouse.contact_phone}</p>
              <p className="details__cont-p">{warehouse.contact_email}</p>
            </div>
          </div>
        </div>
      </article>
      <InventoryItem item={inventory} />
    </>
  );
}

export default WarehouseDetails;
