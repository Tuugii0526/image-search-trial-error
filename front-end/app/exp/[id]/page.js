import { notFound } from "next/navigation";

async function getPost(id) {
  let res = await fetch(`https://dev.to/api/articles/${id}`);
  let blog = await res.json();
  if (!blog) notFound();
  return blog;
}
export async function generateStaticParams() {
  let blogs = await fetch(`https://dev.to/api/articles`).then((res) =>
    res.json()
  );
  return blogs.map((blog) => ({
    id: `${blog?.id}`,
  }));
}
export async function generateMetadata({ params }) {
  let blog = await getPost(params.id);
  return {
    title: blog.title,
  };
}

export default async function Page({ params }) {
  let blog = await getPost(params.id);
  return (
    <div className="text-white">
      <article>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </article>
    </div>
  );
}
