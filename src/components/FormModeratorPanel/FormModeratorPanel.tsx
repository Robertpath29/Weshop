import React, { useRef, useState } from "react";
import {
    ContainerCompositionStyle,
    ContainerFormData,
    ContainerImagesStyle,
    ContainerModeratorForm,
    FormModeratorPanelStyle,
    TitleStyle,
} from "./formModeratorPanel.style";
import WSInput from "../UI/WSInput/WSInput";
import { PRODUCTS_URL, axiosPost } from "../../api/axiosQuery";
import WSButton from "../UI/WSButton/WSButton";
import { ContainerInput } from "../LoginForm/loginForm.style";
import RadioBtnCategory from "./RadioBtnCategory/RadioBtnCategory";
import CheckboxSize from "./CheckboxSize/CheckboxSize";
import RadioBtnColor from "./RadioBtnColor/RadioBtnColor";
import RadioBtnTypeOfClothing from "./RadioBtnTypeOfClothing/RadioBtnTypeOfClothing";
import { createProductFormData } from "../../utils/createProductFormData";
import { responseType } from "../../types/response.types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FormModeratorPanel = () => {
    const [dataForm, setDataForm] = useState<{
        title: string;
        description: string;
        extended_description: string;
        history: string;
        compositions: string[];
        price: string;
        old_price: string;
        images: FileList | null;
    }>({
        title: "",
        description: "",
        extended_description: "",
        history: "",
        compositions: [],
        price: "",
        old_price: "",
        images: null,
    });
    const [dataFormCategory, setDataFormCategory] = useState<string>("");
    const [dataFormSizes, setDataFormSizes] = useState<string[]>([]);
    const [dataFormColor, setDataFormColor] = useState<string>("");
    const [dataFormTypeOfClothing, setDataFormTypeOfClothing] =
        useState<string>("");

    const [response, setResponse] = useState<responseType>();
    const [dataComposition, setDataComposition] = useState({
        dataName: [""],
        dataPercent: [""],
        numberComposition: 1,
    });

    const createProduct = async () => {
        const arrayComposition: string[] = [];
        if (
            dataComposition.dataName.length !== 0 &&
            dataComposition.dataPercent.length !== 0
        ) {
            for (
                let index = 0;
                index < dataComposition.dataName.length;
                index++
            ) {
                arrayComposition.push(
                    dataComposition.dataName[index],
                    dataComposition.dataPercent[index]
                );
            }
        }
        console.log(arrayComposition);

        const formData = createProductFormData(
            dataForm,
            dataFormCategory,
            dataFormSizes,
            dataFormColor,
            dataFormTypeOfClothing,
            arrayComposition
        );
        const response = await axiosPost(PRODUCTS_URL, formData);
        if (response.data.status === "success") {
            alert("You have add product!");
            window.location.reload();
        }
        setResponse(response.data);
    };

    return (
        <FormModeratorPanelStyle>
            {response?.status === "error" && (
                <ErrorMessage message={response?.message} />
            )}

            <ContainerModeratorForm>
                <ContainerFormData>
                    <ContainerInput>
                        <label htmlFor="title">Title</label>
                        <WSInput
                            type="text"
                            placeholder="hilfiger denim..."
                            id="title"
                            value={dataForm.title}
                            warning={response?.warning?.title}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    title: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="description"
                            id="description"
                            rows={10}
                            cols={10}
                            value={dataForm.description}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    description: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="extended_description">
                            Extended description
                        </label>
                        <textarea
                            placeholder="extended description"
                            id="extended_description"
                            rows={10}
                            cols={10}
                            value={dataForm.extended_description}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    extended_description: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="history">History</label>
                        <textarea
                            placeholder="history"
                            id="history"
                            rows={10}
                            cols={10}
                            value={dataForm.history}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    history: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                    <ContainerCompositionStyle>
                        <hr />
                        <h1>Composition:</h1>
                        {Array.from(
                            { length: dataComposition.numberComposition },
                            (_, index) => (
                                <ContainerInput key={index}>
                                    <WSInput
                                        type="text"
                                        placeholder="cotton (max 15 length)"
                                        value={
                                            dataComposition.dataName[index] ||
                                            ""
                                        }
                                        onChange={(e) => {
                                            setResponse({ status: "" });
                                            const newValue =
                                                e.target.value.substring(0, 15);
                                            const newDataName = [
                                                ...dataComposition.dataName,
                                            ];
                                            newDataName[index] = newValue;
                                            setDataComposition({
                                                ...dataComposition,
                                                dataName: newDataName,
                                            });
                                        }}
                                    />
                                    <WSInput
                                        type="number"
                                        placeholder="0-100"
                                        max={100}
                                        value={
                                            dataComposition.dataPercent[
                                                index
                                            ] || ""
                                        }
                                        onChange={(e) => {
                                            setResponse({ status: "" });
                                            const newValue =
                                                parseInt(e.target.value, 10) ||
                                                0;
                                            const limitedValue = Math.min(
                                                newValue,
                                                100
                                            );
                                            const newDataPercent = [
                                                ...dataComposition.dataPercent,
                                            ];
                                            newDataPercent[index] =
                                                limitedValue.toString();
                                            setDataComposition({
                                                ...dataComposition,
                                                dataPercent: newDataPercent,
                                            });
                                        }}
                                    />
                                </ContainerInput>
                            )
                        )}
                        <WSButton
                            upper
                            onClick={(e) => {
                                e.preventDefault();
                                setDataComposition({
                                    ...dataComposition,
                                    numberComposition:
                                        dataComposition.numberComposition + 1,
                                });
                            }}
                        >
                            add new component
                        </WSButton>
                        <hr />
                    </ContainerCompositionStyle>
                    <ContainerInput>
                        <label htmlFor="price">price($)</label>
                        <WSInput
                            type="number"
                            id="price"
                            placeholder="99.99"
                            value={dataForm.price}
                            warning={response?.warning?.price}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    price: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="oldPrice">old price($)</label>
                        <WSInput
                            type="number"
                            id="oldPrice"
                            placeholder="120.00"
                            value={dataForm.old_price}
                            warning={response?.warning?.old_price}
                            onChange={(e) => {
                                setResponse({ status: "" });
                                setDataForm({
                                    ...dataForm,
                                    old_price: e.target.value,
                                });
                            }}
                        />
                    </ContainerInput>
                </ContainerFormData>
                <hr />
                <ContainerFormData>
                    <TitleStyle $error={response?.warning?.category}>
                        Category:
                    </TitleStyle>
                    <RadioBtnCategory
                        setResponse={setResponse}
                        setDataFormCategory={setDataFormCategory}
                    />
                </ContainerFormData>
                <hr />
                <ContainerFormData>
                    <TitleStyle $error={response?.warning?.type_of_clothing}>
                        Type of clothing:
                    </TitleStyle>
                    <RadioBtnTypeOfClothing
                        setResponse={setResponse}
                        setDataFormTypeOfClothing={setDataFormTypeOfClothing}
                    />
                </ContainerFormData>
                <hr />
                <ContainerFormData>
                    <TitleStyle>Color:</TitleStyle>
                    <RadioBtnColor
                        dataFormColor={dataFormColor}
                        setDataFormColor={setDataFormColor}
                    />
                </ContainerFormData>
                <hr />
                <ContainerFormData>
                    <TitleStyle>Sizes:</TitleStyle>
                    <CheckboxSize
                        dataFormSizes={dataFormSizes}
                        setDataFormSizes={setDataFormSizes}
                    />
                </ContainerFormData>
                <hr />
                <ContainerFormData>
                    <TitleStyle>Add images:</TitleStyle>

                    <ContainerImagesStyle>
                        {dataForm.images &&
                            Array.from(dataForm.images).map((img, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(img)}
                                    alt={`Selected Image ${index + 1}`}
                                />
                            ))}
                    </ContainerImagesStyle>
                    {response?.message === "Invalid image format" && (
                        <ErrorMessage message={response?.message} />
                    )}
                    <WSInput
                        type="file"
                        multiple
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                images: e.target.files,
                            });
                        }}
                    />
                    {dataForm.images && (
                        <WSButton
                            onClick={(e) => {
                                setResponse({ status: "" });
                                e.preventDefault();
                                setDataForm({ ...dataForm, images: null });
                            }}
                            upper
                        >
                            Clear images
                        </WSButton>
                    )}
                </ContainerFormData>
                <hr />
            </ContainerModeratorForm>

            <WSButton
                onClick={(e) => {
                    e.preventDefault();
                    const confirm = window.confirm("are you shure?");
                    if (confirm) createProduct();
                }}
                upper
                maxWidth="300px"
            >
                create product
            </WSButton>
        </FormModeratorPanelStyle>
    );
};

export default FormModeratorPanel;
