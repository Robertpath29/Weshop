export type newUserType = {
    (
        isLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setResponse: (
            value: React.SetStateAction<
                | {
                      status: string;
                      message: string;
                      warning?:
                          | {
                                name?: string | undefined;
                                email?: string | undefined;
                                password?: string | undefined;
                                password_confirmation?: string | undefined;
                            }
                          | undefined;
                  }
                | undefined
            >
        ) => void,
        setDataFormRegister: (
            value: React.SetStateAction<{
                user: {
                    name: string;
                    email: string;
                    password: string;
                    password_confirmation: string;
                };
            }>
        ) => void,
        dataFormRegister: {
            user: {
                name: string;
                email: string;
                password: string;
                password_confirmation: string;
            };
        }
    ): void;
};
