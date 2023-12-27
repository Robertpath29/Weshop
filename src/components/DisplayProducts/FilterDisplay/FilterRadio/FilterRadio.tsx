import React, { FC } from "react";
import { FilterCheckBoxStyle } from "./filterRadio.style";
import { ContainerInput } from "../../../LoginForm/loginForm.style";
import WSInput from "../../../UI/WSInput/WSInput";
import { useSelector } from "react-redux";
import { reducersType } from "../../../../redux/combineReducer/combineReducer";

const FilterCheckBox: FC<{
    dataSizes: string;
    setDataSizes: React.Dispatch<React.SetStateAction<string>>;
}> = ({ dataSizes, setDataSizes }) => {
    const { countSizes } = useSelector(
        (state: reducersType) => state.filterProduct
    );
    return (
        <FilterCheckBoxStyle>
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="xs"
                        value="xs"
                        name="size"
                        checked={dataSizes === "xs"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "xs") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="xs">XS</label>
                </div>
                <span>({countSizes.xs})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="s"
                        value="s"
                        name="size"
                        checked={dataSizes === "s"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "s") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="s">S</label>
                </div>
                <span>({countSizes.s})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="m"
                        value="m"
                        name="size"
                        checked={dataSizes === "m"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "m") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="m">M</label>
                </div>
                <span>({countSizes.m})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="l"
                        value="l"
                        name="size"
                        checked={dataSizes === "l"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "l") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="l">L</label>
                </div>
                <span>({countSizes.l})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="xl"
                        value="xl"
                        name="size"
                        checked={dataSizes === "xl"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "xl") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="xl">XL</label>
                </div>
                <span>({countSizes.xl})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="xxl"
                        value="xxl"
                        name="size"
                        checked={dataSizes === "xxl"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "xxl") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="xxl">XXL</label>
                </div>
                <span>({countSizes.xxl})</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="radio"
                        id="xxxl"
                        value="xxxl"
                        name="size"
                        checked={dataSizes === "xxxl"}
                        onChange={(e) => {
                            setDataSizes(e.target.value);
                        }}
                        onClick={() => {
                            if (dataSizes === "xxxl") {
                                setDataSizes("");
                            }
                        }}
                    />
                    <label htmlFor="xxxl">XXXL</label>
                </div>
                <span>({countSizes.xxxl})</span>
            </ContainerInput>
        </FilterCheckBoxStyle>
    );
};

export default FilterCheckBox;
