import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import counter from './reduser'
import App from './App'
import './index.css'


let destination = document.querySelector('#container')

const store = createStore(counter)//Хранилище
ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	destination
	);  
