import React from "react";
import Row from "react-bootstrap/Row";
import {
  momagic,
  adGyde,
  mediatek,
  irctc,
  bailiwick,
  gonutrio,
  nmss,
  storecheq,
  switchedonkids,
  tripoffbeat,
} from "../Assets";
import EmployerItem from "./EmployerItem";

export default function Employers(props) {
  return (
    <>
      <h1 className="project-heading">
        Career <strong className="purple">Journey</strong>
      </h1>
      <h2
        className="mt-3 mb-4 h5"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        I'm proud to have collaborated with these awesome companies and worked
        on products
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <EmployerItem
          name="MoMagic Technologies Pvt. Ltd."
          logo={momagic}
          alt="MoMagic Technologies Pvt. Ltd."
        />
        <EmployerItem
          name="AdGyde Solutions Pvt. Ltd."
          logo={adGyde}
          alt="AdGyde Solutions Pvt. Ltd."
        />
        <EmployerItem
          name="MediaTek Inc."
          logo={mediatek}
          alt="MediaTek Inc."
        />
        <EmployerItem
          name="Indian Railway Catering and Tourism Corporation"
          logo={irctc}
          alt="Indian Railway Catering and Tourism Corporation"
        />
        <EmployerItem
          name="Storecheq Innovations Pvt. Ltd."
          logo={storecheq}
          alt="Storecheq Innovations Pvt. Ltd."
        />
        <EmployerItem
          name="TripOffbeat Pvt. Ltd."
          logo={tripoffbeat}
          alt="TripOffbeat Pvt. Ltd."
        />
        <EmployerItem
          name="Switchedonkids Pvt. Ltd."
          logo={switchedonkids}
          alt="Switchedonkids Pvt. Ltd."
        />
        <EmployerItem
          name="Bailiwick Solutions Pvt. Ltd."
          logo={bailiwick}
          alt="Bailiwick Solutions Pvt. Ltd."
        />
        <EmployerItem
          name="Gonutrio Pvt. Ltd."
          logo={gonutrio}
          alt="Gonutrio Pvt. Ltd."
        />
        <EmployerItem
          name="Nmss Tech Pvt. Ltd."
          logo={nmss}
          alt="Nmss Tech Pvt. Ltd."
        />
      </Row>
    </>
  );
}
