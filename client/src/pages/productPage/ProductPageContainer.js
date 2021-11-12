import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import { selectIsProductsLoaded } from "../../redux/reducers/product/products-selectors";
import ProductPage from "./ProductPage";



const mapStateToProps = createStructuredSelector({
    isLoading: (state)=> !selectIsProductsLoaded(state)
})

const ProductPageContainer = connect(mapStateToProps)(WithSpinner(ProductPage))

export default ProductPageContainer