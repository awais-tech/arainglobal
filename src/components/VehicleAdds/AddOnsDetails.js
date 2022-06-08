import React from "react";
import background from "../../assets/img.jpg";
import "./AddOns.css";
import { useNavigate } from "react-router-dom";

function AddOnsDetails({ data }) {
  const navigate = useNavigate();
  const [total, setTotal] = React.useState(0);
  const [totalCharges, setTotalCharges] = React.useState(0);
  const [charges, setCharges] = React.useState({
    tax: parseInt(data.state.car.Total / 12),
    fees: 31.4,
  });
  const [extra, setExtra] = React.useState({ D1: "", D2: "", PT: "", PR: "" });

  const submit = () => {
    navigate("/FinalForm", {
      state: {
        data: data?.state,
        total,
        totalCharges,
        charges,
        extra,
        duration: data.state.duration,
      },
    });
  };
  React.useEffect(() => {
    setTotal(charges.tax + charges.fees + data.state.car.Total);
  }, []);
  const add = (name, rate) => {
    setExtra({ ...extra, [name]: rate });
    setTotalCharges(totalCharges + rate);
    setTotal(total + rate);
  };
  return (
    <>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
          margin: 40,
        }}
      >
        <h1>VEHICLE ADD-ONS</h1>
       
      </div>
      <div
      className="row"
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          display: "flex",
          margin: 40,
        }}
      >
        <div style={{ flexDirection: "column" }} className="col-lg-6">
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
              backgroundColor: "#eee",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid red",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={background}
                style={{ height: "100px", width: "100px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h4>ADDITIONAL DRIVER 2</h4>
                <p>15$ will be charged per additional driver</p>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => add("D1", 15)}
              >
                ADD
              </button>
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
              backgroundColor: "#eee",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid red",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={background}
                style={{ height: "100px", width: "100px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h4>ADDITIONAL DRIVER 2</h4>
                <p>15$ will be charged per additional driver</p>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => add("D2", 15)}
              >
                ADD
              </button>
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
              backgroundColor: "#eee",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid red",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={background}
                style={{ height: "100px", width: "100px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h4>POST TRIP CLEANING</h4>
                <p>
                  Return the car hassle free, without worrying about cleaning up
                  after your trip. Does not cover upholstery cleaning, spills,
                  stains, pet hair, or smoke removal. $55/trip
                </p>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => add("PT", 20)}
              >
                ADD
              </button>
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
              backgroundColor: "#eee",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid red",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={background}
                style={{ height: "100px", width: "100px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h4>PREPAID REFUEL</h4>
                <p>
                  Save time, make drop-off a breeze, and avoid additional fees
                  by adding this Extra, which allows you to return my car at any
                  fuel level. Price includes up to a full tank of gas. $60/trip
                </p>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => add("PR", 15)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <div
          className="detail col-lg-6"
          style={{ backgroundColor: "#eee", padding: "40px" }}
        >
          <h3>{data.state.car.name}</h3>
          <img src={background} style={{ height: "200px", width: "300px" }} />
          <h3 style={{ margin: "10px" }}>RATE</h3>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Quality</p>
              <p>Rate</p>
              <p>SubTotal</p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>{data.state.duration} Days</p>
              <p>$ {data.state.car.Total / data.state.duration}</p>
              <p>$ {data.state.car.Total}</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Rental Charges Rate</p>
              <p>$ {data.state.car.Total}</p>
            </div>
          </div>
          <h3 style={{ marginTop: "20px" }}>ADD-ONS</h3>

          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Quality</p>
              <p>Rate</p>
              <p>SubTotal</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              {extra.D1 && (
                <>
                  <p>Driver 1</p>
                  <p>$ {extra.D1}</p>
                  <p>$ {extra.D1}</p>
                </>
              )}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              {extra.D2 && (
                <>
                  <p>Driver 2</p>
                  <p>$ {extra.D2}</p>
                  <p>$ {extra.D2}</p>
                </>
              )}
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              {extra.PT && (
                <>
                  <p>POST TRIP CLEANING</p>
                  <p>$ {extra.PT} </p>
                  <p>$ {extra.PT}</p>
                </>
              )}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              {extra.PR && (
                <>
                  <p>PREPAID REFUEL</p>
                  <p>$ {extra.PR} </p>
                  <p>$ {extra.PR}</p>
                </>
              )}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Add-ons Charges Rate</p>
              <p>{totalCharges}</p>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <h3 style={{ marginTop: "20px" }}>TAXES & FEES</h3>

            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Tax</p>
              <p>$ {charges.tax} </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Admin Fee</p>
              <p>$ {charges.fees}</p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <p>Pickup Charges</p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
              marginBottom: "5px",
            }}
          >
            <p>Estimated total</p>
            <p>$ {parseInt(total)}</p>
          </div>
          <button
            onClick={submit}
            type="button"
            class="btn btn-danger btn-lg btn-block mt-5"
          >
            continue
          </button>
        </div>
      </div>
    </>
  );
}

export default AddOnsDetails;
