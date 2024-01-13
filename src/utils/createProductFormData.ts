export const createProductFormData = (
    dataForm: {
        title: string;
        description: string;
        extended_description: string;
        history: string;
        compositions: string[];
        price: string;
        old_price: string;
        images: FileList | null;
    },
    dataFormCategory: string,
    dataFormSizes: string[],
    dataFormColor: string,
    dataFormTypeOfClothing: string,
    arrayComposition: string[]
): FormData => {
    const formData = new FormData();

    formData.append("title", dataForm.title);
    formData.append("description", dataForm.description);
    formData.append("extended_description", dataForm.extended_description);
    formData.append("history", dataForm.history);
    formData.append("category", dataFormCategory);
    formData.append("type_of_clothing", dataFormTypeOfClothing);
    formData.append("color", dataFormColor);
    formData.append("price", dataForm.price);
    formData.append("old_price", dataForm.old_price);

    dataFormSizes.forEach((size) => {
        formData.append("sizes[]", size);
    });

    arrayComposition.forEach((component) => {
        formData.append("compositions[]", component);
    });
    if (dataForm.images) {
        for (const image of dataForm.images) {
            formData.append("images[]", image);
        }
    }
    return formData;
};
