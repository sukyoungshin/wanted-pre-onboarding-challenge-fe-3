import { About, Root } from "@/pages";
import { Route, Router } from "./hooks/useRouter";

const App = () => {

  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  )
};

export default App;
