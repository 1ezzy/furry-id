import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { browser } from '$app/environment';

const firebaseConfig = {
	apiKey: 'AIzaSyDo_IVGgYo6cXI8YaveBhNyOPKa_ULpmJE',
	authDomain: 'furry-id-firebase.firebaseapp.com',
	projectId: 'furry-id-firebase',
	storageBucket: 'furry-id-firebase.firebasestorage.app',
	messagingSenderId: '40053184452',
	appId: '1:40053184452:web:b37b7796642830f02fb691',
	measurementId: 'G-1Z28N2Y7FS'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize services (only in browser)
export const storage = getStorage(app);
export const db = getFirestore(app);
export const analytics = browser ? getAnalytics(app) : null;
