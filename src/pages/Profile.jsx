
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    let loggedUser = JSON.parse(
      localStorage.getItem("user")
    );

    // If user is not found, create a fake one
    if (!loggedUser) {

      loggedUser = {

        id: 1,

        fullName: "Nikitha",

        email: "nikitha@gmail.com",

        phone: "9876543210",

        address: "Vijayawada"

      };

      localStorage.setItem(
        "user",
        JSON.stringify(loggedUser)
      );

    }

    setUser(loggedUser);

  }, []);

  if (!user) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">

          <FaUserCircle size={90} />

        </div>

        <h2>{user.fullName}</h2>

        <p>📧 {user.email}</p>

        <p>📞 {user.phone}</p>

        <p>🏠 {user.address}</p>

      </div>

    </div>

  );

}

export default Profile;
