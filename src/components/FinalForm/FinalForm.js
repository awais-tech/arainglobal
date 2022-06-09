import React from "react";
import { useLocation } from "react-router-dom";
import CarBill from "./CarBill";
import DriverDetails from "./DriverDetails";

function FinalForm() {
  const Location = useLocation();
  return (
    <>
    <div className="row">
      <div className="col-md-12">
      <div className="row">
        <div className="col-md-12">
        <CarBill Location={Location} />,
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <DriverDetails Location={Location} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default FinalForm;
