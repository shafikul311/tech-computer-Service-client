import React from "react";
import cla from "../../../imageclient/Screenshot_1.png";
import cl2 from "../../../imageclient/Screenshot_2.png";
import cl3 from "../../../imageclient/Screenshot_3.png";
import cl4 from "../../../imageclient/Screenshot_4.png";
import cl5 from "../../../imageclient/Screenshot_5.png";
import cl6 from "../../../imageclient/Screenshot_17.png";
import Logo from "./Logo";


const clientLogos = [
  {
    cImg: cla,
  },
  {
    cImg: cl2,
  },
  {
    cImg: cl3,
  },
  {
    cImg: cl4,
  },
  {
    cImg: cl5,
  },
  {
    cImg: cl6,
  },
];

const Client = () => {
  return (
    <div className="text-center">
      <h2>Our Client From</h2>
      <div className="row p-5">
        {

        clientLogos.map(client =><Logo client={client}></Logo> )

        }
      </div>
    </div>
  );
};

export default Client;