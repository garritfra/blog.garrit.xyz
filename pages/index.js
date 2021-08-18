import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Home from "../components/Home";
import matter from "gray-matter";
import Page from "../components/Page";

const Index = (props) => {
    return (
        <Page>
            <ReactMarkdown source={props.markdownBody} />
        </Page>
    );
};

export async function getStaticProps() {
    const content = await import(`../content/index.md`);
    const data = matter(content.default);

    return {
        props: {
            siteTitle: "~/garrit",
            markdownBody: data.content,
        },
    };
}

export default Index;
