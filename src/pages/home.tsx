import React from "react";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Row from "@/components/Row";
import { GetServerSideProps } from "next";

function Home({ data }: any) {
   return (
      <>
         <Navigation />
         <Banner />
         <Row data={data} />
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
   const response = await fetch("https://fakestoreapi.com/products");
   const data = await response.json();

   return {
      props: { data },
   };
};

export default Home;
