import { NavigateFunction } from "react-router-dom";
import { useAction } from "./useAction";
import { useCreateSessionMutation } from "../redux/store/session/session.api";
import { routersType } from "../routers/routersType";
import { logIn } from "../api/logIn/logIn";

export const useSession = (
    setError?: React.Dispatch<
        React.SetStateAction<
            | {
                  status: string;
                  message: string;
              }
            | undefined
        >
    >,
    setPages?: React.Dispatch<React.SetStateAction<routersType>>,
    routeHome?: NavigateFunction
) => {
    const { getCurrent_user } = useAction();
    const [mutate, { isLoading }] = useCreateSessionMutation();
    const createSession = async (
        dataLogin?: { email: string; password: string },
        dataCookie?: { id?: number; remember_token?: string }
    ) => {
        try {
            if (dataLogin) {
                const result = await mutate(dataLogin);
                logIn(
                    result,
                    getCurrent_user,
                    dataLogin,
                    routeHome,
                    undefined,
                    setError
                );
            } else if (dataCookie) {
                const result = await mutate(dataCookie);
                logIn(result, getCurrent_user, undefined, undefined, setPages);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        isLoading,
        createSession,
    };
};
