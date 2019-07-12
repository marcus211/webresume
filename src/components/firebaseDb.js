import firebase from 'firebase/app';
import '@firebase/auth'
import '@firebase/firestore'

//https://github.com/firebase/firebase-js-sdk/issues/807
const firebaseConfig = {
    projectId: "reactwebcv",
    apiKey: "AIzaSyBShm-vM0AWd53cOvpXYsZ7TI2bBRwS8_4",
    authDomain: "reactwebcv.firebaseapp.com",
    databaseURL: "https://reactwebcv.firebaseio.com"
};
// 初始化firebase
firebase.initializeApp(firebaseConfig);
// 設定資料庫
const firebaseDb = firebase.firestore();
//把資料庫輸出給其他元件使用
export default firebaseDb;