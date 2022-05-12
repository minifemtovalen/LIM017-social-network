import
{ initializeApp, getFirestore }
  from './Firebase-util.js';

import { firebaseConfig } from './config.js';

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
