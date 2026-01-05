export default async function SingleBlogPage({ params }) {
  const { slug } = await params;

  return (
    <div>
      <h1> {`${slug} page `}</h1>
      <p></p>
    </div>
  );
}
