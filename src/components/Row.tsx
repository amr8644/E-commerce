import React from "react";
import Card from "./1";

function Row({ data }: any) {
   return (
      <>
         <Card data={data} />
      </>
   );
}

export default Row;
