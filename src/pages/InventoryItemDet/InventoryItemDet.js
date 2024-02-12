import React from "react";
import "./InventoryItemDet.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg"
import { ReactComponent as EditIcon } from "../../assets/Icons/edit-24px.svg";
import Footer from "../../components/Footer/Footer";


function InventoryItemDet() {
    return (
        <>
            <article className="dets">
                <div className="dets__main">
                    <div className="dets__main-item">
                        <img className='dets__main-icon' src={backIcon} alt='arrow-back-icon' />
                        <h1 className="dets__main-heading">Television</h1></div>
                    <button className="dets__main-button" >
                        <EditIcon className="dets__main-edit" fill="white" /> Edit

                    </button>
                </div>
                <div className="dets__bottom">
                    <div className="dets__bottom-description">
                        <div className="dets__cont">
                            <p className="dets__cont-heading">ITEM DESCRIPTION:</p>
                            <p className="dets__cont-p--width">This 50", 4K LED TV provides a crystal clear picture and vivid colors.</p>
                        </div>
                        <div className="dets__cont">
                            <p className="dets__cont-heading">CATEGORY:</p>
                            <p className="dets__cont-p">Electronics</p>
                        </div> </div>
                        <div className="dets__bottom-details">   
                        <div className="dets__cont--width">
                            <div className="dets__cont-left">
                            <p className="dets__cont-heading">STATUS:</p>
                            <p className="dets__cont-p">IN STOCK</p></div>
                            <div className="dets__cont-right">
                            <p className="dets__cont-heading">QUANITY:</p>
                            <p className="dets__cont-p">500</p></div>
                        </div>
                        <div className="dets__cont">
                            <p className="dets__cont-heading">WAREHOUSE:</p>
                            <p className="dets__cont-p">Manhattan</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default InventoryItemDet;
