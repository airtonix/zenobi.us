export default function BaseLayout (props) {
    return (
    <div className={'site-layout'}>
        <header className="site-layout__header">
          <div className="site-layout__navigation" links={routes}></div>
        </header>
        <div className="site-layout__content">
          {render()}
        </div>
        <div className="site-layout__footer"></div>
    </div>
    )
}