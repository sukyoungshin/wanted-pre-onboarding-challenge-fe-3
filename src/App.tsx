import Route from "@/lib/components/route";
import Router from "@/lib/components/router";
import { URLs } from "@/common/urls-utils";
import { About, Root } from "@/pages";

const App = () => {

  return (
    <Router>
      <Route path={URLs.root} component={<Root />} />
      <Route path={URLs.about} component={<About />} />
    </Router>
  )
};

export default App;
