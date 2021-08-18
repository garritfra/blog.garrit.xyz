import { useLayoutEffect, useState } from "react";
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

export default function Header(props) {
    const [windowWidth, windowHeight] = useWindowSize();

    return (
        <header className="header">
            <nav className="nav" role="navigation" aria-label="main navigation">
                <a href="/">
                    <h1>{props.siteTitle}</h1>
                </a>
            </nav>
            <style jsx>
                {`
                    h1 {
                        margin-bottom: 0;
                    }
                    h1:hover {
                        cursor: pointer;
                    }
                    nav {
                        padding: 1.5rem 1.25rem;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                        align-items: center;
                    }
                    @media (min-width: 768px) {
                        .header {
                            left: 0;
                            top: 0;
                        }
                        .nav {
                            padding: 2rem;
                            width: 100vw;
                            height: 100%;
                            border-bottom: none;
                            flex-direction: column;
                            align-items: flex-start;
                        }
                    }
                `}
            </style>
        </header>
    );
}
