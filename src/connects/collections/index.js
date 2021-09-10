import {connect} from "react-redux";
import {collectionsSelectors, addMessageWithThunk} from "../../Store/collections";


const mapStateToProps = (state) => ({
  messages: collectionsSelectors.getCollections(state),
})

const mapDispatchToProps = (dispatch) => ({
  addCollection(message) {
    return dispatch(addMessageWithThunk(message));
  },
  
})

export const collectionsConnect = connect(mapStateToProps, mapDispatchToProps);