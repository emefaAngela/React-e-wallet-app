import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from "./transaction";

export default configureStore({
  reducer: {
    transaction:transactionReducer
  },
});

