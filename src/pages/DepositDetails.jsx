import { useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../assets/back-icon.svg";
import Naira from "../assets/naira.svg";
import Checkmark from "../assets/done.svg";
import Failed from "../assets/failed.svg";
import { useState } from "react";
import "./deposit-details.css";

const DepositDetails = () => {
  const navigate = useNavigate();
  const [sourceName, setSourceName] = useState("Calistus Enterprise");
  const [sourceNumber, setSourceNumber] = useState("0838847890");
  const [loading, setLoading] = useState(false);
  const [approveClicked, setApproveClicked] = useState(false);
  const [denyClicked, setDenyClicked] = useState(false);
  const [response, setResponse] = useState(null);
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const meridiem = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    return `${day}/${month}/${year} ${formattedHours}:${minutes} ${meridiem}`;
  };
  const state = useLocation();

  console.log(state.state);
  const handleNavigate = () => {
    navigate("/");
  };

  const handleAccept = () => {
    setLoading(true);
    setApproveClicked(true);
    fetch(
      `https://hackathon-production-8f50.up.railway.app/api/v1/deposits/cheque/${state.state.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Done" }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      });
  };

  const handleReject = () => {
    setDenyClicked(true);
    setLoading(true);
    fetch(
      `https://hackathon-production-8f50.up.railway.app/api/v1/deposits/cheque/${state.state.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Rejected" }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      });
  };

  return (
    <div className="mt-8 ml-8">
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : null}
      <div
        onClick={handleNavigate}
        className="fixed top-0 py-8 w-full cursor-pointer"
        style={{ backgroundColor: "#ffffff" }}
      >
        <img src={BackIcon} alt="backIcon" />
      </div>
      <h1 className="text-2xl font-bold mt-32">Confirm Details</h1>
      <div className="mt-16">
        <p>
          <span className="font-bold">Name:</span> {state.state.user.name}
        </p>
        <p>
          <span className="font-bold">Account Number:</span>{" "}
          {state.state.account_number}
        </p>
        <p>
          <span className="font-bold">Date:</span>{" "}
          {formatDateTime(state.state.date_created)}
        </p>
      </div>
      <div className="flex gap-x-8 mt-12">
        <div>
          <img
            src={state.state.front_image}
            alt="front image"
            style={{ width: "31em", height: "15em" }}
          />
          <div
            className="flex items-center justify-center mt-4 p-2"
            style={{ backgroundColor: "#E6E6E6" }}
          >
            <p>Front side of cheque</p>
          </div>
        </div>
        <div>
          <img
            src={state.state.back_image}
            alt="front image"
            style={{ width: "31em", height: "15em" }}
          />
          <div
            className="flex items-center justify-center mt-4 p-2"
            style={{ backgroundColor: "#E6E6E6" }}
          >
            <p>Back side of cheque</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-x-4 items-center">
        <p>Amount to be credited:</p>
        <div className="flex items-center w-64 border-2 rounded-md border-neutral-500 ">
          <span className="">
            <img src={Naira} alt="naira" />
          </span>
          <input
            type="text"
            placeholder="5160000"
            className="input w-full max-w-xs focus:outline-none"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-x-4 items-center ">
        <div className="bg-neutral-600 text-white py-2 px-4 rounded-md">
          <p>Withdraw Form</p>
        </div>
        <p>Account:</p>
        <input
          type="text"
          placeholder="account"
          className="input w-full max-w-xs input-bordered"
          value={sourceNumber}
          onChange={(e) => setSourceNumber(e.target.value)}
        />
        <p>Account name:</p>
        <input
          type="text"
          placeholder="account"
          value={sourceName}
          onChange={(e) => setSourceName(e.target.value)}
          className="input w-full max-w-xs input-bordered"
        />
      </div>
      <small className="pt-2">This is the account of the cheque owner</small>
      <div className="divider"></div>
      <div className="flex justify-end items-center mt-2  gap-x-8 mb-8 w-9/10">
        <button
          className="bg-white rounded-sm py-2 px-16"
          style={{ border: "1px solid #FF0000" }}
          onClick={handleReject}
        >
          Reject
        </button>
        <button
          style={{ backgroundColor: "#FB5621" }}
          className="text-white  rounded-sm py-2 px-16"
          onClick={handleAccept}
        >
          Approve
        </button>
      </div>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={!loading && approveClicked && response?.code == 200}
      />
      <div className="modal">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit has been approved
          </p>
          <p className="text-sm px-4">Customer will be credited shortly</p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Done
            </label>
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={!loading && denyClicked && response?.code == 200}
      />
      <div className="modal">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit has been rejected
          </p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_7"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Done
            </label>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="my_modal_5"
        className="modal-toggle"
        checked={!loading && approveClicked && response?.code != 200}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Failed} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit not successful, please try again later
          </p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={() => navigate("/")}
            >
              Go Home
            </label>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="my_modal_5"
        className="modal-toggle"
        checked={!loading && denyClicked && response?.code != 200}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Failed} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit not successful, please try again later
          </p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={() => navigate("/")}
            >
              Go Home
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositDetails;
