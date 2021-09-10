const getCollections = (state) => state.collections.messages || [];

export const collectionsSelectors = {
  getCollections
}