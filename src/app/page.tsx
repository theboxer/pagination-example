import {LoadMore} from "@/components/loadMore";
import {fetchItems} from "@/actions/items";

const Page = async () => {
    const { data} = await fetchItems(1);

  return (
   <div className="flex flex-wrap gap-2 px-4 py-2">
       {data}

       <LoadMore />
   </div>
  )
}

export default Page;