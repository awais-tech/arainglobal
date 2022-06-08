import React from "react";
import AddOns from "./AddOns";
import AddOnsDetails from "./AddOnsDetails";
import background from "../../assets/img.jpg";
import { useLocation } from "react-router-dom";

function VhicleAdd() {
  const Location = useLocation();

  return (
    <>
      <div>
        <div className="container-car ">
          <img style={{ width: "100%", height: "80vh" }} src={background} />
        </div>
        <h1 style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
          RESERVATION
        </h1>
        <div className="threebox row" style={{ flex: 1, padding: "20px" }}>
          <div className="box col-md-4" style={{ flex: 1, backgroundColor: "red" }}>
            <h3>Your itinerary</h3>
            <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
            <p>{Location.state.data.check}</p>
            <p>{Location.state.data.pickDate}</p>
            <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
            <p>{Location.state.data.drop}</p>
            <p>{Location.state.data.returnDate}</p>
          </div>
          <div className="box col-md-4" style={{ flex: 1, backgroundColor: "#fff" }}>
            <h3>Select Vehicles</h3>
            <h6 style={{ fontWeight: "bold" }}>Type</h6>
            <p>{Location.state?.car?.name}</p>
            <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
            <p>--</p>
          </div>
          <div className="box col-md-4" style={{ flex: 1, backgroundColor: "#fff" }}>
            <h3>Reserve You Vehicle</h3>
            <h6 style={{ fontWeight: "bold" }}>Your Information</h6>
            <p>--</p>
            <h6 style={{ fontWeight: "bold" }}>Payment Information</h6>
            <p>--</p>
          </div>
        </div>
      </div>
      <AddOnsDetails data={Location} />
    </>
  );
}

export default VhicleAdd;
