import Head from "next/head";

export default function Meta(props) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{props.siteTitle}</title>
                <meta
                    name="Description"
                    content="Random thoughts, tips and rants about software"
                ></meta>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                <script
                    async
                    defer
                    data-domain="blog.garrit.xyz"
                    src="https://analytics.slashdev.space/js/plausible.js"
                ></script>
            </Head>
            <style jsx global>
                {`
                    @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
                    * {
                        box-sizing: inherit;
                    }
                    html {
                        box-sizing: border-box;
                        overflow-y: scroll;
                    }
                    body {
                        margin: 0;
                        font-family: "Work Sans", "Helvetica Neue", Helvetica,
                            sans-serif;
                        overflow-x: hidden;
                        color: #000;
                        font-size: 16px;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    a {
                        text-decoration: none;
                        color: inherit;
                        transition: opacity 0.2s ease;
                    }
                    a:hover {
                        transition: opacity 0.2s ease;
                        opacity: 0.5;
                        text-decoration-color: inherit;
                    }
                    ul {
                        margin: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        list-style-position: inside;
                        list-style-image: none;
                    }
                    ol {
                        margin: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        list-style-position: inside;
                        list-style-image: none;
                    }
                    ul,
                    ol,
                    p {
                        margin-bottom: 1.45rem;
                    }
                    img {
                        max-width: 100%;
                    }
                    img,
                    figure,
                    table,
                    fieldset {
                        margin-left: 0;
                        margin-right: 0;
                        margin-top: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        margin-bottom: 1.45rem;
                    }
                    pre {
                        margin-left: 0;
                        margin-right: 0;
                        margin-top: 0;
                        margin-bottom: 1.45rem;
                        line-height: 1.42;
                        background: hsla(0, 0%, 0%, 0.04);
                        border-radius: 3px;
                        overflow: auto;
                        word-wrap: normal;
                        padding: 1.45rem;
                    }
                    table {
                        line-height: 1.45rem;
                        border-collapse: collapse;
                        width: 100%;
                    }
                    blockquote {
                        margin-left: 1.45rem;
                        margin-right: 1.45rem;
                        margin-top: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        margin-bottom: 1.45rem;
                    }
                    strong {
                        font-weight: bold;
                    }
                    li {
                        margin-bottom: calc(1.45rem / 2);
                    }
                    ol li {
                        padding-left: 0;
                    }
                    ul li {
                        padding-left: 0;
                    }
                    li > ol {
                        margin-left: 1.45rem;
                        margin-bottom: calc(1.45rem / 2);
                        margin-top: calc(1.45rem / 2);
                    }
                    li > ul {
                        margin-left: 1.45rem;
                        margin-bottom: calc(1.45rem / 2);
                        margin-top: calc(1.45rem / 2);
                    }
                    blockquote *:last-child {
                        margin-bottom: 0;
                    }
                    li *:last-child {
                        margin-bottom: 0;
                    }
                    p *:last-child {
                        margin-bottom: 0;
                    }
                    li > p {
                        margin-bottom: calc(1.45rem / 2);
                    }
                    code {
                        line-height: 1.45rem;
                    }
                    p code {
                        background: hsla(0, 0%, 0%, 0.1);
                        padding: 0 0.4rem;
                    }
                    @media (prefers-reduced-motion) {
                        * {
                            transition: none !important;
                        }
                    }

                     {
                        /* //TYPOGRAPHY------------------------------------- */
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    p {
                        font-family: "Work Sans", "Helvetica Neue", Helvetica,
                            sans-serif;
                        margin-left: 0;
                        margin-right: 0;
                        margin-top: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 0;
                        margin-bottom: 1.45rem;
                        color: inherit;
                        text-rendering: optimizeLegibility;
                    }
                    h1,
                    h2,
                    h3,
                    h4 {
                        font-weight: 500;
                    }
                    h1 {
                        font-size: 3rem;
                        letter-spacing: -1px;
                        line-height: 1.1875;
                    }
                    h2 {
                        font-size: 2.5rem;
                        letter-spacing: -0.75px;
                        line-height: 1.2;
                    }
                    h3 {
                        font-size: 1.7rem;
                        line-height: 1.1875;
                        color: #a0a0a0;
                        font-weight: normal;
                    }
                    h4 {
                        font-size: 1.3rem;
                    }
                    p,
                    li {
                        font-size: 1.2rem;
                        letter-spacing: -0.5px;
                        line-height: 1.5;
                        color: #464646;
                    }
                    @media (min-width: 1280px) {
                        h1 {
                            letter-spacing: -1px;
                            line-height: 1.1875;
                        }
                        h2 {
                            letter-spacing: -0.75px;
                            line-height: 1.1667;
                        }
                        h3 {
                            letter-spacing: -0.5px;
                            line-height: 1.1875;
                            color: #a0a0a0;
                            font-weight: normal;
                        }
                        p {
                            line-height: 1.4375;
                        }
                    }

                    // FIXME: I could not get this to work inside the post component,
                    // but here it apparently works. Maybe an overriding selector?
                    .page__body a,
                    .page__footer a {
                        text-decoration: underline;
                    }

                    @media (prefers-color-scheme: dark) {
                        :root {
                            background-color: #161618;
                            color: #dbd7db;
                        }

                        html {
                            scrollbar-color: #dbd7db #161618 !important;
                        }

                        h1,
                        h2,
                        h3,
                        h4,
                        p,
                        pre,
                        a,
                        ul,
                        li,
                        blog__body > * {
                            color: #dbd7db;
                        }

                        .button__link {
                            background-color: #67676c;
                        }

                        a {
                            color: #dbd7db;
                        }


                    article a[href^="http"]::after,
                    article a[href^="https://"]::after {
                        filter: invert(100%);
                    }
                    }

                    article a[href^="http"]::after,
        article a[href^="https://"]::after
                    {
                        content: "";
                        width: 11px;
                        height: 11px;
                        margin-left: 4px;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'/%3E%3Cpath fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'/%3E%3C/svg%3E");
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        display: inline-block;
                    }
                `}
            </style>
        </>
    );
}
