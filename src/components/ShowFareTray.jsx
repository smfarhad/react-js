import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function ShwoFareTray() {
    const [showTray,setshowTray]=useState(true);
    const handleClick = (status) => {
        setshowTray(status);
    };
  return (
    <>
      <span className="fare-break-down-icon" onClick={()=>{handleClick(!showTray)}} title="fareDetails">
        <FontAwesomeIcon icon={faQuestionCircle}/>
      </span>        
      <div className={`booking-info-data text-right ${showTray ? 'd-none':''}`}>
        <h6>Base Fare </h6>
        <div className="bi-info">
          <p>Adult ( 1 x 37730)</p>
          <p>BDT 37730</p>
        </div>
        <div className="bi-info">
          <p>Total basefare</p>
          <p>BDT 37730</p>
        </div>
        <h6>Discount</h6>
        <div className="bi-info">
          <p>Total Discount</p>
          <p> BDT 0</p>
        </div>
        <h6>Taxes &amp; Charges</h6>
        <div className="bi-info">
          <p>Taxes and Fees</p>
          <p>BDT 9596</p>
        </div>
        <div className="bi-info">
          <p>
            <b className="bi-total">Total</b>
          </p>
          <p>BDT 47326 </p>
        </div>
      </div>
    </>
  );
}
