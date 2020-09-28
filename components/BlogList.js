import Link from "next/link";

const BlogList = ({ posts }) => {
  const blogElements = posts
    .sort((a, b) => a.frontmatter.date < b.frontmatter.date)
    .map((post) => (
      <div>
        <Link href={"/posts/" + post.slug}>
          <a>{post.frontmatter.title}</a>
        </Link>
        <style jsx>
          {`
            a {
              margin-top: 1em;
            }
          `}
        </style>
      </div>
    ));
  return (
    <div>
      {blogElements}
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default BlogList;
