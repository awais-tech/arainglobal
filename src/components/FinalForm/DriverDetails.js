import React, { useState } from "react";
import background from "../../assets/img.jpg";
import { Dropdown, Selection } from "react-dropdown-now";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
function DriverDetails({ Location }) {
  const [data, setData] = useState({
    FIRST: "",
    LAST: "",
    STREET: "",
    CITY: "",
    STATE: "",
    PHONE: "",
    EMAIL: "",
    LICENSE: "",
    EXPIRY: "",
    BIRTH: "",
    INSURANCEBIRTH: "",
    INSURANCEBIRTHD: "",
    ADDITIONALDRIVEREXPIRY: "",
    ADDITIONALDRIVERBIRTH: "",
    MAILING: "",
    CITYDRIVER: "",
    STATEDRIVER: "",
    PHONEDRIVER: "",
    EMAILDRIVER: "",
    LICENSEDRIVER: "",
    STATEDRIVER: "",
    EXPIRYDRIVER: "",
    BIRTHDRIVER: "",
    EXPIRYDATEDRIVER: "",
    DATEOFBIRTHDRIVER: "",
    MAILINGADDRESSDRIVER: "",
    CITYDRIVER: "",
    STATEZIPDRIVER: "",
    PHONEADDDRIVER: "",
    EMAILADDDRIVER: "",
    DRIVINGLICENSEDRIVER: "",
    STATELICENSEDRIVER: "",
    MoreExpiryDate: "",
    MoreBirthDate: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const submit = () => {
    console.log(data);
    const templateParams = {
      FIRST: data.FIRST,
      LAST: data.LAST,
      STREET: data.STREET,
      CITY: data.CITY,
      STATE: data.state,
      PHONE: data.PHONE,
      EMAIL: data.EMAIL,
      LICENSE: data.LICENSE,
      EXPIRY: data.EXPIRY,
      BIRTH: data.BIRTH,
      INSURANCEBIRTH: data.INSURANCEBIRTH,
      INSURANCEBIRTHD: data.INSURANCEBIRTHD,
      ADDITIONALDRIVEREXPIRY: data.ADDITIONALDRIVEREXPIRY,
      ADDITIONALDRIVERBIRTH: data.ADDITIONALDRIVERBIRTH,
      MAILING: data.MAILING,
      CITYDRIVER: data.CITYDRIVER,
      STATEDRIVER: data.STATEDRIVER,

      PHONEDRIVER: data.PHONEADDDRIVER,
      EMAILDRIVER: data.EMAILADDDRIVER,
      LICENSEDRIVER: data.LICENSEDRIVER,
      EXPIRYDRIVER: data.EXPIRYDATEDRIVER,
      BIRTHDRIVER: data.BIRTHDRIVER,
      EXPIRYDATEDRIVER: data.EXPIRYDATEDRIVER,
      DATEOFBIRTHDRIVER: data.DATEOFBIRTHDRIVER,
      MAILINGADDRESSDRIVER: data.MAILINGADDRESSDRIVER,

      STATEZIPDRIVER: data.STATEZIPDRIVER,
      PHONEADDDRIVER: data.PHONEADDDRIVER,
      EMAILADDDRIVER: data.EMAILADDDRIVER,
      DRIVINGLICENSEDRIVER: data.DRIVINGLICENSEDRIVER,
      STATELICENSEDRIVER: data.STATELICENSEDRIVER,
      MoreExpiryDate: data.MoreExpiryDate,
      MoreBirthDate: data.MoreBirthDate,
    };

    emailjs.send(
      "service_2mv4j9e",
      "template_icj8p8g",
      templateParams,
      "user_nTKjuIlQSnd7ZNqLkVb17"
    );
    Swal.fire("Your Booking Request Has been Submited");
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
        <h1>CheckOut</h1>
        <input style={{ height: "30px" }} class="form-control" type="text" />
      </div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          display: "flex",
          margin: 40,
        }}
      >
        <div style={{ backgroundColor: "#eee" }}>
          <div style={{ padding: "20px" }}>
            <h4>{Location.state.data.car.name}</h4>
            <img
              src={background}
              style={{ height: "200px", width: "350px", paddingTop: "20px" }}
            />
            <h2>RATE</h2>
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
              <p>Qty</p>
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
              <p>{Location.state.duration} Days</p>
              <p>{Location.state.data.car.Total / Location.state.duration}</p>
              <p>$ {Location.state.data.car.Total}</p>
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
              <p>$ {Location.state.data.car.Total}</p>
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
              <p>Quality</p>
              <p>Rate</p>
              <p>SubTotal</p>
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
                {Location.state.extra.D1 && (
                  <>
                    <p>Driver 1</p>
                    <p>$ {Location.state.extra.D1}</p>
                    <p>$ {Location.state.extra.D1}</p>
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
                {Location.state.extra.D2 && (
                  <>
                    <p>Driver 2</p>
                    <p>$ {Location.state.extra.D2}</p>
                    <p>$ {Location.state.extra.D2}</p>
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
                {Location.state.extra.PT && (
                  <>
                    <p>POST TRIP CLEANING</p>
                    <p>$ {Location.state.extra.PT} </p>
                    <p>$ {Location.state.extra.PT}</p>
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
                {Location.state.extra.PR && (
                  <>
                    <p>PREPAID REFUEL</p>
                    <p>$ {Location.state.extra.PR} </p>
                    <p>$ {Location.state.extra.PR}</p>
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
                <p>{Location.state.totalCharges}</p>
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
                <p>$ {Location.state.charges.tax} </p>
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
                <p>$ {Location.state.charges.fees}</p>
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
              <p>$ {Location.state.total}</p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div
          className="detail"
          style={{ backgroundColor: "#eee", padding: "70px" }}
        >
          <h4>DRIVER DETAILS</h4>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <div style={{ flexDirection: "column" }}>
              <p>FIRST NAME *</p>
              <input
                type="text"
                class="form-control"
                id="FIRST"
                value={data.FIRST}
                onChange={(e) => handle(e)}
              />
            </div>
            <div style={{ flexDirection: "column" }}>
              <p>LAST NAME *</p>
              <input
                type="text"
                class="form-control"
                id="LAST"
                value={data.LAST}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div>COUNTRY / REGION United States (US)</div>
          <div>STREET ADDRESS *</div>
          <input
            type="text"
            class="form-control"
            style={{ width: "110%" }}
            id="STREET"
            value={data.STREET}
            onChange={(e) => handle(e)}
          />
          <div>TOWN / CITY *</div>
          <input
            type="text"
            class="form-control"
            style={{ width: "110%" }}
            id="CITY"
            value={data.CITY}
            onChange={(e) => handle(e)}
          />
          <div>STATE *</div>
          <select
            class="form-control"
            id="STATE"
            value={data.STATE}
            onChange={(e) => handle(e)}
          >
            <option value="1248 W Gray St, Houston, TX 77019, USA">
              1248 W Gray St, Houston, TX 77019, USA{" "}
            </option>
            <option value="1248 W Gray St, Houston, TX 77019, USA">
              1248 W Gray St, Houston, TX 77019, USA{" "}
            </option>
          </select>
          <div>PHONE *</div>
          <input
            type="text"
            class="form-control"
            style={{ width: "110%" }}
            id="PHONE"
            value={data.PHONE}
            onChange={(e) => handle(e)}
          />
          <div>EMAIL ADDRESS *</div>
          <input
            type="text"
            class="form-control"
            style={{ width: "110%" }}
            id="EMAIL"
            value={data.EMAIL}
            onChange={(e) => handle(e)}
          />

          <div>
            <h2>DRIVER INFORMATION</h2>
          </div>
          <div>DRIVING LICENSE* (REQUIRED) </div>
          <input
            type="text"
            class="form-control"
            style={{ width: "110%" }}
            id="LICENSE"
            value={data.LICENSE}
            onChange={(e) => handle(e)}
          />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <div style={{ flexDirection: "column" }}>
              <p>EXPIRY DATE* (REQUIRED)</p>
              <input
                type="datetime-local"
                id="EXPIRY"
                value={data.EXPIRY}
                onChange={(e) => handle(e)}
              />
            </div>
            <div style={{ flexDirection: "column" }}>
              <p>DATE OF BIRTH* (REQUIRED)</p>
              <input
                type="datetime-local"
                id="BIRTH"
                value={data.BIRTH}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div>
            <h2>INSURANCE INFORMATION</h2>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="INSURANCEBIRTH"
                  value={data.INSURANCEBIRTH}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>DATE OF BIRTH* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="INSURANCEBIRTHD"
                  value={data.INSURANCEBIRTHD}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
          </div>

          <div>
            <h2>ADDITIONAL DRIVER</h2>
            <h2>Driver 1</h2>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="ADDITIONALDRIVEREXPIRY"
                  value={data.ADDITIONALDRIVEREXPIRY}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>DATE OF BIRTH* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="ADDITIONALDRIVERBIRTH"
                  value={data.ADDITIONALDRIVERBIRTH}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <label>MAILING ADDRESS </label>
            <input
              type="text"
              class="form-control"
              style={{ width: "110%" }}
              id="MAILING"
              value={data.MAILING}
              onChange={(e) => handle(e)}
            />

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>CITY</p>
                <input
                  type="text"
                  class="form-control"
                  id="CITYDRIVER"
                  value={data.CITYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>STATE/ZIP</p>
                <input
                  type="text"
                  class="form-control"
                  id="STATEDRIVER"
                  value={data.STATEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>PHONE</p>
                <input
                  type="text"
                  class="form-control"
                  id="PHONEDRIVER"
                  value={data.PHONEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>EMAIL ADDRESS</p>
                <input
                  type="text"
                  class="form-control"
                  id="EMAILDRIVER"
                  value={data.EMAILDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>DRIVING LICENSE</p>
                <input
                  type="text"
                  class="form-control"
                  id="LICENSEDRIVER"
                  value={data.LICENSEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>STATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="STATEDRIVER"
                  value={data.STATEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>EXPIRY DATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="EXPIRYDRIVER"
                  value={data.EXPIRYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>DATE OF BIRTH</p>
                <input
                  type="text"
                  class="form-control"
                  id="BIRTHDRIVER"
                  value={data.BIRTHDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Driver 2</h2>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="EXPIRYDATEDRIVER"
                  value={data.EXPIRYDATEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>DATE OF BIRTH* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="DATEOFBIRTHDRIVER"
                  value={data.DATEOFBIRTHDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <label>MAILING ADDRESS </label>
            <input
              type="text"
              class="form-control"
              style={{ width: "110%" }}
              id="MAILINGADDRESSDRIVER"
              value={data.MAILINGADDRESSDRIVER}
              onChange={(e) => handle(e)}
            />

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>CITY</p>
                <input
                  type="text"
                  class="form-control"
                  id="CITYDRIVER"
                  value={data.CITYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>STATE/ZIP</p>
                <input
                  type="text"
                  class="form-control"
                  id="STATEZIPDRIVER"
                  value={data.STATEZIPDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>PHONE</p>
                <input
                  type="text"
                  class="form-control"
                  id="PHONEADDDRIVER"
                  value={data.PHONEADDDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>EMAIL ADDRESS</p>
                <input
                  type="text"
                  class="form-control"
                  id="EMAILADDDRIVER"
                  value={data.EMAILADDDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>DRIVING LICENSE</p>
                <input
                  type="text"
                  class="form-control"
                  id="DRIVINGLICENSEDRIVER"
                  value={data.DRIVINGLICENSEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>STATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="STATELICENSEDRIVER"
                  value={data.STATELICENSEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <p>EXPIRY DATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="MoreExpiryDate"
                  value={data.MoreExpiryDate}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div style={{ flexDirection: "column" }}>
                <p>DATE OF BIRTH</p>
                <input
                  type="text"
                  class="form-control"
                  id="MoreBirthDate"
                  value={data.MoreBirthDate}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>
          </div>
          <div>
            <>CHOOSE YOUR PICKUP LOCATION</>

            <select class="form-control">
              <option value="1248 W Gray St, Houston, TX 77019, USA">
                1248 W Gray St, Houston, TX 77019, USA{" "}
              </option>
              <option value="1248 W Gray St, Houston, TX 77019, USA">
                1248 W Gray St, Houston, TX 77019, USA{" "}
              </option>
            </select>
          </div>

          <div>
            <input
              type="radio"
              class="form-control"
              value="AUSTIN"
              name="gender"
            />{" "}
            Male
            <br></br>
            <input
              type="radio"
              class="form-control"
              value="AUSTIN"
              name="gender"
            />{" "}
            Female
          </div>
          <div>AUSTIN LOCATION CHARGES </div>
          <select class="form-control">
            <option value="1248 W Gray St, Houston, TX 77019, USA">
              1248 W Gray St, Houston, TX 77019, USA{" "}
            </option>
            <option value="1248 W Gray St, Houston, TX 77019, USA">
              1248 W Gray St, Houston, TX 77019, USA{" "}
            </option>
          </select>
          <div style={{ borderBottomColor: "red", borderBottomWidth: "1px" }}>
            <button
              onSubmit={submit}
              type="button"
              class="btn btn-danger btn-lg  mt-5"
            >
              Confirm Location Charges
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverDetails;
