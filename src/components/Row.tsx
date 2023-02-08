import React from "react";
import Card from "./Card";

function Row({ data }: any) {
   return (
      <>
         {/* <Heading>Hot Offers</Heading> */}
         <Card data={data} />
      </>
   );
}

export default Row;
