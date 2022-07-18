import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logOut()  
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-semibold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <div>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-5 py-2 rounded cursor-pointer text-white"
              onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-5 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
