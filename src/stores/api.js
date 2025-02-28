import { ErrorToast, SuccessToast } from "@/components/common/toast";
import { isRejectedWithValue } from "@reduxjs/toolkit";
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

const hasStatus = (payload) => {
  return (
    typeof payload === "object" &&
    payload !== null &&
    ("status" in payload || "originalStatus" in payload)
  );
};

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  console.log("girdi1", api, action);

  if (isRejectedWithValue(action) && hasStatus(action.payload)) {
    console.log("girdi");
    if (action.payload.status !== 200) {
      ErrorToast(action.payload?.message || "An error occurred");
    } else {
      SuccessToast(action.payload?.message || "Success");
    }
  }

  return next(action);
};
