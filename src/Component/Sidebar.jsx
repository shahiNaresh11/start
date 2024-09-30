import { Link } from "react-router-dom";
import { HiChartPie } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";

function Sidebar() {
  return (
    <div
      className="sidebar-container d-flex flex-column"
      style={{
        width: '250px',
        height: '100vh', // Full viewport height
        backgroundColor: '#982929',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Stronger box shadow for more depth
        padding: '20px', // Space around content
      }}
    >
      {/* Sidebar links */}
      <div
        className="menu-items d-flex flex-column"
        style={{
          gap: '50px', // Gap between list items set to 5px
          marginTop: '130px', // List items start from 13% of the top
        }}
      >
        <Link
          to="/dashboard"
          className="text-decoration-none fs-6 fw-bold d-flex align-items-center"
          style={{ color: 'white' }}
        >
          <HiChartPie size="24px" style={{ marginRight: '12px' }} />
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="text-decoration-none fs-6 fw-bold d-flex align-items-center"
          style={{ color: 'white' }}
        >
          <CgProfile size="24px" style={{ marginRight: '12px' }} />
          My Profile
        </Link>
        <Link
          to=""
          className="text-decoration-none fs-6 fw-bold d-flex align-items-center"
          style={{ color: 'white' }}
        >
          <RiLockPasswordFill size="24px" style={{ marginRight: '12px' }} />
          Change Password
        </Link>
        <Link
          to="/family"
          className="text-decoration-none fs-6 fw-bold d-flex align-items-center"
          style={{ color: 'white' }}
        >
          <MdFamilyRestroom size="24px" style={{ marginRight: '12px' }} />
          My Family
        </Link>
      </div>

      {/* Footer at the bottom of the sidebar (optional) */}
      <div
        className="sidebar-footer mt-auto text-center"
        style={{ color: 'gray', fontSize: '14px' }}
      >
        &copy; 2024 Your App
      </div>
    </div>
  );
}

export default Sidebar;
