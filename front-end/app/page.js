import { FallBackImage } from "@/components/image/FallBackImage";
import { Search } from "@/components/search/Search";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  let images
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_POINT}/query/${query}`
  );
  if(res.ok)
  {
    const object = await res.json();
    console.log('object is:',object)
    images=object.images
  }
  else 
  {
    images=[]
  }
  
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <Search />
      {
        !images.length ? <p>No data</p>
        : null
      }
      {images?.map(( { url, description },i) =>(
        <FallBackImage url={url} key={i}/>
      ))}
    </div>
  );
}
