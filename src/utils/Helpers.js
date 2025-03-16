import { Href, router } from "expo-router"


export const resetAndNavigate = (newPath)=>{
  if(router.canGoBack()){
    router.dismissAll()
  }
  router.replace(newPath)
}