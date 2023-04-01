import { defaultApi } from "./index";
import { sleep } from "./index";

export const getUsers = async ({ queryKey }) => {
  await sleep(1.5);
  return defaultApi.get("/user/getUsers",{
    headers: { Authorization: `Bearer ${ queryKey[1]}` }
  });
};
