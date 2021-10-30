import { createSelector } from "reselect";

const selectCollections = (state) => state.collections;

export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionName] : null
  );
