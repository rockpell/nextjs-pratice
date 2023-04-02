export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://swapi.dev/api/people/1");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default function StaticProps({ posts }: any) {
  return <div>{JSON.stringify(posts)}</div>;
}
