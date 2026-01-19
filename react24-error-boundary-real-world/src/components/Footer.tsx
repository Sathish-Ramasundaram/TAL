// import React from "react";

// function Footer() {
//   return (
//     <div style={{ background: "#dcfce7", padding: "10px" }}>
//       <h5>Contact Me: 9876786787</h5>
//     </div>
//   );
// }

// export default Footer;

// import React from "react";

// function Footer() {
//   const contact: any = undefined; // ❌ broken data

//   return (
//     <div style={{ background: "#dcfce7", padding: "10px" }}>
//       <h5>Contact Me: {contact.phone}</h5>
//     </div>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {

       
    // const contact: any = undefined; // ❌ broken data

  const contact = {
    phone: "9876786787",
  };

  return (
    <div style={{ background: "#dcfce7", padding: "10px" }}>
      <h5>Contact Me: {contact.phone}</h5>
    </div>
  );
}

export default Footer;
