import Header from "./Header";
import Meta from "./Meta";

export default function Layout({
  siteTitle,
  siteDescription,
  children,
  pathname,
}) {
  return (
    <section className={`layout ${pathname == "info" && "info_page"}`}>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
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
          .layout .info_page {
            color: #ebebeb;
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
