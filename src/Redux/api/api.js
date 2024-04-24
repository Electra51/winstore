import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getCategory: builder.query({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
    getProductsDetails: builder.query({
      query: (product) => `/products/${product}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetProductsByCategoryQuery,
  useGetProductsDetailsQuery,
} = apiSlice;
