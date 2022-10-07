import Route from "@/lib/components/route";
import Router from "@/lib/components/router";
import { About, Root } from "@/pages";

const App = () => {

  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  )
};

export default App;
