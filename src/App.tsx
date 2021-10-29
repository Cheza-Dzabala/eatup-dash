import React from "react";

import {
  Authenticator,
  buildCollection,
  FirebaseCMSApp,
  NavigationBuilder,
  NavigationBuilderProps
} from "@camberi/firecms";

import "typeface-rubik";
import "typeface-space-mono";
import { userSchema } from "./types/users";
import { foodItemSchema } from "./types/food_items";
import { menuSchema } from "./types/menu";
import { specialsSchema } from "./types/special";
import { offersSchema } from "./types/offers";

// Define firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBupcovjF8lvURxJe46RSisbO74Igfe9YA",
  authDomain: "eatupapp-2e834.firebaseapp.com",
  projectId: "eatupapp-2e834",
  storageBucket: "eatupapp-2e834.appspot.com",
  messagingSenderId: "883038579089",
  appId: "1:883038579089:web:aabc3472360856b8091230",
  measurementId: "G-TGK1Z1W5VD"
};


export default function App() {

  const navigation: NavigationBuilder = async ({
    user,
    authController
  }: NavigationBuilderProps) => {

    return ({
      collections: [
        buildCollection({
          group: "admin",
          path: "users",
          schema: userSchema,
          name: "Users",
          permissions: ({ authController }) => ({
            edit: false,
            create: true,
            // we have created the roles object in the navigation builder
            delete: authController.extra.roles.includes("admin")
          }),
        }),
        buildCollection({
          group: "food",
          path: "food_items",
          schema: foodItemSchema,
          name: "Food Items",
          permissions: ({ authController }) => ({
            edit: true,
            create: true,
            // we have created the roles object in the navigation builder
            delete: authController.extra.roles.includes("admin")
          }),
        }),
        buildCollection({
          group: "food",
          path: "menu",
          schema: menuSchema,
          name: "Menus",
          permissions: ({ authController }) => ({
            edit: true,
            create: true,
            // we have created the roles object in the navigation builder
            delete: authController.extra.roles.includes("admin")
          }),
        }),
        buildCollection({
          group: "food",
          path: "specials",
          schema: specialsSchema,
          name: "Specials",
          permissions: ({ authController }) => ({
            edit: true,
            create: true,
            // we have created the roles object in the navigation builder
            delete: authController.extra.roles.includes("admin")
          }),
        }),
        buildCollection({
          group: "food",
          path: "offers",
          schema: offersSchema,
          name: "Offers",
          permissions: ({ authController }) => ({
            edit: true,
            create: true,
            // we have created the roles object in the navigation builder
            delete: authController.extra.roles.includes("admin")
          }),
        }),


      ]
    });
  };

  const authenticator: Authenticator = async ({ user, authController }) => {
    console.log("Allowing access to", user?.email);
    // This is an example of retrieving async data related to the user
    // and storing it in the user extra field.
    const sampleUserData = await Promise.resolve({
      roles: ["admin"]
    });
    authController.setExtra(sampleUserData);
    return true;
  };

  return <FirebaseCMSApp
    name={"Eatup App"}
    authentication={authenticator}
    navigation={navigation}
    firebaseConfig={firebaseConfig}
  />;
}