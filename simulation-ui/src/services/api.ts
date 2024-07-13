import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LogAttemptDto } from "../models/LogAttemptDto";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    logAttempt: builder.mutation<void, LogAttemptDto>({
      query: (body) => ({
        url: "/log-attempt",
        method: "POST",
        body,
      }),
    }),
    getDashboard: builder.query<string, void>({
      query: () => ({
        url: "/dashboard",
      }),
    }),
  }),
});

export const { useLogAttemptMutation, useLazyGetDashboardQuery } = api;
