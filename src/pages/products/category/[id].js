import { useGetProductsByCategoryQuery } from "@/Redux/api/api";
import SpecialOffer from "@/components/Common/SpecialOffer";
import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoMdStar } from "react-icons/io";

const CategoryDetails = () => {
  const router = useRouter();
  const { data: products, isLoading } = useGetProductsByCategoryQuery(
    router.query.id
  );
  {
    isLoading && <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="w-[370px] lg:w-[1400px] mx-auto py-16">
      <div className="">
        <p className="text-[22px] font-medium">{router.query.id}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-7">
        {products?.map((product, index) => {
          return (
            <Link
              href={`/products/${product?.id}`}
              className={`w-[350px] mx-auto border border-[#0000001C] h-[286px]`}>
              <div className="grid grid-cols-2 gap-y-4 p-5">
                <div className="">
                  {product?.title?.length > 16 ? (
                    <p className="text-[17px] font-normal text-black">
                      {product?.title.slice(0, 16) + "..."}
                    </p>
                  ) : (
                    <p className="text-[17px] font-normal text-black">
                      {product?.title}
                    </p>
                  )}
                  <p className="text-[18px] font-normal text-[#00CAD7]">
                    Rs.{product?.price}
                  </p>
                  <div className="flex justify-normal items-center font-normal text-black">
                    <IoMdStar className="text-xl text-orange-500" />
                    <p className="text-[14px]">{product?.rating?.rate} </p>
                    <span className="text-[14px] pl-0.5">
                      ({product?.rating?.count} reveiws)
                    </span>
                  </div>
                </div>
                <SpecialOffer
                  color={
                    index === 1 || index === 3
                      ? "#c93c2d"
                      : index === 2
                      ? "#214e54"
                      : "#00CAD7"
                  }
                />
                <div
                  className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
                  style={{
                    background:
                      "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
                  }}>
                  Save <br /> 10%
                </div>
                <div className="w-[140px] h-[120px]">
                  <Image
                    width={140}
                    height={120}
                    src={product?.image}
                    alt=""
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDetails;

CategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
