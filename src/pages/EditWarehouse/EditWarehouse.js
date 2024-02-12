import "./EditWarehouse.scss";
import { useState, useEffect } from "react";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditWarehouse(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5050/warehouses/${id}`)
      .then((response) => {
        const warehouse = response.data;
        setName(warehouse.warehouse_name);
        setAddress(warehouse.address);
        setCity(warehouse.city);
        setCountry(warehouse.country);
        setContactName(warehouse.contact_name);
        setPosition(warehouse.contact_position);
        setPhoneNumber(warehouse.contact_phone);
        setEmail(warehouse.contact_email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleUpload(event) {
    event.preventDefault();
    const data = {
      warehouse_name: name,
      address: address,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    };

    axios
      .put(`http://localhost:5050/warehouses/${id}`, data)
      .then((response) => {
        console.log(response);
        // Handle success response
        window.location.assign("/warehouses");
      })
      .catch((error) => {
        console.log(error);
        // Handle error response
      });
    // Handle form submit
  }

  return (
    <>
      <form onSubmit={handleUpload}>
        <div className="add">
          <div className="add__top-header">
            <Link to="/warehouses" className="add__top-left">
              <img
                className="add__top-arrow"
                src={arrow}
                alt="arrow-back-icon"
              ></img>
            </Link>
            <div className="add__top-right">
              <h1 className="add__top-title">Edit Warehouse</h1>
            </div>
          </div>

          <div className="add__flex">
            <div className="add__left">
              <h2 className="add__left-title">Warehouse Details</h2>

              <label className="add__left-name">Warehouse Name</label>
              <textarea
                id="warehouseNameInput"
                placeholder="Washington"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="add__left-edit"
                required
              />

              <label className="add__left-name" htmlFor="warehouseAddressInput">
                Street Address
              </label>
              <textarea
                className="add__left-edit"
                placeholder="33 Pearl Street SW"
                id="warehouseAddressInput"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>

              <label className="add__left-name" htmlFor="warehouseCityInput">
                City
              </label>
              <textarea
                className="add__left-edit"
                placeholder="Washington"
                id="warehouseCityInput"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></textarea>

              <label className="add__left-name" htmlFor="warehouseCountryInput">
                Country
              </label>
              <textarea
                className="add__left-edit"
                placeholder="USA"
                id="warehouseCountryInput"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="add__right">
              <h2 className="add__right-title">Contact Details</h2>

              <label className="add__right-name">Contact Name</label>
              <textarea
                className="add__right-edit"
                placeholder="Graeme Lyon"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              ></textarea>

              <label className="add__right-name">Position</label>
              <textarea
                className="add__right-edit"
                placeholder="Warehouse Manager"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              ></textarea>

              <label className="add__right-name">Phone Number</label>
              <textarea
                className="add__right-edit"
                required
                placeholder="+16475040911"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></textarea>

              <label className="add__right-name">Email</label>
              <textarea
                className="add__right-edit"
                required
                placeholder="glyon@instock.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="add__buttons">
            <button className="add__buttons-cancel">Cancel</button>
            <button className="add__buttons-add" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditWarehouse;
