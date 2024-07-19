import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LogAttemptDto } from "../models/LogAttemptDto";
import { LoggedAttemptDto } from "../models/LoggedAttemptDto";
import { LogAttemptRespDto } from "../models/LogAttemptRespDto";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    logAttempt: builder.mutation<LogAttemptRespDto, LogAttemptDto>({
      query: (body) => ({
        url: "/log-attempt",
        method: "POST",
        body,
      }),
    }),
    logOtherAttempt: builder.mutation<LogAttemptRespDto, void>({
      query: () => ({
        url: "/log-other-attempt",
        method: "POST",
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

export const {
  useLogAttemptMutation,
  useLogOtherAttemptMutation,
  useLazyGetDashboardQuery,
} = api;
