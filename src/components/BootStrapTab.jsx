import { useState } from "react";
import SetPaxQty from "./SetPaxQty";
import SetSeatClass from "./SetSeatClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BootStrapTab() {
  const [showTab, setShowTab] = useState(1);
  const [showPaxQtySeatClassTray, setShowPaxQtySeatClassTray] = useState(false);

  const handleShowTab = (index) => {
    setShowTab(index);
  };

  const handleShowPaxQtySeatClassTray = ()=>{
    setShowPaxQtySeatClassTray(!showPaxQtySeatClassTray)
  }

  return (
    <div className="tab mb-3">
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={() => handleShowTab(1)}>
          <a className={`nav-link ${showTab === 1 ? 'active' : ''}`} aria-current="page" href="#">
            One Way
          </a>
        </li>
        <li className="nav-item" onClick={() => handleShowTab(2)}>
          <a className={`nav-link ${showTab === 2 ? 'active' : ''}`} href="#">
            Round Trip
          </a>
        </li>
        <li className="nav-item" onClick={() => handleShowTab(3)}>
          <a className={`nav-link ${showTab === 3 ? 'active' : ''}`} href="#">
            Multi City
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane p-3 fade ${showTab === 1 ? 'show active' : ''}`}>
            <form className="mt-3" action="#">
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Flying From"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Flying To"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Departing"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" onClick={handleShowPaxQtySeatClassTray} placeholder="Travelers" readOnly/>
                  <div className={`no-of-pax-class-tray ${showPaxQtySeatClassTray?'d-none':''}`}  >
                    <div className="pax-qty">
                    <h6 className="mt-2 mb-2 ps-1">Set Passenger Quantity</h6>
                      <ul className="list-group">
                          <li className="list-group-item">
                              <SetPaxQty name="Adult" defaultQty="1"/>
                          </li>
                          <li className="list-group-item">
                              <SetPaxQty name="Child" defaultQty="0" />
                            </li>
                          <li className="list-group-item">
                              <SetPaxQty name="Infant" defaultQty="0"/>
                          </li>
                      </ul>
                    </div>
                    <h6 className="mt-2 mb-2 ps-1">Set Class</h6>
                    <div className="seat-class">
                      <ul className="list-group">
                          <li className="list-group-item">
                            <SetSeatClass name="Economy"/>
                          </li>
                          <li className="list-group-item">
                            <SetSeatClass name="Premium Economy"/>
                          </li>
                          <li className="list-group-item">
                            <SetSeatClass name="Premium Business"/>
                          </li>
                          <li className="list-group-item">
                            <SetSeatClass name="First"/>
                          </li>
                          <li className="list-group-item">
                            <SetSeatClass name="First Class"/>
                          </li>
                      </ul>
                       
                      <button type="button" className="mt-2 mb-2 btn btn-primary btn-sm float-end" onClick={handleShowPaxQtySeatClassTray} >Done</button>
                      
                    </div>
                  </div>
                </div>
                <div className="col"> 
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      <FontAwesomeIcon />
                      Modify Search</button>
                   </div>
                </div>
              </div>
            </form>
        </div>
        <div className={`tab-pane fade ${showTab === 2 ? 'show active' : ''}`}>
          <p> Return </p>
        </div>
        <div className={`tab-pane fade ${showTab === 3 ? 'show active' : ''}`}>
          <p>
            Mutlicity
          </p>
        </div>
      </div>
    </div>
  );
}