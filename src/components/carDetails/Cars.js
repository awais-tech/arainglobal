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
      name: "FIAT 124 Spider 2020",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/nVlGf3FzQ-6Gh6GiQ4re4w.1440x700.jpg",
      Total: Location.state.duration * 72,
    },
    {
      name: "BMW X3 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/oYWwbGIoRAq745bjsHtn0A.1440x700.jpg",
      Total: Location.state.duration * 99,
    },
    {
      name: "BMW 3-Series 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/5rgXrIWySrG_U27bmW2Nfg.1440x700.jpg",
      Total: Location.state.duration * 89,
    },
    {
      name: "BMW X3 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/CZVTJlOOQSq_4NmyFNIv7g.1440x700.jpg",
      Total: Location.state.duration * 99,
    },
    {
      name: "Honda Accord Sedan 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/3Tm6VE4DQRmwlcdWn0ZWsQ.1440x700.jpg",
      Total: Location.state.duration * 56,
    },
    {
      name: "BMW 3-Series 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/uF0PYB5KS_uUgomhySNinQ.1440x700.jpg",
      Total: Location.state.duration * 89,
    },
    {
      name: "Mercedes-benz C-Class 2019",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/jMLXGei1STW9JWrsL7VNMw.1440x700.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "Mercedes-benz C-Class 2019",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/iDae_e6pSWGn6W_Pqix0oA.1440x700.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "Volkswagen Atlas Cross Sport 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/EisXcti3Ri6I_9fHsbYtjQ.1440x700.jpg",
      Total: Location.state.duration * 87,
    },
    {
      name: "Chevrolet Corvette 2021",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/WpTyxomqSQeJPxHwUzmF5w.1440x700.jpg",
      Total: Location.state.duration * 229,
    },
    {
      name: "Audi A5 2018",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/DUL9v-YzSlqQYWYLnyD2gw.1440x700.jpg",
      Total: Location.state.duration * 75,
    },
    {
      name: "Honda Accord Sedan 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/vnTQU_PBRcabxJCbekb2pA.1440x700.jpg",
      Total: Location.state.duration * 57,
    },
    {
      name: "Mercedes-benz C-Class 2019",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/YoYP2L8VRUu5DcrsIk8kmw.1440x700.jpg",
      Total: Location.state.duration * 82,
    },
    {
      name: "BMW Z4 2019",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/bl8cwjQbTKuW4lrZF3zjcw.1440x700.jpg",
      Total: Location.state.duration * 87,
    },
    {
      name: "Honda Accord Sedan 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/vnTQU_PBRcabxJCbekb2pA.1440x700.jpg",
      Total: Location.state.duration * 57,
    },
    {
      name: "Mercedes-benz Glb-Class 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/2S_pLTjFQz6Ow-IHROqmiA.1440x700.jpg",
      Total: Location.state.duration * 99,
    },
    {
      name: "Mercedes-benz GLE-Class 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/4BPAyNwqQGis-JHD2CRHlw.1440x700.jpg",
      Total: Location.state.duration * 119,
    },
    {
      name: "Mazda Cx-30 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/orzOpecFRDC5SshKztfJ9g.1440x700.jpg",
      Total: Location.state.duration * 63,
    },
    {
      name: "Mazda Cx-30 2022",
      seats: "5 SEATS",
      doors: "4 DOORS",
      miles: "200MILES PER DAY",
      img: "https://images.turo.com/media/vehicle/images/bKQ8hsgSSdu91o42sS9iMQ.1440x700.jpghttps://images.turo.com/media/vehicle/images/2S_pLTjFQz6Ow-IHROqmiA.1440x700.jpg",
      Total: Location.state.duration * 67,
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
