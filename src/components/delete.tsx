'use client';
import {FC} from "react";
import {deleteItem} from "@/actions/items";
import {useAtom} from "jotai";
import {dataAtom} from "@/components/loadMore";

type Props = {
    id: number
}

export const Delete: FC<Props> = ({id}) => {
    const [_x, setData] = useAtom(dataAtom);
    return <button onClick={() => {
        void deleteItem(id);
        setData((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item?.key !== String(id))
        }))

    }} className="text-lg bg-red-300 rounded px-2 py-1 hover:bg-red-500">Delete</button>
}