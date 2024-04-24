import { useGetProductsDetailsQuery } from "@/Redux/api/api";
import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IoMdStar } from "react-icons/io";

const ProductDetails = () => {
  const router = useRouter();
  const { data: products, isLoading } = useGetProductsDetailsQuery(
    router.query.productId
  );
  {
    isLoading && <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="w-[380px] lg:w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-20 py-10 justify-between items-center">
      <div>
        <p className="text-[22px] font-medium text-black">{products?.title}</p>
        <p className="font-medium text-[18px]">
          Category: {products?.category}
        </p>
        <p className="text-[18px] font-medium text-[#00CAD7]">
          <span className="font-medium text-black">Price:</span> Rs.
          {products?.price}
        </p>
        <div className="flex justify-normal items-center font-normal text-black">
          <IoMdStar className="text-xl text-orange-500" />
          <p className="text-[16px]">{products?.rating?.rate} </p>
          <span className="text-[16px] pl-0.5">
            ({products?.rating?.count} reveiws)
          </span>
        </div>
        <p className="mt-3 text-justify">{products?.description}</p>
      </div>
      <div>
        <Image src={products?.image} alt="" width={400} height={300} />
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
