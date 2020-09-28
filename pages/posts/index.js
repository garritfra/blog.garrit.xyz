import Layout from "../../components/Layout";
import BlogList from "../../components/BlogList";

const Index = (props) => {
  return (
    <Layout pathname="/" siteTitle="/dev.space" siteDescription="">
      <section>
        <BlogList />
      </section>
    </Layout>
  );
};

export default Index;
