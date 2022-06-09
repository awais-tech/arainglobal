import React from "react";
import AddOns from "./AddOns";
import AddOnsDetails from "./AddOnsDetails";
import background from "../../assets/img.jpg";
import { useLocation } from "react-router-dom";

function VhicleAdd() {
  const Location = useLocation();

  return (
    <>
      <div className="BackImage">
            <h1
              style={{ color: "white", textAlign: "center", paddingTop: "40px" }}
            >
              RESERVATION
            </h1>
            <div className="row justify-content-center" style={{ padding: "20px", height: "400px"}}>
              <div className="col-md-3" style={{ backgroundColor: "red", margin: '20px' }}>
                <h3>Your itinerary</h3>
                <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
                <p>{Location.state.data.check}</p>
                <p>{Location.state.data.pickDate}</p>
                <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
                <p>{Location.state.data.drop}</p>
                <p>{Location.state.data.returnDate}</p>
              </div>
              <div className="col-md-3" style={{ backgroundColor: "#fff", margin: '20px' }}>
                <h3>Select Vehicles</h3>
                <h6 style={{ fontWeight: "bold" }}>Type</h6>
                <p>--</p>
                <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
                <p>--</p>
              </div>
              <div className="col-md-3" style={{ backgroundColor: "#fff", margin: '20px' }}>
                <h3>Reserve You Vehicle</h3>
                <h6 style={{ fontWeight: "bold" }}>Your Information</h6>
                <p>--</p>
                <h6 style={{ fontWeight: "bold" }}>Payment Information</h6>
                <p>--</p>
              </div>
            </div>
          </div>
      <div className="NewComp">
      <AddOnsDetails data={Location} />
      </div>
    </>
  );
}

export default VhicleAdd;
