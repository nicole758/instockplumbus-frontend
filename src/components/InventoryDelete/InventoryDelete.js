import './InventoryDelete.scss';
import React from 'react';
import axios from 'axios';
import CloseIcon from '../../assets/Icons/close-24px.svg';


function InventoryDelete({ onClose,id,name  }) {

  const handleClick = e => {
    e.preventDefault();

    axios.delete(`http://localhost:5050/inventories/${id}`)
    .then(response => {
      console.log(response);
      onClose(); // close the modal after successful deletion
      window.location.reload()
    })
    .catch(error => {
      console.log(error);
    });
};

  return (
    <div>
        <div className="icon__container" onClick={onClose}>
        <img src={CloseIcon} alt="Close Icon" />
      </div>
      <h1 className="delete-modal__title">Delete {name} item?</h1>
      <div className="delete-modal--diplay">
        <p className="delete-modal__paragraphe">Please confirm that you would like to delete the {name} from the inventory list. You won't be able to undo this action.</p>
        <form className="form--display">
          <button className="button-cancel" type="submit" onClick={onClose}>Cancel</button>
          <button className="button-delete" type="submit" onClick={handleClick}>Delete</button>
        </form>
      </div>
      
    </div>
  )
}

export default InventoryDelete