/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCpBrZpW3VDF3xXQtMHSt1hFcL4mGQjmqA",
  authDomain: "project-posh.firebaseapp.com",
  projectId: "project-posh",
  storageBucket: "project-posh.appspot.com",
  messagingSenderId: "984325612857",
  appId: "1:984325612857:web:8715ed8b9de2ab8edfb4e8",
  measurementId: "G-TNSLTHKGJ5",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
