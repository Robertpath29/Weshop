import React, { FC } from "react";
import { ColorStyle, RadioBtnColorStyle } from "./radioBtnColor.style";
import WSInput from "../../UI/WSInput/WSInput";
import { ContainerInput } from "../../LoginForm/loginForm.style";
import WSButton from "../../UI/WSButton/WSButton";

const RadioBtnColor: FC<{
    dataFormColor: string;
    setDataFormColor: React.Dispatch<React.SetStateAction<string>>;
}> = ({ dataFormColor, setDataFormColor }) => {
    return (
        <RadioBtnColorStyle>
            <ContainerInput>
                <ColorStyle $color="white" />
                <label htmlFor="white">White</label>
                <WSInput
                    type="radio"
                    id="white"
                    name="color"
                    value="white"
                    checked={dataFormColor === "white"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="black" />
                <label htmlFor="black">black</label>
                <WSInput
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                    checked={dataFormColor === "black"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="red" />
                <label htmlFor="red">red</label>
                <WSInput
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked={dataFormColor === "red"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="orange" />
                <label htmlFor="orange">orange</label>
                <WSInput
                    type="radio"
                    id="orange"
                    name="color"
                    value="orange"
                    checked={dataFormColor === "orange"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="yellow" />
                <label htmlFor="yellow">yellow</label>
                <WSInput
                    type="radio"
                    id="yellow"
                    name="color"
                    value="yellow"
                    checked={dataFormColor === "yellow"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="green" />
                <label htmlFor="green">green</label>
                <WSInput
                    type="radio"
                    id="green"
                    name="color"
                    value="green"
                    checked={dataFormColor === "green"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="blue" />
                <label htmlFor="blue">blue</label>
                <WSInput
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                    checked={dataFormColor === "blue"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="skyblue" />
                <label htmlFor="skyblue">skyblue</label>
                <WSInput
                    type="radio"
                    id="skyblue"
                    name="color"
                    value="skyblue"
                    checked={dataFormColor === "skyblue"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <ColorStyle $color="purple" />
                <label htmlFor="purple">purple</label>
                <WSInput
                    type="radio"
                    id="purple"
                    name="color"
                    value="purple"
                    checked={dataFormColor === "purple"}
                    onChange={(e) => setDataFormColor(e.target.value)}
                />
            </ContainerInput>
            <WSButton
                onClick={(e) => {
                    e.preventDefault();
                    setDataFormColor("");
                }}
                upper
            >
                clear
            </WSButton>
        </RadioBtnColorStyle>
    );
};

export default RadioBtnColor;
