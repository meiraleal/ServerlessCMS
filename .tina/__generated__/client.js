import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/9eaa0998-03a0-4fc3-af03-71901b9820ac/github/main', token: '58fdb71a1c99e0bbe0e6004eca5a550ede99100a', queries });
export default client;
  