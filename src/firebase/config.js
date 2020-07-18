/* eslint-disable prettier/prettier */
import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDHTDkEMncI5j6Ck9JdBoUZDYFCQj7_pKM',
  databaseURL: 'https://mykathaapp.firebaseio.com/',
  projectId: 'mykathaapp',
  appId: '1:557140948458:android:0c5ecefc1cf47d92fcae93',
};

export default Firebase.initializeApp(firebaseConfig);
