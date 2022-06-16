import React, { useState } from "react";
import background from "../../assets/img.jpg";
import { Dropdown, Selection } from "react-dropdown-now";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
function DriverDetails({ Location }) {
  const [agree, setAgree] = useState(false);
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
  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const submit = () => {
    console.log(2);

    const templateParams = {
      FIRST: data.FIRST,
      LAST: data.LAST,
      STREET: data.STREET,
      CITY: data.CITY,
      STATE: data.STATE,
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
      <div className="row">
        <div className="col-md-12">
          <h1>CheckOut</h1>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "#eee" }} className="col-md-6">
          <div style={{ padding: "20px" }} className="row">
            <h4>{Location.state.data.car.name}</h4>
            <img
              src={Location.state.data.car.img}
              style={{ height: "200px", width: "100%", paddingTop: "20px" }}
            />
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              RATE
            </h4>
            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
                margin: "20px",
                borderRadius: "8px",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Quantity</p>
              <p style={{ fontWeight: "bold" }}>Rate</p>
              <p style={{ fontWeight: "bold" }}>Sub-Total</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "5px",
                margin: "20px",
                borderRadius: "8px",
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
                margin: "20px",
                borderRadius: "8px",
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
                margin: "20px",
                borderRadius: "8px",
              }}
            >
              <p>Quality</p>
              <p>Rate</p>
              <p>SubTotal</p>
            </div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              ADD-ONS
            </h4>

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
                  margin: '20px'
                }}
              >
                <p style={{fontWeight: 'bold'}}>Add-Ons</p>
                <p style={{fontWeight: 'bold'}}>Rate</p>
                <p style={{fontWeight: 'bold'}}>Total</p>
              </div>

              <div
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  marginBottom: "5px",
                  margin: '20px'

                }}
              >
                {Location.state.extra.D1 && (
                  <>
                    <p style={{fontWeight: 'bold'}}>Driver 1</p>
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
                  margin: '20px'

                }}
              >
                {Location.state.extra.D2 && (
                  <>
                    <p style={{fontWeight: 'bold'}}>Driver 2</p>
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
                  margin: '20px'

                }}
              >
                {Location.state.extra.PT && (
                  <>
                    <p style={{fontWeight: 'bold'}}>POST TRIP CLEANING</p>
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
                  margin: '20px'

                }}
              >
                {Location.state.extra.PR && (
                  <>
                    <p style={{fontWeight: 'bold'}}>PREPAID REFUEL</p>
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
                  margin: '20px'

                }}
              >
                <p style={{fontWeight: 'bold'}}>Add-ons Charges Rate</p>
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
              <div className="row">
                <div className="col-md-12">
                  <h4
                    style={{
                      fontWeight: "bold",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    TAXES & FEES
                  </h4>
                  <div
                    className="row"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      margin: "10px",
                    }}
                  >
                    <div className="col-md-6">
                      <p style={{fontWeight: 'bold'}}>Tax</p>
                    </div>
                    <div className="col-md-6">
                      <p>$ {Location.state.charges.tax} </p>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      margin: "10px",
                    }}
                  >
                    <div className="col-md-6">
                      <p style={{fontWeight: 'bold'}}>Admin Fee</p>
                    </div>
                    <div className="col-md-6">
                      <p>$ {Location.state.charges.fees}</p>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      margin: "10px",
                    }}
                  >
                    <div className="col-md-6">
                      <p style={{fontWeight: 'bold'}}>Pickup Charges</p>
                    </div>
                    <div className="col-md-6">----</div>
                  </div>
                  <div
                  className="row"
                  style={{
                    backgroundColor: "white",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <div className="col-md-6">
                    <p style={{fontWeight: 'bold'}}>Estimated total</p>
                  </div>
                  <div className="col-md-6">
                    <p>$ {Location.state.total}</p>
                  </div>
                </div>
                </div>

  
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div
          className="detail col-md-6"
          style={{ backgroundColor: "#eee", padding: "70px" }}
        >
          <h4 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            DRIVER DETAILS
          </h4>
          <div className="row">
            <div className="col-md-6">
              <p>FIRST NAME *</p>
              <input
                type="text"
                class="form-control"
                id="FIRST"
                value={data.FIRST}
                onChange={(e) => handle(e)}
              />
            </div>
            <div className="col-md-6">
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
          <div className="row">
            <div className="col-md-12">COUNTRY / REGION United States (US)</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>STREET ADDRESS *</div>
              <input
                type="text"
                class="form-control"
                style={{ width: "100%" }}
                id="STREET"
                value={data.STREET}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>TOWN / CITY *</div>
              <input
                type="text"
                class="form-control"
                style={{ width: "100%" }}
                id="CITY"
                value={data.CITY}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>PHONE *</div>
              <input
                type="text"
                class="form-control"
                style={{ width: "100%" }}
                id="PHONE"
                value={data.PHONE}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>EMAIL ADDRESS *</div>
              <input
                type="text"
                class="form-control"
                style={{ width: "100%" }}
                id="EMAIL"
                value={data.EMAIL}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <h4 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              DRIVER INFORMATION
            </h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>DRIVING LICENSE* (REQUIRED) </div>
              <input
                type="text"
                class="form-control"
                style={{ width: "100%" }}
                id="LICENSE"
                value={data.LICENSE}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>EXPIRY DATE* (REQUIRED)</p>
              <input
                type="datetime-local"
                id="EXPIRY"
                value={data.EXPIRY}
                onChange={(e) => handle(e)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <p>DATE OF BIRTH* (REQUIRED)</p>
              <input
                type="datetime-local"
                id="BIRTH"
                value={data.BIRTH}
                onChange={(e) => handle(e)}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              INSURANCE INFORMATION
            </h4>
            <div className="row">
              <div className="col-md-6">
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="INSURANCEBIRTH"
                  value={data.INSURANCEBIRTH}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              ADDITIONAL DRIVER
            </h4>
            <h5>Driver 1</h5>
            <div className="row">
              <div className="col-md-6">
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="ADDITIONALDRIVEREXPIRY"
                  value={data.ADDITIONALDRIVEREXPIRY}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-12">
                <label>MAILING ADDRESS </label>
                <input
                  type="text"
                  class="form-control"
                  style={{ width: "100%" }}
                  id="MAILING"
                  value={data.MAILING}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>CITY</p>
                <input
                  type="text"
                  class="form-control"
                  id="CITYDRIVER"
                  value={data.CITYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>PHONE</p>
                <input
                  type="text"
                  class="form-control"
                  id="PHONEDRIVER"
                  value={data.PHONEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>DRIVING LICENSE</p>
                <input
                  type="text"
                  class="form-control"
                  id="LICENSEDRIVER"
                  value={data.LICENSEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>EXPIRY DATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="EXPIRYDRIVER"
                  value={data.EXPIRYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <h5 style={{ marginTop: "20px" }}>Driver 2</h5>
            <div className="row">
              <div className="col-md-6">
                <p>EXPIRY DATE* (REQUIRED)</p>
                <input
                  type="text"
                  class="form-control"
                  id="EXPIRYDATEDRIVER"
                  value={data.EXPIRYDATEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-12">
                <label>MAILING ADDRESS </label>
                <input
                  type="text"
                  class="form-control"
                  style={{ width: "100%" }}
                  id="MAILINGADDRESSDRIVER"
                  value={data.MAILINGADDRESSDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>CITY</p>
                <input
                  type="text"
                  class="form-control"
                  id="CITYDRIVER"
                  value={data.CITYDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>PHONE</p>
                <input
                  type="text"
                  class="form-control"
                  id="PHONEADDDRIVER"
                  value={data.PHONEADDDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>DRIVING LICENSE</p>
                <input
                  type="text"
                  class="form-control"
                  id="DRIVINGLICENSEDRIVER"
                  value={data.DRIVINGLICENSEDRIVER}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-6">
                <p>EXPIRY DATE</p>
                <input
                  type="text"
                  class="form-control"
                  id="MoreExpiryDate"
                  value={data.MoreExpiryDate}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
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
          <div className="row">
            <div className="col-md-12">
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
          </div>
          <div className="row" style={{ margin: "20px" }}>
            <div className="col-md-1">
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
            </div>
            <div className="col-md-8">
              <label htmlFor="agree">
                {" "}
                I Agree to <a href="">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <div style={{ borderBottomColor: "red", borderBottomWidth: "1px" }}>
            <button
              disabled={!agree}
              onClick={submit}
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
