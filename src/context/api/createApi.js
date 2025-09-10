import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://anvarshop.uz/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Product', 'Category', 'User'],
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: 'register/',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: ({ phone, password, username }) => ({
        url: 'login/',
        method: 'POST',
        body: { phone, password, username },
      }),
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: '/user/update/',
        method: 'PUT',
        body: data
      })
    }),
    deleteUser: build.mutation({
      query: () => ({
        url: '/user/delete/',
        method:'DELETE',
      })
    }),
    getProducts: build.query({
      query: (params) => ({
        url: 'products/',
        method: 'GET',
        params,
      }),
      providesTags: ['Product'],
    }),
    getCarusel: build.query({
      query: (params) => ({
        url: 'carousel/',
        method: 'GET',
        params,
      }),
      providesTags: ['Product'],
    }),
    getDiscounts: build.query({
      query: (params) => ({
        url: 'discounts/',
        params,
      }),
    }),
    getCategory: build.query({
      query: (params) => ({
        url: 'categories/',
        params,
      }),
      providesTags: ['Category'],
    }),
    getProductById: build.query({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetCaruselQuery,
  useGetProductsQuery,
  useGetDiscountsQuery,
  useGetCategoryQuery,
  useGetProductByIdQuery,
} = api;


// // Akb3354 username
// // "akbarjonnov33@gmail.com" email
// // "Akbarjon3355" password
// // "+998 93 115 33 54"


// // Akbarjon004
