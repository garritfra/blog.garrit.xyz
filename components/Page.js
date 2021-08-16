import Layout from "./Layout";

export default function Page(props) {
    const { title, date } = props;
  return (
    <Layout siteTitle={title}>
      <article className="blog">
        <div className="page__info">
          <h1>{title}</h1>
          { date && <h3>{ date }</h3> }
        </div>
        <div className="page__body">
            { props.children }
        </div>
        <div className="page__footer">
        </div>
      </article>
      <style jsx>
        {`
          .page h1 {
            margin-bottom: 0.7rem;
          }
          .page__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
          }
          .page__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }
          .page__info {
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          .page__info h1 {
            margin-bottom: 0.66rem;
          }
          .page__info h3 {
            margin-bottom: 0;
          }
          .page__body {
            width: 100%;
            padding: 0 1.25rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .page__body a {
            text-decoration: underline;
            padding-bottom: 1.5rem;
          }
          .page__body:last-child {
            margin-bottom: 0;
          }
          .page__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
          }
          .page__body ul {
            list-style-type: circle;
          }
          .page__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }
          .page__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .page__footer h2 {
            margin-bottom: 0;
          }
          .page__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .page__footer a svg {
            width: 20px;
          }
          @media (max-width: 768px) {
            .page__footer {
              display: none;
            }
          }
          @media (min-width: 768px) {
            .page {
              display: flex;
              flex-direction: column;
            }
            .page__body {
              max-width: 800px;
              padding: 0 2rem;
            }
            .page__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .page__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .page__hero {
              min-height: 600px;
              height: 75vh;
            }
            .page__info {
              text-align: center;
              padding: 2rem 0;
            }
            .page__info h1 {
              max-width: 500px;
              margin: 0 auto 0.66rem auto;
            }
            .page__footer {
              padding: 2.25rem;
            }
          }
          @media (min-width: 1440px) {
            .page__hero {
              height: 70vh;
            }
            .page__info {
              padding: 3rem 0;
            }
            .page__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}

