import Link from "next/link";

export default function Profile(props) {
  return (
    <div className="profile">
      <img src="/me.jpg"></img>
      <h2>Garrit Franke</h2>
      <p>Random tips, tricks and thoughts about software</p>
      <Link href="https://garrit.xyz">Website</Link>
      <br />
      <Link href="https://github.com/garritfra">Github</Link>
      <br />
      <Link href="https://www.linkedin.com/in/garritfranke/">LinkedIn</Link>
      <br />
      <Link href="/rss.xml">RSS</Link>
      <style jsx>
        {`
          img {
            width: 12rem;
          }

          Link {
            margin: 1rem;
          }

          @media (max-width: 767px) {
            .profile {
              padding: 1.5rem 1.25rem;
            }
          }
        `}
      </style>
    </div>
  );
}
