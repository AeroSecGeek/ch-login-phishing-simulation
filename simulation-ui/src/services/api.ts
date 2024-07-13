import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LogAttemptDto } from "../models/LogAttemptDto";
import { LoggedAttemptDto } from "../models/LoggedAttemptDto";

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
    getDashboard: builder.query<
      LoggedAttemptDto[],
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: "/dashboard",
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      }),
    }),
  }),
});

export const { useLogAttemptMutation, useLazyGetDashboardQuery } = api;
