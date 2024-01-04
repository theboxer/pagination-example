'use client';
import {FC} from "react";
import {deleteItem} from "@/actions/items";

type Props = {
    id: number
}

export const Delete: FC<Props> = ({id}) => {
    return <button onClick={() => {
        void deleteItem(id);
    }} className="text-lg bg-red-300 rounded px-2 py-1 hover:bg-red-500">Delete</button>
}