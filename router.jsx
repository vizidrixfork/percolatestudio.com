// for now
if (Meteor.isClient) {
  
var Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  NotFoundRoute = Router.NotFoundRoute,
  Redirect = Router.Redirect;

routes = (
  <Route name="appBody" path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="how" path="/how" handler={How}/>

    <Route path="/what">
      <Route name="product" path="/:name" handler={Product}/>
      <DefaultRoute name="what" handler={What}/>
    </Route>

    <Route path="/careers">
      <Route name="job" path="/:name" handler={Job}/>
      <DefaultRoute name="careers" handler={Careers}/>
    </Route>

    <Route path="/styleguide/base" handler={StyleguideBase}/>
    <Route path="/styleguide/case-study" handler={StyleguideCaseStudy}/>

    {/* TODO: make this a server-side route */}
    <Redirect from="/case-studies/verso" to="what" params={{name: 'verso'}}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

} //end for now

