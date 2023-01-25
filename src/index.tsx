import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/state'
import {rerenderApp} from "./render";


rerenderApp(state)