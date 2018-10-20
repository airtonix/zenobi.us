import Page from './page';

export default function BlogPage ({ isLoading, page }) {
	return <Page mixClassname="blog-page">
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
	</Page>
};