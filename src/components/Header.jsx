import Avatar from "../assets/Avatar.svg";
const Header = () => {
  return (
    <div
      className="flex justify-end items-center gap-x-4 py-4"
      style={{ background: "#f1f2f5" }}
    >
      <div>
        <p className="font-bold">Hi, Andrew</p>
      </div>
      <div>
        {" "}
        <img src={Avatar} alt="avatar" />
      </div>
      <div>
        {" "}
        <button
          style={{
            backgroundColor: "rgba(243, 219, 212, 1)",
            color: "#ee4411",
            border: "1px solid rgba(95, 40, 22, 0.15)",
          }}
          className="w-32 rounded-md py-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
