import firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAgGj1Me-kmkP9J9TIl4yvwqntVks6fI7k',
	authDomain: 'first-react-web.firebaseapp.com',
	databaseURL: 'https://first-react-web.firebaseio.com',
	projectId: 'first-react-web',
	storageBucket: 'first-react-web.appspot.com',
	messagingSenderId: '428090313440',
	appId: '1:428090313440:web:11d0d7ead7c06f0419de85',
	measurementId: 'G-DVBMQTE4JH',
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
