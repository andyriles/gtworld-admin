import Logo from "../assets/gtb-logo.svg";
import PropTypes from "prop-types";
import Accounts from "../assets/Accounts.svg";
import BottomLogo from "../assets/gtb_footer.svg";
import Profile from "../assets/Profile.svg";
import Reports from "../assets/Reports.svg";
import Settings from "../assets/settings.svg";

function Sidenav({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pr-4 ">
        {/* Page content here */}
        <div>{children}</div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side" style={{ backgroundColor: "#444444" }}>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-screen text-base-content text-white flex flex-col">
          {/* Sidebar content here */}
          <div className="flex flex-col items-center justify-center -mt-12">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div className="-mt-12 font-extrabold text-lg">
              <p>Cheque</p>
              <p>Deposits</p>
            </div>
          </div>
          <li
            className="mt-24 py-1 pl-4 w-full rounded-md text-sm"
            style={{
              border: "1px solid #FF814B",
              backgroundColor: "#5C5C5C",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img src={Profile} alt="Cheque deposits" className="mr-8" />
              Cheque Deposits
            </span>
          </li>
          <li
            className="mt-2 py-1 pl-4 w-full rounded-md text-sm"
            style={{
              backgroundColor: "#5C5C5C",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img
                src={Accounts}
                alt="Cheque deposits"
                className=""
                style={{ marginRight: "27px" }}
              />
              Accounts
            </span>
          </li>
          <li
            className="mt-2 py-1 pl-4 w-full rounded-md text-sm"
            style={{
              backgroundColor: "#5C5C5C",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img src={Reports} alt="Cheque deposits" className="mr-8" />
              Reports
            </span>
          </li>
          <li
            className="mt-20 py-1 pl-4 w-full rounded-md text-sm"
            style={{
              backgroundColor: "#5C5C5C",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img src={Settings} alt="Cheque deposits" className="mr-8" />
              Settings
            </span>
          </li>
        </ul>
        <div className="-mt-56 flex ">
          <div>
            <img src={BottomLogo} alt="bottom Logo" />
          </div>
          <div className="text-white flex items-end -ml-16">
            <small>C. 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
}
Sidenav.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Sidenav;
