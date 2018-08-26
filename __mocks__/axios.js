import mockAxios from 'jest-mock-axios';

export const CancelToken = {
  source: () => ({
    token: 'fakeToken',
    cancel: () => { },
  }),
};

export default mockAxios;
