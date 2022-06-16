import React from "react";
import "./Car.css";
import background from "../../assets/img.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function Cars() {
  const navigate = useNavigate();

  const Location = useLocation();
  const [cars, setCars] = React.useState([
    {
      name: "Alfa-romeo Stelvio 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img:"https://images.turo.com/media/vehicle/images/ekRbolpySUCSjTq9Eft08A.1460x780.jpg",
      Total: Location.state.duration * 145,
    },
    {
      name: "Audi Q7 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/8pSlk-iJQZe4E2WaD7XCYA.2880x1400.jpg",
      Total: Location.state.duration * 89,
    },
    {
      name: "Mercedes-Benz C-Class 2016",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/spMPuyjKSauS3KrpUrGGLA.2880x1400.jpg",
      Total: Location.state.duration * 76,
    },
    {
      name: "Maserati Ghibli 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/Cwd3Zks5QpuLbPI1BNmetw.2880x1400.jpg",
      Total: Location.state.duration * 115,
    },
    {
      name: "Audi A5 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/fXQAD1jXQ5iMUTXF0yA2CA.2880x1400.jpg",
      Total: Location.state.duration * 77,
    },
    {
      name: "Maserati Ghibli 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/M8E7WRFpQWSham4oYu1Dng.2880x1400.jpg",
      Total: Location.state.duration * 115,
    },
    {
      name: "Jaguar XE 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/9UxzSHzTRrOfPvjU59tKgw.2880x1400.jpg",
      Total: Location.state.duration * 79,
    },
    {
      name: "Acura TLX 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/-VYmtYCxShCfADp3tLNUZg.2880x1400.jpg",
      Total: Location.state.duration * 59,
    },
    {
      name: "Mercedes-benz E-Class 2020",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/2ZcM-c-fQ6yBD3U_k6lKDQ.2880x1400.jpg",
      Total: Location.state.duration * 96,
    },
    {
      name: "Alfa-romeo Stelvio 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/yvm6bbCVR2yRB7Dsuy6iOQ.2880x1400.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "Alfa-romeo Giulia 2020",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/yZ8e35vAQJ-ftJ60ME6cHQ.2880x1400.jpg",
      Total: Location.state.duration * 84,
    },
    {
      name: "Alfa-romeo Giulia 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/wyENFvDZQ2SWAEwKBqH70Q.2880x1400.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "Alfa-romeo Giulia 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/GJz1UJo8QXq2LzkLbuArHw.2880x1400.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "Porsche Macan 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/CHJUUtecQtGsj6_Il8DoIg.2880x1400.jpg",
      Total: Location.state.duration * 98,
    },
    {
      name: "BMW 2 Series 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/WXHTUeI1QYOByo7RqEQPSA.2880x1400.jpg",
      Total: Location.state.duration * 86,
    },
    {
      name: "Audi A6 2017",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/Eu61Af_cTTGFk9msF_tZ4A.2880x1400.jpg",
      Total: Location.state.duration * 79,
    },
    {
      name: "BMW 3 Series 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/M8qeElCzTLqUxHYyKaKezA.2880x1400.jpg",
      Total: Location.state.duration * 69,
    },
    {
      name: "Audi Q3 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/C8vFrThSTmOGKQ6GbpmW-Q.2880x1400.jpg",
      Total: Location.state.duration * 80,
    },
    {
      name: "Infiniti QX50 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/DetNJCB8RFaCnEES3i-vEA.2880x1400.jpg",
      Total: Location.state.duration * 85,
    },
    {
      name: "Lexus GX 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/8ngyTdZ6QbiW3tbgcoJl0g.2880x1400.jpg",
      Total: Location.state.duration * 99,
    },
    {
      name: "BMW 3 Series 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/GMd2U8H-Ta25xg_EusWcAA.2880x1400.jpg",
      Total: Location.state.duration * 71,
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
      <div className="scrolloff">
        <div className="container-car">
          <div className="BackImage" >
            <h1
              style={{ color: "white", textAlign: "center", paddingTop: "40px" }}
            >
              RESERVATION
            </h1>
            <div className="row justify-content-center" style={{ padding: "20px", }}>
              <div className="col-md-3" style={{ backgroundColor: "red", margin: '20px', padding: '20px', borderRadius: '12px' }}>
                <h3>Your itinerary</h3>
                <h6 style={{ fontWeight: "bold" }}>PICK UP</h6>
                <p>{Location.state.data.check}</p>
                <p>{Location.state.data.pickDate}</p>
                <h6 style={{ fontWeight: "bold" }}>Drop Date</h6>
                <p>{Location.state.data.drop}</p>
                <p>{Location.state.data.returnDate}</p>
              </div>
              <div className="col-md-3" style={{ backgroundColor: "#fff", margin: '20px', padding: '20px', borderRadius: '12px' }}>
                <h3>Select Vehicles</h3>
                <h6 style={{ fontWeight: "bold" }}>Type</h6>
                <p>--</p>
                <h6 style={{ fontWeight: "bold" }}>Add Ons</h6>
                <p>--</p>
              </div>
              <div className="col-md-3" style={{ backgroundColor: "#fff", margin: '20px', padding: '20px', borderRadius: '12px' }}>
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
            <h1 className="SelectVehicleHeading">SELECT VEHICLE/ADD-ONS</h1>
          </div>
          <div style={{ width: "80%", margin: "20px auto"}}>
            {cars.map((val) => (
              <div className="row justify-content-center carddeco shadow">
                <img
                  src={val.img}
                  style={{ padding: "20px"}}
                  className="col-md-3"
                />
                <div style={{ margin: "20px"}} className="col-md-4">
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

                <div style={{ margin: "20px"}} className='col-md-4'>
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
