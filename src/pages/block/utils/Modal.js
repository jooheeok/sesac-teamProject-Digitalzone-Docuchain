import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

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
    // * 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          {/* <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header> */}
          <main>
            <h3>method : {transDataDetail.method}</h3>
            <div className="boxLayout1 boxShadow">
              <TableContainer
                className="detailTableInner"
                sx={{ paddingRight: "24px" }}
              >
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                  <TableBody>
                    <h3>params : </h3>
                    <TableRow>
                      <TableCell>cr_download</TableCell>
                      <TableCell>
                        : {transDataDetail.params.cr_download}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cr_hash</TableCell>
                      <TableCell>: {transDataDetail.params.cr_hash}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cr_id</TableCell>
                      <TableCell>: {transDataDetail.params.cr_id}</TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "hidden" }}>
                      <TableCell>cr_live</TableCell>
                      <TableCell>: {transDataDetail.params.cr_live}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Button
                  className="close"
                  onClick={close}
                  style={{ border: "1px solid #1976d2" }}
                >
                  닫기 x
                </Button>
              </TableContainer>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
}
