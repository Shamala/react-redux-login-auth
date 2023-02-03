import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnusedDataFor: 5, //cache in RTK query for 5sec , default 60sec
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
