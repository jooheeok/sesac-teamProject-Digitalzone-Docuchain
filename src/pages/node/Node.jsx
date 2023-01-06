import React, { useState } from "react";

import NodeTable from "./components/NodeTable";
import NodeTap from "../node/components/NodeTab";
import AllNode from "./components/AllNode";

const Node = () => {
  const [selectedTap, setSelectedTap] = useState("NODE_LIST");
  // NODE_LIST || ALL_NODE_STATE 상태관리
  return (
    // <S.GlobalContainer>
    <>
      <h1>노드</h1>
      <p>전체 노드 x개</p>
      <NodeTap selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      {selectedTap === "NODE_LIST" ? <NodeTable /> : <AllNode />}
    </>
    // </S.GlobalContainer>
  );
};

export default Node;
