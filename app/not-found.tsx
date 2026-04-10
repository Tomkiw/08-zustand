import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found METADATA",
  description: "Sorry, the page you are looking for does not exist. METADATA",
  openGraph: {
    title: "404 - Page not found OG",
    description: "Sorry, the page you are looking for does not exist. OG",
    url: "https://notehub.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*qwbrw9*_ga*MTE2Mjc1MTUxLjE3NzU0ODYwMjM.*_ga_PW0T7S5LDQ*czE3NzU4MDkyOTIkbzE1JGcxJHQxNzc1ODA5MzEzJGozOSRsMCRoMA..",
        width: 1200,
        height: 630,
        alt: "image notehub NOT FOUND ",
      },
    ],
  },
};

const NotFound = () => {
  return (
    <>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </>
  );
};

export default NotFound;
