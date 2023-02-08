import React from "react";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Row from "@/components/Row";
import { GetServerSideProps } from "next";
import Footer from "@/components/Footer";

function Home({ hotOffers, electronics, jewelery }: any) {
   return (
      <>
         <Navigation />
         <Banner />
         <Row data={hotOffers} />
         <Row data={electronics} />
         <Row data={jewelery} />
         <Footer />
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
   const hotOffersResponse = await fetch(
      "https://fakestoreapi.com/products?limit=10"
   );
   const electronicsResponse = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
   );
   const jeweleryResponse = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
   );

   const jewelery = await jeweleryResponse.json();
   const electronics = await electronicsResponse.json();
   const hotOffers = await hotOffersResponse.json();

   return {
      props: {
         hotOffers: hotOffers,
         jewelery: jewelery,
         electronics: electronics,
      },
   };
};

export default Home;
