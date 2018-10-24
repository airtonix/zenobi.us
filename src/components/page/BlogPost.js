import PageBase from './PageBase';

export default function BlogPage ({ isLoading, page }) {
	return <PageBase mixClassname="blog-page">
    {isLoading && "Loading..."}
    {!isLoading &&
      page.node && (
        <article>
          <h1>{page.node.title}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
	</PageBase>
};