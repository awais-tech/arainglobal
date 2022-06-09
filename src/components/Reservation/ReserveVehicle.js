import React, { useState } from "react";
import "./ReserveVehicle.css";
import DateTimePicker from "react-datetime-picker";
import background from "../../assets/img.jpg";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { useNavigate } from "react-router-dom";

function ReserveVehicle() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    check: "",
    drop: "",
    pickDate: "",
    returnDate: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const submit = () => {
    console.log(data);
    const a = Date.parse(data.returnDate) - Date.parse(data.pickDate);
    const limit = parseInt(a / 1000 / 3600 / 24);
    navigate("/Cars", { state: { data, duration: limit + 1 } });
  };

  return (
    <>
      <div className="container-img">
        <img style={{ width: "100%" }} src={background} />
      </div>
      <form>
        <h1 style={{ color: "white", textAlign: "center" }}>
          RESERVE YOUR VEHICLE{" "}
        </h1>
        <div className="form">
          <div style={{ backgroundColor: "white", marginTop: 30 }}>
            <div style={{ padding: "50px" }}>
              <h3>PICK UP</h3>
              <div className="UpperCase">
                <label for="exampleFormControlSelect1">
                  PLACE TO PICK UP THE CAR*
                </label>
                <select
                  class="form-control"
                  id="check"
                  value={data.check}
                  onChange={(e) => handle(e)}
                >
                  <option value="1248 W Gray St, Houston, TX 77019, USA">
                    1248 W Gray St, Houston, TX 77019, USA{" "}
                  </option>
                  <option value="Austin Tx">Austin Tx </option>
                </select>
                <div>
                  <div className="calander">
                    <label>DROP DATE/TIME*</label>
                    <div>
                      {/* <DateTimePicker name="value" onChange={ (e) => handle(e) } value={value}  /> */}
                      <input
                        type="datetime-local"
                        id="pickDate"
                        value={data.pickDate}
                        style={{ width: '95%'}}
                        onChange={(e) => handle(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: "20px" }}>RETURN</h3>
              <div className="LowerCase">
                <label for="exampleFormControlSelect1">
                  PLACE TO DROP THE CAR*
                </label>
                <select
                  class="form-control"
                  id="drop"
                  value={data.drop}
                  onChange={(e) => handle(e)}
                >
                  <option value="1248 W Gray St, Houston, TX 77019, USA">
                    1248 W Gray St, Houston, TX 77019, USA{" "}
                  </option>
                  <option value="Austin Tx">Austin Tx </option>
                </select>
                <div>
                  <div className="calander">
                    <label>DROP DATE/TIME*</label>
                    <div>
                      <input
                        type="datetime-local"
                        id="returnDate"
                        value={data.returnDate}
                        style={{ width: '95%'}}
                        onChange={(e) => handle(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={submit}
                type="button"
                class="btn btn-danger btn-lg btn-block mt-5"
              >
                Continue Reservation
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ReserveVehicle;
