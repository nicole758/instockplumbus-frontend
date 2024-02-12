import "./AddNewWarehouse.scss";
import { ReactComponent as Add } from "../../assets/Icons/add.svg";
import { useState } from "react";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";



function AddNewWarehouse() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");


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

        axios.post('http://localhost:5050/warehouses', data)
            .then(response => {
                console.log(response.data);
                setName("");
                setAddress("");
                setCity("");
                setCountry("");
                setContactName("");
                setPosition("");
                setPhoneNumber("");
                setEmail("");
                window.location.assign('/warehouses');
            })
            .catch(error => {
                console.log(error);
            });

            
    }

    return (
        <>
            <form onSubmit={handleUpload}  >
                <div className="add">
                    <div className="add__top-header">
                    <Link to={`/warehouses`}>
                        <div className="add__top-left">
                            <img className="add__top-arrow" src={arrow} alt='arrow-back-icon' ></img>
                        </div>
                    </Link>
                        <div className="add__top-right">
                            <h1 className="add__top-title">Add New Warehouse</h1>
                        </div>
                    </div>

                    <div className="add__flex">

                        <div className="add__left">
                            <h2 className="add__left-title">Warehouse Details</h2>

                            <label className="add__left-name"  >Warehouse Name</label>
                            <textarea id="warehouseNameInput" placeholder="Warehouse Name" value={name} onChange={(e) => setName(e.target.value)} className="add__left-input" required />

                            <label className="add__left-name" htmlFor="warehouseAddressInput">Street Address</label>
                            <textarea className="add__left-input" placeholder="Street Address" id="warehouseAddressInput" value={address}
                                onChange={(e) => setAddress(e.target.value)} required></textarea>

                            <label className="add__left-name" htmlFor="warehouseCityInput">City</label>
                            <textarea className="add__left-input " placeholder="City" id="warehouseCityInput" value={city}
                                onChange={(e) => setCity(e.target.value)} required></textarea>

                            <label className="add__left-name" htmlFor="warehouseCountryInput">Country</label>
                            <textarea className="add__left-input" placeholder="Country" id="warehouseCountryInput" value={country}
                                onChange={(e) => setCountry(e.target.value)} required></textarea>
                        </div>


                        <div className="add__right">
                            <h2 className="add__right-title">Contact Details</h2>

                            <label className="add__right-name">Contact Name</label>
                            <textarea className="add__right-input " placeholder="Contact Name" value={contactName}
                                onChange={(e) => setContactName(e.target.value)} required></textarea>

                            <label className="add__right-name">Position</label>
                            <textarea className="add__right-input" placeholder="Position" value={position}
                                onChange={(e) => setPosition(e.target.value)} required></textarea>

                            <label className="add__right-name">Phone Number</label>
                            <textarea className="add__right-input" required placeholder="Phone Number" value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}></textarea>

                            <label className="add__right-name">Email</label>
                            <textarea className="add__right-input" required placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="add__buttons">
                        <button className="add__buttons-cancel">Cancel</button>
                            <button className="add__buttons-add" type="submit">
                                <Add className="add__buttons-icon" />Add Warehouse</button>
                    </div>
                </div>
            </form>
        </>
    );

}

export default AddNewWarehouse;

