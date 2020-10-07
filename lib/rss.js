const fs = require("fs");
const path = require("path");

const matter = require("gray-matter");
const rfc822Date = require("rfc822-date");

const files = fs
  .readdirSync(path.join(__dirname, "../content/posts"))
  .map((filename) => {
    return {
      filename,
      content: fs
        .readFileSync(path.join(__dirname, "../content/posts", filename))
        .toString(),
    };
  });

const keys = Array.from(files.keys());

const posts = files.map((file) => {
  // Create slug from filename
  const slug = file.filename
    .replace(/^.*[\\\/]/, "")
    .split(".")
    .slice(0, -1)
    .join(".");
  // Parse yaml metadata & markdownbody in document
  const document = matter(file.content);
  return {
    frontmatter: document.data,
    markdownBody: document.content,
    slug,
  };
});

const getRssXml = (blogPosts) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
      <rss version="2.0">
        <channel>
            <title>/dev.space</title>
            <link>https://slashdev.space</link>
            <description>/dev.space</description>
            <language>en</language>
            <lastBuildDate>${rfc822Date(
              new Date(latestPostDate)
            )}</lastBuildDate>
            ${rssItemsXml}
        </channel>
      </rss>`;
};

const blogPostsRssXml = (blogPosts) => {
  let latestPostDate = "";
  let rssItemsXml = "";
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.frontmatter.date);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.frontmatter.date;
    }
    rssItemsXml += `
          <item>
            <title>${post.frontmatter.title}</title>
            <link>
              https://slashdev.space/posts/${post.slug}
            </link>
    
            <pubDate>${rfc822Date(new Date(postDate))}</pubDate>
            <description>
            <![CDATA[${post.frontmatter.title}]]>
            </description>
        </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
};

const feedPath = path.join(__dirname, "../public/rss.xml");

fs.writeFileSync(feedPath, getRssXml(posts), { flag: "w" });
