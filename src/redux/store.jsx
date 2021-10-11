import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {contactsReducer} from './contacts';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
