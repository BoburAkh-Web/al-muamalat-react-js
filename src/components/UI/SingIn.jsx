import React from "react";
import { Link } from "react-router-dom";

function SingIn() {
  return (
    <div>
      <Link to="/login" className="bg-teal-700 text-white px-4 py-2 rounded">
        Sign in
      </Link>
    </div>
  );
}

export default SingIn;
