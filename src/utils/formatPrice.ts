export const formatPrice = (price: string): string => {
    const numberPrice = parseFloat(price);
    const isIntegerPrice = Number.isInteger(numberPrice);
    const formattedPrice = isIntegerPrice
        ? numberPrice.toFixed(0)
        : numberPrice.toFixed(2);

    return formattedPrice;
};
