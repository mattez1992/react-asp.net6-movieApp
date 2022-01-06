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
    </BrowserRouter>

  );
}

export default App;
