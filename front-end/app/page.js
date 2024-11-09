import { FallBackImage } from "@/components/image/FallBackImage";
import { Search } from "@/components/search/Search";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  let images
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_POINT}?tag=${query}`
  );
  if(res.ok)
  {
     images = await res.json();
    

  }
  else 
  {
    images=[]
  }
  
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <Search />
      {
        !images?.length ? <p>No data</p>
        : null
      }
      {images?.map(( { cover_image ,id}) =>{
        if(cover_image)
        {
          return (
            <FallBackImage key={id} url={cover_image } />
          )
        }
        return null
      }
      )}
    </div>
  );
}
