import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

const TodoAPI = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://60a3771d7c6e8b0017e26fe5.mockapi.io",
  }),
  endpoints(build) {
    return {
      getTodo: build.query({ query: () => ({ url: "/todo", method: "get" }) }),
    };
  },
});

export const { useLazyGetTodoQuery } = TodoAPI;

export default TodoAPI;
