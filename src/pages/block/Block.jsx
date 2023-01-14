import React, { useEffect, useState } from "react";
import BlockChart from "./components/BlockChart";
import BlockTable from "./components/BlockTable";
import ContentsTitle from "../common/components/ContentsTitle.js";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
const Block = () => {
  const [data, setData] = useState([]);
  const isDark = useRecoilValue(getTheme);
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
      {/* <ContentsTitle /> */}
      <div className="maginBw100">
        <BlockChart data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100">
        <BlockTable data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default Block;
