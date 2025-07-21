import React from 'react'
import './App.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import Page from './pages'
import { ThemeProvider } from 'styled-components'
import theme from './ui-kit/theme/theme'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCo-jYQTLW8Y8DelXbmM378RRG0-LKIgZs',
	authDomain: 'purriin.firebaseapp.com',
	projectId: 'purriin',
	storageBucket: 'purriin.appspot.com',
	messagingSenderId: '449828997607',
	appId: '1:449828997607:web:02206d6a824b5d27195542',
	measurementId: 'G-YZK7X406KV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Page />
		</ThemeProvider>
	)
}

export default App
