import { createSelector } from "reselect";

const selectCollectionsData = (state) => state.collectionsData;

const selectCollections = createSelector(
  [selectCollectionsData],
  (collectionsData) => collectionsData.collections
);

export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionName] : null
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectCollectionsData], (collectionsData) => !!collectionsData.collections
)