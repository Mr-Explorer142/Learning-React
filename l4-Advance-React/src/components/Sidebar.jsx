import { FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100 me-3"
      style={{ width: "100px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li
          className="nav-item mb-3"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          {" "}
          <a
            href="#"
            className={`nav-link text-white text-center ${
              selectedTab === "Home" && "active"
            }`}
          >
            <span className="">
              <FaHome />
            </span>
            <span className="d-none d-lg-inline">Home</span>
          </a>{" "}
        </li>{" "}
        <li
          onClick={() => {
            setSelectedTab("Create Post");
          }}
        >
          {" "}
          <a
            href="#"
            className={`responsive-fs nav-link text-white text-center ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <span className="">
              <IoIosAddCircle />
            </span>
            <span className="d-none d-lg-inline">Create Post</span>
          </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Sidebar;
