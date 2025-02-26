import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";

const WhiteBoardSearch = () => {
  return (
    <div>
      <div className="white-form-grp">
        <div style={{ flexDirection: "row", display: "flex", gap: "10px" }}>
          <Input label={"Ward"} />
          <Input label={"Room"} />
          <Input label={"Bed"} />
          <Input label={"Date"} />
        </div>
        <div style={{alignSelf:"center"}}>
          <Button btnName={" Search Patient"}/>
        </div>
      </div>
    </div>
  );
};

export default WhiteBoardSearch;
