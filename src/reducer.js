// reducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setData } from './actions';

const initialState = {
  data: null,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(setData, (state, action) => {
    state.data = action.payload;
  });
});

export default rootReducer;
