import React from "react";
import { OutputWrapper } from "../styles/wrapper/Wrapper";

function Output({ jsonData }) {
  return (
    <OutputWrapper>
      {Object.keys(jsonData?.json)?.length > 0 && (
        <p style={{ color: "yellow", marginBottom: "5px" }}>&#123;</p>
      )}
      {Object.keys(jsonData?.json)?.map((js) => {
        return (
          <p key={js} style={{ color: "yellow", paddingLeft: "10px" }}>
            <span style={{ color: "rgb(112,224,238)" }}>"{js}"</span>: &#123;
            "carryString":
            <span style={{ color: "rgb(243,170,99)" }}>
              {" "}
              "{jsonData?.json[js]?.carryString}"
            </span>
            , "sumString":{" "}
            <span style={{ color: "rgb(243,170,99)" }}>
              "{jsonData?.json[js]?.sumString}"
            </span>{" "}
            &#125;,
          </p>
        );
      })}
      {Object.keys(jsonData?.json)?.length > 0 && (
        <p style={{ color: "yellow", marginTop: "5px" }}> &#125;</p>
      )}
    </OutputWrapper>
  );
}

export default Output;
