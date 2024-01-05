import {FC} from "react";
import {Delete} from "@/components/delete";

type Props = {
    id: number;
};

export const Card: FC<Props> = ({id}) => {
    return <div key={id} className="bg-slate-200 w-full h-64 flex flex-col items-center justify-center text-2xl space-y-4">
        <div>Card #{id}</div>
        <Delete id={id} />
    </div>
}