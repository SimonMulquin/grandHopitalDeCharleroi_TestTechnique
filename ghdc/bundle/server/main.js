import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import { serverReducers as appReducers } from '/imports/api/redux/reducers';

import MainApp from '/imports/MainApp.jsx';
createRouter({
  // Your MainApp as the top component rendered and injected in the HTML payload
  MainApp,
  // Optional: Store subscription
  //storeSubscription,
  // Optional: An object containing your application reducers
  appReducers,
  // Optional: An object containing the cursors required as data context
  //appCursors,
  // Optional: An object with keys on URL with query parameters
  //urlQueryParameters,
});
logger.info('Router started');
