
import { Client, Account, ID } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.company.aora",
  projectId: "663f5ddf000d9b871d18",
  storageId: "663fcdd10033480b35db",
  databaseId: "663fb07f000cf5598e68",
  userCollectionId: "663fb0a50024e2661cf5",
  videoCollectionId: "663fb0d000191ec39f19",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform);

const account = new Account(client);
const avatarUrl = new Avatars(client);

export const createUser = () => {
  try {
    const newAccount = await account.create(email, password, username)
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
  //  .then(function (response) {
  //      console.log(response);
  //  }, function (error) {
  //      console.log(error);
  //  });
};
