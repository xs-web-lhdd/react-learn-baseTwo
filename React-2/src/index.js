import React from 'react';
import ReactDOM from 'react-dom';
// import App from './lifecycle-new/App';
// import App from './list-2-practice/App'
import App from './list2-context/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
