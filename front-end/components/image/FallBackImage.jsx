"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
let fallBackImageAddress='https://www.google.com/url?sa=i&url=https%3A%2F%2Fphys.org%2Fnews%2F2014-02-earth-galaxy.html&psig=AOvVaw2-NCP-VoHQGIId1nvUZvjG&ust=1731079025588000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCNs4rCyokDFQAAAAAdAAAAABAY'
export const FallBackImage=({url,key})=>{
    const [imageSrc,setImageSrc]=useState(url)
    return (
        <Link key={key} as={`/p/${key}`} href={`/?photoId=${key}`} className="w-full">
        {/* <Image
          alt="meme image"
          style={{ transform: "translate3d(0, 0, 0)" }}
          src={imageSrc}
          width={720}
          height={480}
          sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
        onError={()=>{
            setImageSrc(fallBackImageAddress)
            console.log('IMAGE ERROR')
        }}
        /> */}
        <img src={url} alt="meme image" style={{
            transform: "translate3d(0, 0, 0)" 
        }}
        width={720}
        height={480}/>
      </Link>
    )
}