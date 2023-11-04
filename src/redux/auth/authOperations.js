import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifyOptions } from 'helper/NotifyOptions';
import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(URL + '/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      Notify.failure(
        'Oups, seems like user with this email or username already registered.',
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(URL + '/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      Notify.failure(
        'Oups, seems like this user is not regidtered.',
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(URL + '/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  if (!token) {
    return thunkAPI.rejectWithValue('No valid token');
  }

  setAuthHeader(token);
  try {
    const { data } = await axios.get(URL + '/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
