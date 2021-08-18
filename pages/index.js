import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Page from "../components/Page";

const Index = (props) => {
    return (
        <Page title={props.title}>
            <ReactMarkdown source={props.markdownBody} />
        </Page>
    );
};

export async function getStaticProps() {
    const content = await import(`../content/index.md`);
    const data = matter(content.default);

    return {
        props: {
            title: data.data.title,
            markdownBody: data.content,
        },
    };
}

export default Index;
