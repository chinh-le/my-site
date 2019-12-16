export const firebaseConfig = {
    // gcloudProject: process.env.GCLOUD_PROJECT, // avail in emulator
    // firebaseConfig: process.env.FIREBASE_CONFIG, // avail in emulator
    apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
    authDomain: process.env.VUE_APP_GOOGLE_AUTH_DOMAIN,
    databaseUrl: process.env.VUE_APP_GOOGLE_DATABASE_URL,
    projectId: process.env.VUE_APP_GOOGLE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_GOOGLE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_GOOGLE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_GOOGLE_APP_ID,
    measurementId: process.env.VUE_APP_GOOGLE_MEASUREMENT_ID,
    gmailAccount: process.env.VUE_APP_GMAIL_ACCOUNT,
    gmailLogin: process.env.VUE_APP_GMAIL_LOGIN,
    gmailPassword: process.env.VUE_APP_GMAIL_PASSWORD,
};
