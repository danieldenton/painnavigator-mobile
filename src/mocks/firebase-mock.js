export const firebase = {
    auth: jest.fn(() => ({
      signInWithEmailAndPassword: jest.fn(),
    }))
  };