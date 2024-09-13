import {useMutation, UseMutationResult,} from "@tanstack/react-query";
import { SignInPayload, UserDetails as SignInResponse  , SignUpUserDetails, Success} from "../Interfaces/types.tsx";
import { changePassword, signup, singin } from "./useApi.tsx";



export const useSignIn = (): UseMutationResult<SignInResponse, Error, SignInPayload> => {
  return useMutation({
    mutationFn:  singin,
  });
};

export const useSignUp = () : UseMutationResult<SignInResponse, Error, SignUpUserDetails> => {
  return useMutation({
    mutationFn : signup,
  })
}

export const useChangePassword = (): UseMutationResult<Success, Error, SignInPayload> => {
  return useMutation({
    mutationFn: changePassword,
  });
};


