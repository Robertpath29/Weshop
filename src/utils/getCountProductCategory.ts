export const getCountProductCategory = (
    category: string[] | undefined
): object => {
    const numberProductCategory = {
        woman: 0,
        man: 0,
        kids: 0,
        bags: 0,
        accessories: 0,
        watch: 0,
    };

    category?.forEach((prod) => {
        switch (prod) {
            case "woman":
                numberProductCategory.woman++;
                break;
            case "man":
                numberProductCategory.man++;
                break;
            case "kids":
                numberProductCategory.kids++;
                break;
            case "bags":
                numberProductCategory.bags++;
                break;
            case "accessories":
                numberProductCategory.accessories++;
                break;
            case "watch":
                numberProductCategory.watch++;
                break;
        }
    });

    return numberProductCategory;
};
