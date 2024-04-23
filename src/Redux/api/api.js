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
  }),
});

export const { useGetProductsQuery, useGetCategoryQuery } = apiSlice;
