import React, { useEffect, useState } from "react";
import ServiceChart from "./component/ServiceChart";
import ServiceTable from "./utils/serviceTable";
import ContentsTitle from "../common/components/ContentsTitle";
import "./CSS/Service.scss";

const Service = () => {
  //데이터 받아오기
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <ContentsTitle />
      <div className="maginBw100">
        <ServiceChart data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100">
        <ServiceTable data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default Service;
