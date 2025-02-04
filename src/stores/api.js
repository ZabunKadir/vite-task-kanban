import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
  try {
    // args, Promise dönen bir fonksiyon olarak kullanılacak.
    const result = await args();
    return { data: result };
  } catch (error) {
    return {
      error: {
        message: error.message,
        status: error.code || "BASE_QUERY_ERROR",
      },
    };
  }
};

export const api = createApi({
  reducerPath: "kanbanApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
