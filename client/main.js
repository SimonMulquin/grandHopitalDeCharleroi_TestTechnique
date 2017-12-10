import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import appReducers from '/imports/api/redux/reducers';

import MainApp from '/imports/MainApp.jsx';

// const appMiddlewares = [
//   thunk,
//   promise
// ];

createRouter({
  // Your MainApp as the top component that will get rendered in <div id='react' />
  MainApp,
  // Optional: Store subscription
  //storeSubscription,
  // Optional: An object containing your application reducers
  appReducers,
  // Optional: An array of your redux middleware of choice
  //appMiddlewares,
  // Optional: An array of your collection names
  //appCursorNames,
  // Optional: Add a redux store that watches for URL changes
  //hasUrlStore: false,
})
.then(() => logger.info('Router started'));
