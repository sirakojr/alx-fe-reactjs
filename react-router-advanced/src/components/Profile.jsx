import { Route, Routes, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <>
      <div>
        <h2>Profile Page</h2>
        <nav>
          <Link to="details">Detail</Link>
          <Link to="settings">Setting</Link>
        </nav>

        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </>
  );
};

export default Profile;
