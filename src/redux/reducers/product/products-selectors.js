import { createSelector } from "reselect";

const selectProductsData = (state) => state.productsData;

const selectProducts = createSelector(
  [selectProductsData],
  (productsData) => productsData.products
);

export const selectProduct = (id) =>
  createSelector([selectProducts], (products) => products[id]);

export const selectIsProductsLoaded = createSelector(
  [selectProductsData],
  (productsData) => !!productsData.products
);
