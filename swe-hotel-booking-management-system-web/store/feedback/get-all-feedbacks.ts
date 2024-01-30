import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

export const getAllFeedbackApi = createApi({
  reducerPath: "getAllFeedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllFeedback: builder.query({
      query: () => {
        let url = "http://localhost:5000/question/getAllQuestions";

        return {
          url: url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllFeedbackQuery } = getAllFeedbackApi;