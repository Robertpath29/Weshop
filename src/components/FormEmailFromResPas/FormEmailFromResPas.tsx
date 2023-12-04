import React, { FC, useState } from "react";
import { FormEmailFromResPasStyle } from "./formEmailFromResPas.style";
import {
    ContainerBtn,
    ContainerInput,
    ContainerTitle,
} from "../LoginForm/loginForm.style";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";
import { formEmailFromResPasType } from "./formEmailFromResPas.types";
import { PASSWORD_RESET_URL, axiosPost } from "../../api/axiosQuery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";
import FlashMessage from "../FlashMessage/FlashMessage";

const FormEmailFromResPas: FC<formEmailFromResPasType> = ({
    setVisFormChangePas,
}) => {
    const [dataFormEmailFromResPas, setDataFormEmailFromResPas] = useState({
        email: "",
    });
    const [responseData, setResponseData] = useState<{
        status: string;
        message: string;
    }>();
    const [loading, isLoading] = useState(false);
    const resetPassword = async () => {
        isLoading(true);
        const response = await axiosPost(
            PASSWORD_RESET_URL,
            dataFormEmailFromResPas,
            isLoading
        );
        if (response.data?.status === "success") {
            setDataFormEmailFromResPas({ email: "" });
        }
        setResponseData(response.data);
    };
    return (
        <FormEmailFromResPasStyle>
            {responseData?.status === "success" && (
                <FlashMessage message={responseData.message} route="/" />
            )}
            <ContainerTitle style={{ justifyContent: "center" }}>
                <h1 style={{ color: "yellow" }}>Input your email for change</h1>
            </ContainerTitle>
            <ContainerInput>
                <label htmlFor="email">Email</label>
                <WSInput
                    type="email"
                    placeholder="gmail@gmail.com"
                    id="email"
                    autocomplete="username"
                    value={dataFormEmailFromResPas.email}
                    onChange={(e) => {
                        setDataFormEmailFromResPas({
                            ...dataFormEmailFromResPas,
                            email: e.target.value,
                        });
                        setResponseData({ status: "", message: "" });
                    }}
                />
            </ContainerInput>
            <ContainerTitle style={{ justifyContent: "center" }}>
                <span onClick={() => setVisFormChangePas(false)}>
                    I remembered!
                </span>
            </ContainerTitle>
            {responseData?.status === "error" && (
                <ErrorMessage message={responseData.message} />
            )}
            {loading ? (
                <Loading />
            ) : (
                <ContainerBtn>
                    <WSButton
                        onClick={(e) => {
                            e.preventDefault();
                            resetPassword();
                        }}
                        upper
                        maxWidth={"300px"}
                    >
                        reset password
                    </WSButton>
                </ContainerBtn>
            )}
        </FormEmailFromResPasStyle>
    );
};

export default FormEmailFromResPas;
