const data = Array.from({ length: 100 }, (value, index) => index);

export const getItemsFromDB = async (page: number = 1) => {
    const realPage = page > 10 ? 10 : page;

    const start = (realPage - 1) * 10;
    const end = start + 10;

    return data.slice(start < 0 ? 0 : start, end);
}

export const deleteItemFromDB = async (itemId: number) => {
    const index = data.indexOf(itemId);
    data.splice(index, 1);
}