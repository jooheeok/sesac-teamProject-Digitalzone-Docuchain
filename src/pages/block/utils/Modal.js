import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Modal(props) {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, data, fetchdata } = props;

  const [transNum, setTransNum] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [transDataDetail, setTransDataDetail] = useState();
  useEffect(() => {
    fetchdata();
  }, []);

  //useParams
  const { id } = useParams();

  //state에 데이터 저장
  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.blockNumber == parseInt(id));

      result3.forEach((item) => {
        setTransNum(item.transNumber);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setTransSize(item.transSize);
        setTransDataDetail(item.transDataDetail);
      });
    }
    getTrans();
  });
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}

            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <h3>method : {transDataDetail.method}</h3>

            <ul>
              <h3>params : </h3>
              <li>cr_download : {transDataDetail.params.cr_download}</li>
              <li>cr_hash : {transDataDetail.params.cr_hash}</li>
              <li>cr_id : {transDataDetail.params.cr_id}</li>
              <li>cr_live : {transDataDetail.params.cr_live}</li>
            </ul>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
