import React from "react";
import Row from 'react-bootstrap/Row';
import { momagic, adGyde, bailiwick, gonutrio, nmss } from "../Assets";
import EmployerItem from "./EmployerItem";

export default function Employers(props) {
  return (
    <>
      <h1 className="mt-3 mb-4 h5">
        I'm proud to have collaborated with these awesome companies
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <EmployerItem name="MoMagic" logo={momagic} alt="" />
        <EmployerItem name="AdGyde Solutions" logo={adGyde} alt="" />
        <EmployerItem name="Bailiwick Solutions" logo={bailiwick} alt="" />
        <EmployerItem name="Gonutrio" logo={gonutrio} alt="" />
        <EmployerItem name="Nmss Tech" logo={nmss} alt="" />
      </Row>
    </>
  );
}