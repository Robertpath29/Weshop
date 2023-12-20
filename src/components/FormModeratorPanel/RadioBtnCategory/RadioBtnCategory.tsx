import React, { FC } from "react";
import { RadioBtnCategoryStyle } from "./radioBtnCategory.style";
import { ContainerInput } from "../../LoginForm/loginForm.style";
import WSInput from "../../UI/WSInput/WSInput";
import WSButton from "../../UI/WSButton/WSButton";
import { responseType } from "../../../types/response.types";

const RadioBtnCategory: FC<{
    setDataFormCategory: React.Dispatch<React.SetStateAction<string>>;
    setResponse: React.Dispatch<React.SetStateAction<responseType | undefined>>;
}> = ({ setDataFormCategory, setResponse }) => {
    return (
        <RadioBtnCategoryStyle>
            <ContainerInput>
                <label htmlFor="man">Man</label>
                <WSInput
                    type="radio"
                    id="man"
                    name="category"
                    value="man"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="woman">Woman</label>
                <WSInput
                    type="radio"
                    id="woman"
                    name="category"
                    value="woman"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="kids">Kids</label>
                <WSInput
                    type="radio"
                    id="kids"
                    name="category"
                    value="kids"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="bags">Bags</label>
                <WSInput
                    type="radio"
                    id="bags"
                    name="category"
                    value="bags"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="accessories">Accessories</label>
                <WSInput
                    type="radio"
                    id="accessories"
                    name="category"
                    value="accessories"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="watch">Watch</label>
                <WSInput
                    type="radio"
                    id="watch"
                    name="category"
                    value="watch"
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormCategory(e.target.value);
                    }}
                />
            </ContainerInput>
        </RadioBtnCategoryStyle>
    );
};

export default RadioBtnCategory;
