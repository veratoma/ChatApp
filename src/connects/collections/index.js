import {connect} from "react-redux";
import {collectionsSelectors, createAddCollection} from "../../Store/collections";


const mapStateToProps = (state) => ({
  collections: collectionsSelectors.getCollections(state),
})

const mapDispatchToProps = (dispatch) => ({
  addCollection(message) {
    return dispatch(createAddCollection(message));
  },
  
})


export const collectionsConnect = connect(mapStateToProps, mapDispatchToProps);