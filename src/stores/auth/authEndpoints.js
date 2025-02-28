import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { api } from "../api";
import { buildResponse } from "@/utils";

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          return buildResponse(userCredential.user, "Login successfully");
        } catch (error) {
          return buildResponse(undefined, error.message, error.code);
        }
      },
    }),
    signUp: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const extractUserData = (user) => ({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            accessToken: user.accessToken,
          });
          const plainUser = extractUserData(userCredential.user);
          return buildResponse(plainUser, "User created successfully");
        } catch (error) {
          return buildResponse(undefined, error.message, error.code);
        }
      },
    }),
    signOutUser: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message, status: error.code } };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useSignUpMutation, useSignOutUserMutation } =
  tasksApi;
