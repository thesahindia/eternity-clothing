import { connect } from "react-redux";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import { createStructuredSelector } from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/reducers/collection/collection.selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionsContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionsContainer;
