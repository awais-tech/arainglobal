import React from "react";
import { useLocation } from "react-router-dom";
import CarBill from "./CarBill";
import DriverDetails from "./DriverDetails";

function FinalForm() {
  const Location = useLocation();
  return (
    <>
    
    
      <CarBill Location={Location} />,
 
      <DriverDetails Location={Location} />
     
    </>
  );
}

export default FinalForm;
