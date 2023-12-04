import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ActionCreatorWithPayload, SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { routersType } from "../../routers/routersType";
import { responseType } from "../../types/response.types";

export type logInType = {
    (
        result:
            | {
                  data: responseType;
              }
            | {
                  error: FetchBaseQueryError | SerializedError;
              },
        getCurrent_user: ActionCreatorWithPayload<any, " user/getCurrent_user">,
        dataLogin?:
            | {
                  email: string;
                  password: string;
              }
            | undefined,
        routeHome?: NavigateFunction,
        setPages?: React.Dispatch<React.SetStateAction<routersType>>,
        setError?: React.Dispatch<
            React.SetStateAction<
                | {
                      status: string;
                      message: string;
                  }
                | undefined
            >
        >,
        countIncorrectPassword?: number,
        setCountIncorrectPassword?: React.Dispatch<React.SetStateAction<number>>
    ): void;
};
