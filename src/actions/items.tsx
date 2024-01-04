'use server';
import {deleteItemFromDB, getItemsFromDB} from "@/db/db";
import {Card} from "@/components/card";
import {revalidatePath} from "next/cache";

export const fetchItems = async (page: number) => {
    const items = await getItemsFromDB(page);

    return {
        total: 100,
        data: items.map((item) => {
            return <Card key={item} id={item} />;
        }),
    };
};

export const deleteItem = async (itemId: number) => {
    await deleteItemFromDB(itemId);

    revalidatePath('/', 'page');
}