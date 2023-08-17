import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/confirm-cheque", { state: item });
  };
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://hackathon-production-8f50.up.railway.app/api/v1/deposits/cheque"
    )
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <Filters />
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
      <Table data={data} handleNavigate={handleNavigate} />
    </>
  );
};

export default HomePage;
