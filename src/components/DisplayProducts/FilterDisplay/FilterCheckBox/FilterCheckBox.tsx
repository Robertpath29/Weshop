import React, { FC } from "react";
import { FilterCheckBoxStyle } from "./filterCheckBox.style";
import { ContainerInput } from "../../../LoginForm/loginForm.style";
import WSInput from "../../../UI/WSInput/WSInput";

const FilterCheckBox: FC<{
    dataSizes: string[];
    setDataSizes: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ dataSizes, setDataSizes }) => {
    const handleCheckboxChange = (value: string) => {
        const newDataFormSizes = [...dataSizes];

        const index = newDataFormSizes.indexOf(value);

        if (index !== -1) {
            newDataFormSizes.splice(index, 1);
        } else {
            newDataFormSizes.push(value);
        }

        setDataSizes(newDataFormSizes);
    };
    return (
        <FilterCheckBoxStyle>
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="xs"
                        value="xs"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="xs">XS</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="s"
                        value="s"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="s">S</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="m"
                        value="m"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="m">M</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="l"
                        value="l"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="l">L</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="xl"
                        value="xl"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="xl">XL</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="xxl"
                        value="xxl"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="xxl">XXL</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
            <hr />
            <ContainerInput>
                <div>
                    <WSInput
                        type="checkbox"
                        id="xxxl"
                        value="xxxl"
                        onChange={(e) => {
                            handleCheckboxChange(e.target.value);
                        }}
                    />
                    <label htmlFor="xxxl">XXXL</label>
                </div>
                <span>(0)</span>
            </ContainerInput>
        </FilterCheckBoxStyle>
    );
};

export default FilterCheckBox;
