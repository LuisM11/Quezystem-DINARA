
import { defaultApi } from "./index";
import { sleep } from "./index";

export const authenticate = async credentials => {
  await sleep(1.5)
  return  defaultApi.post("/api/v1/login", credentials)
  
  
};




