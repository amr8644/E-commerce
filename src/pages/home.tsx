import React, { use } from "react";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Row from "@/components/Row";
import Footer from "@/components/Footer";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

function Home({ hotOffers, electronics, jewelery, userItems }: any) {
   return (
      <>
         <Navigation userItems={userItems} />
         <Banner />
         <Row data={hotOffers} />
         <Row data={electronics} />
         <Row data={jewelery} />
         <Footer />
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
   const session = await getServerSession(
      context.req,
      context.res,
      authOptions
   );
   const data = await prisma?.user.findUnique({
      where: {
         email: session?.user?.email !== null ? session?.user?.email : "",
      },
      select: {
         products: {
            select: {
               title: true,
               price: true,
               quantity: true,
               image: true,
            },
         },
      },
   });
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
         userItems: data,
         hotOffers: hotOffers,
         jewelery: jewelery,
         electronics: electronics,
      },
   };
};

export default Home;
