import { getAllNodes } from "next-mdx/server"
import Link from 'next/link';
function BlogPage({ posts }) {
  return (
    <div className="site-container">
      {
        posts.map(post => {
          return <article key={post.url}>
            <div className="space-y-4 mt-5">
              <h2 className="text-xl font-bold">
                <Link href={post.url} >
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>
              <p>{post.frontMatter.excerpt}</p>
              <div className="text-gray-400">
                <span>{post.frontMatter.date}</span>
                <hr></hr>
              </div>
            </div>
          </article>
        })
      }

    </div>)
}


export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  }
}

export default BlogPage