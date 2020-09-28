import Header from "./Header";
import Meta from "./Meta";

export default function Layout({ siteTitle, siteDescription, children }) {
  return (
    <section className="layout">
      <Meta siteTitle={siteTitle} description={siteDescription} />
      <Header siteTitle={siteTitle} />
      <div className="content">{children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
    </section>
  );
}
