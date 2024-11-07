"use client"

import { usePathname,useSearchParams,useRouter } from "next/navigation"
export const Search=()=>{
const searchParams=useSearchParams()
const pathName=usePathname()
const {replace} =useRouter()
const handleSearch=(query)=>{
const params=new URLSearchParams(searchParams)
if(query)
{
    params.set('query',query)
}
else
{
    params.delete('query')
}
replace(`${pathName}?${params.toString()}`)
}
return (
    <div className=" mb-5 flex h-[480px] flex-col items-center  gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-16 text-center  ">
        <label htmlFor="search">
          <input type="text" className="outline-none px-3 py-1 rounded-2xl text-[#000000b3]" placeholder="Search image" onChange={(e)=>{
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}/>
        </label>
      </div>
)
}