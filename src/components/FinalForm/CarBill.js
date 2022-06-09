import React from "react";
import { useLocation } from "react-router-dom";
import background from "../../assets/img.jpg";

function CarBill({ Location }) {
  console.log(Location.state);
  return (
    <>
      {/* <div>
        <div className="container-car">
          <img style={{ width: "100%", height: "80vh" }} src={background} />
        </div>
      
        <div>
          <div className="container-car">
            <img style={{ width: "100%", height: "80vh" }} src={background} />
          </div>
          <h1
            style={{ color: "white", textAlign: "center", marginTop: "20px" }}
          >
            RESERVATION
          </h1>
          <div className="threebox row" style={{ flex: 1, padding: "20px" }}>
            <div className="box col-md-4" style={{ flex: 1, backgroundColor: "red" }}>
              <h3>Your itinerary</h3>
              <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
              <p>{Location.state.data.data.check}</p>
              <p>{Location.state.data.data.pickDate}</p>
              <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
              <p>{Location.state.data.data.drop}</p>
              <p>{Location.state.data.data.returnDate}</p>
            </div>
            <div className="box col-md-4" style={{ flex: 1, backgroundColor: "#fff" }}>
              <h3>Select Vehicles</h3>
              <h6 style={{ fontWeight: "bold" }}>Type</h6>
              <p>{Location.state?.data.car?.name}</p>
              <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
              <p>{Location.state?.extra.D1 && "Driver 1"}</p>
              <p>{Location.state?.extra.D2 && "Driver 2"}</p>
              <p>{Location.state?.extra.PT && "POST TRIP CLEANING"}</p>
              <p>{Location.state?.extra.PT && "PREPAID REFUEL"}</p>
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
      </div> */}
      <div className="BackImagetwo d-md-none d-block" style={{marginBottom:"350px"}}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "40px",}}>
          RESERVATION
        </h1>
        <div
          className="row justify-content-center"
          style={{ padding: "20px", height: "500px" }}
        >
          <div
            className="col-md-3"
            style={{ backgroundColor: "red", margin: "20px" }}
          >
            <h3>Your itinerary</h3>
            <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
            <p>{Location.state.data.data.check}</p>
            <p>{Location.state.data.data.pickDate}</p>
            <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
            <p>{Location.state.data.data.drop}</p>
            <p>{Location.state.data.data.returnDate}</p>
          </div>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#fff", margin: "20px" }}
          >
            <h3>Select Vehicles</h3>
            <h6 style={{ fontWeight: "bold" }}>Type</h6>
            <p>{Location.state?.data.car?.name}</p>
            <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
            <p>{Location.state?.extra.D1 && "Driver 1"}</p>
            <p>{Location.state?.extra.D2 && "Driver 2"}</p>
            <p>{Location.state?.extra.PT && "POST TRIP CLEANING"}</p>
            <p>{Location.state?.extra.PT && "PREPAID REFUEL"}</p>
          </div>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#fff", margin: "20px" }}
          >
            <h3>Reserve You Vehicle</h3>
            <h6 style={{ fontWeight: "bold" }}>Your Information</h6>
            <p>--</p>
            <h6 style={{ fontWeight: "bold" }}>Payment Information</h6>
            <p>--</p>
          </div>
        </div>
      </div>
      <div className="BackImagetwo d-md-block d-none" >
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "40px",}}>
          RESERVATION
        </h1>
        <div
          className="row justify-content-center"
          style={{ padding: "20px", height: "500px" }}
        >
          <div
            className="col-md-3"
            style={{ backgroundColor: "red", margin: "20px" }}
          >
            <h3>Your itinerary</h3>
            <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
            <p>{Location.state.data.data.check}</p>
            <p>{Location.state.data.data.pickDate}</p>
            <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
            <p>{Location.state.data.data.drop}</p>
            <p>{Location.state.data.data.returnDate}</p>
          </div>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#fff", margin: "20px" }}
          >
            <h3>Select Vehicles</h3>
            <h6 style={{ fontWeight: "bold" }}>Type</h6>
            <p>{Location.state?.data.car?.name}</p>
            <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
            <p>{Location.state?.extra.D1 && "Driver 1"}</p>
            <p>{Location.state?.extra.D2 && "Driver 2"}</p>
            <p>{Location.state?.extra.PT && "POST TRIP CLEANING"}</p>
            <p>{Location.state?.extra.PT && "PREPAID REFUEL"}</p>
          </div>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#fff", margin: "20px" }}
          >
            <h3>Reserve You Vehicle</h3>
            <h6 style={{ fontWeight: "bold" }}>Your Information</h6>
            <p>--</p>
            <h6 style={{ fontWeight: "bold" }}>Payment Information</h6>
            <p>--</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarBill;
