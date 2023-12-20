export const createProductFormData = (
    dataForm: {
        title: string;
        description: string;
        price: string;
        old_price: string;
        images: FileList | null;
    },
    dataFormCategory: string,
    dataFormSizes: string[],
    dataFormColor: string,
    dataFormTypeOfClothing: string
): FormData => {
    const formData = new FormData();

    formData.append("title", dataForm.title);
    formData.append("description", dataForm.description);
    formData.append("category", dataFormCategory);
    formData.append("type_of_clothing", dataFormTypeOfClothing);
    formData.append("color", dataFormColor);
    formData.append("price", dataForm.price);
    formData.append("old_price", dataForm.old_price);

    dataFormSizes.forEach((size) => {
        formData.append("sizes[]", size);
    });

    if (dataForm.images) {
        for (const image of dataForm.images) {
            formData.append("images[]", image);
        }
    }
    return formData;
};
