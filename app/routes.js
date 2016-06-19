// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getHooks } from 'utils/hooks';
import { clearError } from './containers/HomePage/actions';
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getHooks factory
  const { injectReducer, injectSagas } = getHooks(store);
  function clearErrorMessage() {
    store.dispatch(clearError());
  }
  function checkAuth(nextState, replace) {
    const loggedIn = store.getState().getIn(['homePage', 'loggedIn']);
    store.dispatch(clearError());

  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
    if (nextState.location.pathname !== '/afterlogin') {
      if (loggedIn) {
        if (nextState.location.state && nextState.location.pathname) {
          replace(nextState.location.pathname);
        } else {
          replace('/');
        }
      }
    } else {
    // If the user is already logged in, forward them to the homepage
      if (!loggedIn) {
        if (nextState.location.state && nextState.location.pathname) {
          replace(nextState.location.pathname);
        } else {
          replace('/');
        }
      }
    }
  }
  return [
    {
      path: '/',
      name: 'homePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      indexRoute: {
        name: 'homeItemPage',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('containers/HomeItemPage/reducer'),
            System.import('containers/HomeItemPage/sagas'),
            System.import('containers/HomeItemPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('homeItemPage', reducer.default);
            injectSagas(sagas.default);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      childRoutes: [
        {
          name: 'check',
          onEnter: checkAuth,
          childRoutes: [
            {
              onEnter: clearErrorMessage,
              path: '/register',
              name: 'register',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/Register'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([component]) => {
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            }, {
              path: '/login',
              name: 'login',
              onEnter: clearErrorMessage,
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/Login'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([component]) => {
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            }, {
              path: 'afterlogin',
              name: 'afterLogin',
              onEnter: clearErrorMessage,
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/AfterLogin/reducer'),
                  System.import('containers/AfterLogin/sagas'),
                  System.import('containers/AfterLogin'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('afterLogin', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
      ],
    }, {
      path: '*',








      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
