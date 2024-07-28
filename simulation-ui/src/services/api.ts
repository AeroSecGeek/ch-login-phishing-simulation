import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LogAttemptDto } from "../models/LogAttemptDto";
import { DashboardDto } from "../models/DashboardDto";
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
    logVisit: builder.mutation<LogAttemptRespDto, void>({
      query: () => ({
        url: "/log-visit",
        method: "POST",
      }),
    }),
    getDashboard: builder.query<
      DashboardDto,
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
  useLogVisitMutation,
} = api;
