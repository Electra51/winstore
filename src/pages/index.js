import { useGetProductsQuery } from "@/Redux/api/api";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/Ui/Banner/Banner";
import BestDeal from "@/components/Ui/BestDealSection/BestDeal";
import NewArrivals from "@/components/Ui/NewArrivals/NewArrivals";
import ProductCategory from "@/components/Ui/ProductCategory/ProductCategory";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  {
    isLoading && <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <>
      <Head>
        <title>Win-Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Banner />
        <ProductCategory />
        <NewArrivals arrivalProduct={data} />
        <BestDeal />
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
