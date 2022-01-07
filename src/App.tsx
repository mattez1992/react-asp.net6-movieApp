import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuNavbar from './layout/MenuNavbar';
import routes from "./utils/route-config"
import configureValidations from './validations/configureValidations';
configureValidations();


function App() {

  return (
    <BrowserRouter>
      <MenuNavbar />
      <div className='container'>
        <Switch>
          {routes.map(route =>
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          )}
        </Switch>

      </div>
      <footer className="bd-footer py-5 mt5 bg-light">
        <div className="container">
          React Movie App {new Date().getFullYear().toString()}
        </div>
      </footer>
    </BrowserRouter>

  );
}

export default App;
