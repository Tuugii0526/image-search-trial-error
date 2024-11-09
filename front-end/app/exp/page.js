import Link from "next/link";

export default async function Page({ params }) {
  let res = await fetch('https://dev.to/api/articles');
  let blogs=await res.json()
  return (
    <div className="text-white">
      <ul>
        {blogs.map(blog=><Link key={blog.id} href={`/exp/${blog.id}`}>
            <ul>
              {blog.title}
            </ul>
        </Link>)}
      </ul>
    </div>
  );
}
