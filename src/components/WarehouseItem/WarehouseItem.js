import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseItem.scss";
import del from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";
import WarehouseDelete from "../WarehouseDelete/WarehouseDelete";
// import search 

//we are going to be passing in data into this component
//there will be a axios PUT & DELETE in this component
// from inventories/:id endpoint

function WarehouseItem() {
  const [deleteId, setDeleteId] = useState(null);
  const [warehouse, setWarehouse] = useState([]);



  useEffect(() => {
    axios.get(`http://localhost:5050/warehouses`)
      .then(response => {
        setWarehouse(response.data);
        (console.log(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <article className="det">
      {warehouse.map(item => (
        <><div className="mobile">
          <div className="det__top">
            <div className="det__left">
              <div className="det__left-item">
                <h3 className="det__heading det__hidden">WAREHOUSE</h3>
                <Link to= {`/warehouses/${item.id}`}>
                <p className="det__content--blue det__content-p"> {item.warehouse_name}{' '} <img src={chevron} 
                alt="chevron-icon" className="det__content-icon" /></p> </Link>
              </div>
              <div className="det__left-item">
                <h3 className="det__heading det__hidden">ADDRESS</h3>
                <p className="det__content">{item.address},{item.city},{item.country} </p>
              </div>
            </div>
            <div className="det__right">
              <div className="det__right-contact">
                <h3 className="det__heading det__hidden">CONTACT NAME</h3>
                <p className="det__content">{item.contact_name}</p>
              </div>
              <div className="det__right-contact">
                <h3 className="det__heading det__hidden">CONTACT INFORMATION</h3>
                <div>
                  <p className="det__content">{item.contact_phone}</p>
                  <p className="det__content">{item.contact_email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="det__btns">
            <h3 className="det__heading--hidden">Actions</h3>
            <img
              onClick={() => setDeleteId(item.id)}
              src={del}
              alt="del-icon"
              className="det__del"
            />
            <Link to={`/warehouses/edit/${item.id}`} className="det__edit">
              <img src={edit} alt="edit-icon" />
            </Link>
          </div>
        </div>

          <div className="desktop">
            <Link to={`/warehouses/${item.id}`} >
            <div className="desktop__cont">  <p className="det__content--blue det__content-p">{item.warehouse_name}{' '} 
             <img src={chevron} alt="chevron-icon" className="det__content-icon" /></p>
            </div></Link>
            
            <div className="desktop__cont"> <p className="det__content">{item.address},{item.city},{item.country} </p></div>
            <div className="desktop__cont">  <p className="det__content">{item.contact_name}</p> </div>

            <div className="desktop__cont">
              <p className="det__content">{item.contact_phone}</p>
              <p className="det__content">{item.contact_email}</p>   </div>
            <div className="det__btns">
              <h3 className="det__heading--hidden">Actions</h3>

              <img
                onClick={() => setDeleteId(item.id)}
                src={del}
                alt="del-icon"
                className="det__del"
              />

              <Link to={`/warehouses/edit/${item.id}`} className="det__edit">
                <img src={edit} alt="edit-icon" />
              </Link>
            </div>
          </div>
          <Modal open={deleteId !== null}>
            <WarehouseDelete
              onClose={() => setDeleteId(null)}
              id={deleteId}
              name={warehouse.find((item) => item.id === deleteId)?.warehouse_name}
            />
          </Modal>

          
        </>
      ))}

    </article>

  );
}

export default WarehouseItem;
