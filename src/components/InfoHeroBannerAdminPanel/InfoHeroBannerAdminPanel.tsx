import React, { FC, useState } from "react";
import {
    ContainerImageCard,
    InfoHeroBannerAdminPanelStyle,
} from "./infoHeroBannerAdminPanel.style";
import { responseType } from "../../types/response.types";
import WSInput from "../UI/WSInput/WSInput";
import WSButton from "../UI/WSButton/WSButton";
import { ContainerBtn, ContainerInput } from "../LoginForm/loginForm.style";
import { useAddImageMutation } from "../../redux/store/heroBannerImg/heroBannerImg.api";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BannerImgCard from "./BannerImgCard/BannerImgCard";

const InfoHeroBannerAdminPanel: FC<{
    data: responseType | undefined;
    getHeroBanner: number;
    setGetHeroBanner: React.Dispatch<React.SetStateAction<number>>;
}> = ({ data, getHeroBanner, setGetHeroBanner }) => {
    const [disabled, isDisabled] = useState(true);
    const [dataForm, setDataForm] = useState<{
        placeholder: string;
        url: string;
        img: File | undefined;
    }>({ placeholder: "", url: "", img: undefined });

    const [response, setResponse] = useState<responseType>();

    const [mutate, { isLoading }] = useAddImageMutation();
    const addImage = async () => {
        const response = await mutate(dataForm);

        if ("data" in response) {
            setResponse(response.data);
            if (response.data.status === "success") {
                isDisabled(true);
                setDataForm({ placeholder: "", url: "", img: undefined });
                setGetHeroBanner(getHeroBanner + 1);
            }
        }
    };
    return (
        <InfoHeroBannerAdminPanelStyle $disabled={disabled}>
            <ContainerImageCard>
                {data?.images?.length === 0 ? (
                    <h1>No Images!</h1>
                ) : (
                    data?.images?.map((img) => (
                        <BannerImgCard
                            img={img}
                            key={img.id}
                            getHeroBanner={getHeroBanner}
                            setGetHeroBanner={setGetHeroBanner}
                        />
                    ))
                )}
            </ContainerImageCard>
            <h2>Add images:</h2>
            {response?.status === "error" && (
                <ErrorMessage message={response.message} />
            )}
            <form>
                <ContainerInput>
                    <label htmlFor="placeholder">Placeholder</label>
                    <WSInput
                        type="text"
                        placeholder="not necessarily"
                        id="placeholder"
                        disabled={disabled}
                        value={dataForm.placeholder}
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                placeholder: e.target.value,
                            });
                        }}
                    />
                </ContainerInput>
                <ContainerInput>
                    <label htmlFor="url">Url</label>
                    <WSInput
                        type="text"
                        placeholder="not necessarily"
                        id="url"
                        disabled={disabled}
                        value={dataForm.url}
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                url: e.target.value,
                            });
                        }}
                    />
                </ContainerInput>
                <ContainerInput>
                    <label htmlFor="img">Image</label>
                    <WSInput
                        type="file"
                        id="img"
                        disabled={disabled}
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                img: e.target.files?.[0],
                            });
                        }}
                    />
                </ContainerInput>

                <ContainerBtn>
                    {isLoading ? (
                        <Loading />
                    ) : disabled ? (
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
                                isDisabled(false);
                            }}
                            upper
                            maxWidth={"300px"}
                        >
                            Active
                        </WSButton>
                    ) : (
                        <WSButton
                            onClick={(e) => {
                                e.preventDefault();
                                addImage();
                            }}
                            upper
                            maxWidth={"300px"}
                        >
                            Add image
                        </WSButton>
                    )}
                </ContainerBtn>
            </form>
        </InfoHeroBannerAdminPanelStyle>
    );
};

export default InfoHeroBannerAdminPanel;
