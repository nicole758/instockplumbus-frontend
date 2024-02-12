import "./AddNewInventory.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddNewInventory = () => {

  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });


  const quantityInput = document.getElementById('quantityInput');
  const quantityLabel = document.getElementById('quantityLabel');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "stock" && value === "outstock") {
      quantityInput.style.display = "none";
      quantityLabel.style.display = "none";
      setFormData({ ...formData, quantity: "0", status: "Out of Stock" });
    } else if (name === "stock" && value === "instock") {
      quantityInput.style.display = "block";
      quantityLabel.style.display = "block";
      setFormData({ ...formData, quantity: "", status: "In Stock" })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:5050/inventories',
      formData
    );
    console.log(response.data)
  };

  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5050/warehouses")
      .then(function (response) {
        const warehouseData = response.data.map((warehouse) => ({
          name: warehouse.warehouse_name,
          id: warehouse.id,
        }));
        setWarehouses(warehouseData);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5050/inventories")
      .then(function (response) {
        const categoryNames = response.data.map((item) => item.category);
        const uniqueCategories = [...new Set(categoryNames)];
        setCategories(uniqueCategories);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="add-inv">
        <div className="add-inv-header">
          <Link to='/inventories'>
            <img className="add-inv-header__arrow" src={arrow} alt="arrow-icon"></img>
          </Link>
          <h1 className="add-inv-header__title">Add New Inventory Item</h1>
        </div>
        <form className="add-inv__form" onSubmit={handleChange}>
          <div className="add-inv__wrapper">
            <div className="item-details">
              <h2 className="item-details__header">Item Details</h2>
              <label className="item-details__label" htmlFor="name">
                Item Name
              </label>
              <textarea
                className="item-details__input-name"
                name="item_name"
                placeholder="Item Name"
                onBlur={handleChange}
              ></textarea>
              <label className="item-details__label" htmlFor="description">
                Description
              </label>
              <textarea
                className="item-details__input-desc"
                name="description"
                placeholder="Please enter a brief item description..."
                onBlur={handleChange}
              ></textarea>
              <label className="item-details__label" htmlFor="category">
                Category
              </label>
              <select
                className="item-details__input-category"
                id="category"
                name="category"
                onChange={handleChange}
              >
                <option value="" selected hidden>
                  Please select
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="item-avail">
              <h2 className="item-avail__header">Item Availability</h2>
              <span className="item-avail__label">Status</span>
              <div className="item-avail__radio-wrapper">
                <div className="item-avail__radio-wrapper--left">
                  <input
                    className="item-avail__radio"
                    type="radio"
                    name="stock"
                    value="instock"
                    onChange={handleChange}
                  />
                  <label className="item-avail__radio-name" htmlFor="instock">
                    In stock
                  </label>
                </div>
                <div className="item-avail__radio-wrapper--right">
                  <input
                    className="item-avail__radio"
                    type="radio"
                    name="stock"
                    value="outstock"
                    id="outstock"
                    onChange={handleChange}
                  />
                  <label className="item-avail__radio-name" htmlFor="outstock">
                    Out of stock
                  </label>
                </div>
              </div>
              <label htmlFor="quantity" id="quantityLabel" className="item-avail__label">
                Quantity
              </label>
              <textarea
                name="quantity"
                id="quantityInput"
                className="item-avail__input-quantity"
                placeholder="0"
                onBlur={handleChange}
              ></textarea>
              <label className="item-avail__label" htmlFor="warehouse">
                Warehouse
              </label>
              <select
                className="item-avail__input-warehouse"
                onChange={handleChange}
                name="warehouse_id"
              >
                <option value="" selected hidden>
                  Please select
                </option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="item-submit">
            <button className="item-submit__cancel">Cancel</button>
            <button onClick={handleSubmit} className="item-submit__add">+ Add Item</button>
          </div>
        </form>
      </div>
      {console.log(formData)}
    </>
  );
}

export default AddNewInventory;
