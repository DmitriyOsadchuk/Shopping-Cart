import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import firebase from 'firebase';
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import cartReducer from './reducers/cartReducer';
import sortingReducer from './reducers/sortingReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


const rrfConfig = {
  userProfile: 'users'
};
const firebaseConfig = {
  apiKey: "AIzaSyAJtlBjSg1lwsRvJGYSgoxpbY0mmdzy8HY",
  authDomain: "test-a1b47.firebaseapp.com",
  databaseURL: "https://test-a1b47.firebaseio.com",
  projectId: "test-a1b47",
  storageBucket: "test-a1b47.appspot.com",
  messagingSenderId: "49557590150",
  appId: "1:49557590150:web:196dd6a8f77fdb4f9cc107"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  from: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cart: cartReducer,
  sorting: sortingReducer,
  form: formReducer,
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase)
    
  )
);

export default store;
