import React, { FC, useState } from "react";
import { RadioBtnTypeOfClothingStyle } from "./radioBtnTypeOfClothing.style";
import { ContainerInput } from "../../LoginForm/loginForm.style";
import { responseType } from "../../../types/response.types";

const RadioBtnTypeOfClothing: FC<{
    setDataFormTypeOfClothing: React.Dispatch<React.SetStateAction<string>>;
    setResponse: React.Dispatch<React.SetStateAction<responseType | undefined>>;
}> = ({ setDataFormTypeOfClothing, setResponse }) => {
    const [hat, setHat] = useState("");
    const [body, setBody] = useState("");
    const [pants, setPants] = useState("");
    const [footwear, setFootwear] = useState("");
    const [accessories, setAccessories] = useState("");
    return (
        <RadioBtnTypeOfClothingStyle>
            <ContainerInput>
                <label htmlFor="hat">Hats</label>
                <select
                    id="hat"
                    name="hat"
                    value={hat}
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormTypeOfClothing(e.target.value);
                        setHat(e.target.value);
                        setBody("");
                        setPants("");
                        setFootwear("");
                        setAccessories("");
                    }}
                >
                    <option value="">--------</option>
                    <option value="hat">Hat</option>
                    <option value="baseball_cap">baseball cap </option>
                    <option value="cap">cap </option>
                </select>
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="body">Body</label>
                <select
                    id="body"
                    name="body"
                    value={body}
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormTypeOfClothing(e.target.value);
                        setHat("");
                        setBody(e.target.value);
                        setPants("");
                        setFootwear("");
                        setAccessories("");
                    }}
                >
                    <option value="">--------</option>
                    <option value="t-shirt">t-shirt</option>
                    <option value="shirt">shirt</option>
                    <option value="sweater">sweater </option>
                    <option value="jacket">jacket </option>
                    <option value="coat">coat </option>
                    <option value="hoodies">hoodies </option>
                    <option value="parkas">parkas</option>
                </select>
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="pants">Pants</label>
                <select
                    id="pants"
                    name="pants"
                    value={pants}
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormTypeOfClothing(e.target.value);
                        setHat("");
                        setBody("");
                        setPants(e.target.value);
                        setFootwear("");
                        setAccessories("");
                    }}
                >
                    <option value="">--------</option>
                    <option value="pants">pants</option>
                    <option value="jeans">jeans</option>
                    <option value="leggings">leggings </option>
                    <option value="shorts">shorts </option>
                </select>
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="footwear">Footwear</label>
                <select
                    id="footwear"
                    name="footwear"
                    value={footwear}
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormTypeOfClothing(e.target.value);
                        setHat("");
                        setBody("");
                        setPants("");
                        setFootwear(e.target.value);
                        setAccessories("");
                    }}
                >
                    <option value="">--------</option>
                    <option value="shoes">shoes</option>
                    <option value="sneakers">sneakers</option>
                    <option value="flip_flops">flip flops </option>
                </select>
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="accessories">Аccessories</label>
                <select
                    id="accessories"
                    name="accessories"
                    value={accessories}
                    onChange={(e) => {
                        setResponse({ status: "" });
                        setDataFormTypeOfClothing(e.target.value);
                        setHat("");
                        setBody("");
                        setPants("");
                        setFootwear("");
                        setAccessories(e.target.value);
                    }}
                >
                    <option value="">--------</option>
                    <option value="sunglasses">sunglasses</option>
                </select>
            </ContainerInput>
        </RadioBtnTypeOfClothingStyle>
    );
};

export default RadioBtnTypeOfClothing;
