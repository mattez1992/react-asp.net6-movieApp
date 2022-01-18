import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticationContext from './auth/AuthenticationContext';
import { getClaims } from './auth/handle.JWT';
import MenuNavbar from './layout/MenuNavbar';
import { claim } from './models/auth/auth.models';
import configureAxiosInterceptor from './utils/httpInterceptors';
import routes from "./utils/route-config"
import configureValidations from './validations/configureValidations';
configureValidations();
configureAxiosInterceptor();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, [])
  function isAdmin() {
    return claims.findIndex(claim => claim.name === "role" && claim.value === "admin") > -1;
  }
  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }} >
        <MenuNavbar />
        <div className='container'>
          <Switch>
            {routes.map(route =>
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin() ? <>You are not allowed to see this page</> : <route.component />}
              </Route>
            )}
          </Switch>
        </div>
        <footer className="bd-footer py-5 mt-5 bg-light">
          <div className="container">
            React Movie App {new Date().getFullYear().toString()}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>

  );
}

export default App;
