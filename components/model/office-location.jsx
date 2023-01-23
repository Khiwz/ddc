import React from "react";

function OfficeLocation() {
  return (
    <div className="overflow-hidden h-full">
      <iframe
        title="DDC's Office Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3794.5308304245086!2d102.70743567253021!3d18.000552165437384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124678a832a5107%3A0x10709bc52cb0fd9e!2sDDC%20Group!5e0!3m2!1sth!2sla!4v1664090689984!5m2!1sth!2sla"
        className="shadow-md rounded-md w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default OfficeLocation;
