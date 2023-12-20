import React, { FC } from "react";
import { CheckboxSizeStyle } from "./checkboxSize.style";
import { ContainerInput } from "../../LoginForm/loginForm.style";
import WSInput from "../../UI/WSInput/WSInput";

const CheckboxSize: FC<{
    dataFormSizes: string[];
    setDataFormSizes: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ dataFormSizes, setDataFormSizes }) => {
    const handleCheckboxChange = (value: string) => {
        const newDataFormSizes = [...dataFormSizes];

        const index = newDataFormSizes.indexOf(value);

        if (index !== -1) {
            newDataFormSizes.splice(index, 1);
        } else {
            newDataFormSizes.push(value);
        }

        setDataFormSizes(newDataFormSizes);
    };

    return (
        <CheckboxSizeStyle>
            <ContainerInput>
                <label htmlFor="xs">XS</label>
                <WSInput
                    type="checkbox"
                    id="xs"
                    value="xs"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="s">S</label>
                <WSInput
                    type="checkbox"
                    id="s"
                    value="s"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="m">M</label>
                <WSInput
                    type="checkbox"
                    id="m"
                    value="m"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="l">L</label>
                <WSInput
                    type="checkbox"
                    id="l"
                    value="l"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="xl">XL</label>
                <WSInput
                    type="checkbox"
                    id="xl"
                    value="xl"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="xxl">XXL</label>
                <WSInput
                    type="checkbox"
                    id="xxl"
                    value="xxl"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="xxxl">XXXL</label>
                <WSInput
                    type="checkbox"
                    id="xxxl"
                    value="xxxl"
                    onChange={(e) => {
                        handleCheckboxChange(e.target.value);
                    }}
                />
            </ContainerInput>
        </CheckboxSizeStyle>
    );
};

export default CheckboxSize;
