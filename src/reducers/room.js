import cuid from 'cuid';
export const cuidFn = cuid;

export default (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};