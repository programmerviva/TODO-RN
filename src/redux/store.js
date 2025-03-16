import AsyncStorage from "@react-native-async-storage/async-storage"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList:[],
  whitelist: ['todo'], // only persist todos state
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
  
})

export const persistor = persistStore(store)