// Mocks de auth
export const signInWithPopup = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export class GoogleAuthProvider {}

// Mocks de firestore
export const initializeApp = () => Promise.resolve({});
export const getFirestore = () => ({});
export const collection = jest.fn((db, collection) => Promise.resolve({}));
export const addDoc = () => Promise.resolve({});
