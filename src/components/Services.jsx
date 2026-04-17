import React from "react";
import Card from "./UI/Card";

function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center font-sans">
        Our services
      </h2>
      <p className="text-lg text-slate-600 mb-8 w-130 mx-auto text-center">
        Expert guidance for managing funds in alignment with Islamic principles,
        helping you make informed, halal investment decisions.
      </p>
      <Card />
    </div>
  );
}

export default Services;
