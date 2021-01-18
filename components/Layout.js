import { useState, useLayoutEffect } from "react";

import Header from "./Header";
import Meta from "./Meta";
import Profile from "./Profile";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Layout({
  siteTitle,
  siteDescription,
  children,
  pathname,
}) {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <section className={`layout`}>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <Header siteTitle="/dev.space" />
      <div className="content">{children}</div>
      {windowWidth <= 768 && <Profile className="content"></Profile>}
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
