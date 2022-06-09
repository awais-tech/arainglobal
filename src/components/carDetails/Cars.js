import React from "react";
import "./Car.css";
import background from "../../assets/img.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function Cars() {
  const navigate = useNavigate();

  const Location = useLocation();
  const [cars, setCars] = React.useState([
    {
      name: "ACURA TLX 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      Total: Location.state.duration * 522.94,
    },
    {
      name: "ACURA TLX 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      Total: Location.state.duration * 522.94,
    },
    {
      name: "ACURA TLX 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      Total: Location.state.duration * 522.94,
    },
  ]);
  const submit = (val) => {
    navigate("/VhicleAdd", {
      state: {
        data: Location.state.data,
        car: val,
        duration: Location.state.duration,
      },
    });
  };

  console.log(Location.state.data.check);
  return (
    <>
      <div>
        <div className="container-car">
          {/* <img style={{ width: "100%", height: "80vh" }} src={background} /> */}
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
          <div className="BottomCard">
          <div>
            <h1 style={{padding: '20px'}}>SELECT VEHICLE/ADD-ONS</h1>
          </div>
          <div style={{ width: "100%", margin: "20px" }}>
            {cars.map((val) => (
              <div className="row justify-content-center">
                <img
                  src={background}
                  style={{ padding: "20px"}}
                  className="col-md-3"
                />
                <div style={{ margin: "20px"}} className="col-md-3">
                  <div className="row">
                  <p style={{ fontWeight: "bold" }} className="col-sm-8">
                    {val.name}
                  </p>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      flexDirection: "row",
                      // width: "80%",
                    }}
                    className="row"
                  >
                    <p className="col-md-3">{val.seats}</p>
                    <p className="col-md-3">{val.doors}</p>
                    <p className="col-md-3">{val.miles}</p>
                  </div>
                  </div>
                </div>

                <div style={{ margin: "20px"}} className='col-md-3'>
                  <p>$ {val.Total}/Total</p>

                  <button
                    onClick={() => submit(val)}
                    type="button"
                    class="btn btn-danger "
                    style={{ padding: 10 }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
        {/* <div className="d-md-block d-none">
          <h1
            style={{ color: "white", textAlign: "center", marginTop: "20px" }}
          >
            RESERVATION
          </h1>
          <div className="threebox row" style={{ flex: 1, padding: "20px" }}>
            <div
              className="box col-md-4"
              style={{ flex: 1, backgroundColor: "red" }}
            >
              <h3>Your itinerary</h3>
              <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
              <p>{Location.state.data.check}</p>
              <p>{Location.state.data.pickDate}</p>
              <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
              <p>{Location.state.data.drop}</p>
              <p>{Location.state.data.returnDate}</p>
            </div>
            <div
              className="box col-4"
              style={{ flex: 1, backgroundColor: "#fff" }}
            >
              <h3>Select Vehicles</h3>
              <h6 style={{ fontWeight: "bold" }}>Type</h6>
              <p>--</p>
              <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
              <p>--</p>
            </div>
            <div className="box col-4 " style={{ backgroundColor: "#fff" }}>
              <h3>Reserve You Vehicle</h3>
              <h6 style={{ fontWeight: "bold" }}>Your Information</h6>
              <p>--</p>
              <h6 style={{ fontWeight: "bold" }}>Payment Information</h6>
              <p>--</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Cars;
