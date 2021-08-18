export default function Home(props) {
    return (
        <div className="home">
            <h3 className="home__headline">
                I'm <b>Garrit</b>, a generalist software developer
            </h3>
            <p>my interests include...</p>
            <ul className="home__list">
                <li>Fullstack Development</li>
                <li>System Administration</li>
                <li>Programming Language Design</li>
                <li>Minimalist Software</li>
            </ul>

            <style jsx>
                {`
                    .home {
                        margin-top: 6rem;
                    }
                     .home__headline {
                         margin-bottom: 2rem;
                    }

                    .home__list {
                        margin: 0 0 1.5em 3em;
                    }
                `}
            </style>
        </div>
    );
}
