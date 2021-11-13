import React, { useState } from "react";
import Rating from "../productCard/Rating";
import CustomButton from "../customButton/CustomButton";
import { ReactComponent as CartIcon } from "../../assets/images/cartIcon.svg";
import { withRouter } from "react-router";
import ProductDescription from "./productDescription/ProductDescription";
import UserReview from "./userReview/UserReview";
import "./productPreview.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import Snackbar from "../snackbar/Snackbar";

const ProductPreview = ({ productDetails, id, history }) => {
  const [chosenSize, setChosenSize] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const {
    name,
    price,
    img,
    rating,
    metaDescription,
    sizes,
    description,
    reviews,
  } = productDetails;
  const [snackbar, setSnackbar] = useState({
    hidden: true,
    msg: "",
    type: ""
  })

  const dispatch = useDispatch();

  const renderImgOptions = img.map(({ url }, i) => {
    return (
      <div
        onClick={() => setImgIndex(i)}
        className={`img-option ${i === imgIndex ? "active-option" : ""}`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${url}`})`,
        }}
      ></div>
    );
  });

  const renderSizes = () => {
    return sizes.map((size) => (
      <button
        key={size}
        onClick={() => setChosenSize(size)}
        className={`size ${chosenSize === size ? "chosen" : ""}`}
      >
        {size}
      </button>
    ));
  };

  const onBuyNow = () => {
    if (!chosenSize) {
      setSnackbar({hidden:false, msg:"Oops! You haven't selected any size!!", type:"negative"})
      setTimeout(()=> setSnackbar({hidden:"true"}), 2300)
      return;
    }
    dispatch(
      addToCart({
        id: `${id}${chosenSize}`,
        name,
        img,
        price,
        selectedSize: chosenSize,
      })
    );
    setChosenSize(null);
    history.push("/checkout");
  };
  const onAddToCart = () => {
    if (!chosenSize) {
      setSnackbar({hidden:false, msg:"Oops! You haven't selected any size!!", type:"negative"})
      setTimeout(()=> setSnackbar({hidden:"true"}), 2300)
      return;
    }
    dispatch(
      addToCart({
        id: `${id}${chosenSize}`,
        name,
        img,
        price,
        selectedSize: chosenSize,
      })
    );
    setSnackbar({hidden:false, msg:"Product added to your cart!", type:"positive"})
    setTimeout(()=> setSnackbar({hidden:"true"}), 2300)
    setChosenSize(null);
  };
  return (
    <div>
      <Snackbar {...snackbar} />
      <div className="product-preview">
        <div className="img-container">
          <div className="img-options">{renderImgOptions}</div>
          <div className="main-img-container">
            <div
              className="main-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + `/images/${img[imgIndex].url}`
                })`,
              }}
            ></div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-price">
            {`$${price.whole}.${price.fraction}`}
          </div>
          <div className="product-rating">
            <Rating stars={rating} width="20px" height="20px" />
            <div className="rating-in-num">{rating}/5</div>
          </div>
          <div className="description-header">Description:</div>
          <hr className="hr" />
          <div className="product-meta-decription">{metaDescription}</div>
          <hr className="hr" />

          <div className="size-selection">
            Select Size:
            <div className="sizes">{renderSizes()} </div>
          </div>

          <div className="buttons">
            <CustomButton
              onClick={onBuyNow}
              btn="secondary"
              width="126px"
              height="40px"
              shadow="true"
            >
              Buy Now
            </CustomButton>
            <CustomButton btn="grey" shadow="true" onClick={onAddToCart}>
              <CartIcon />
            </CustomButton>
          </div>
        </div>
      </div>
      <ProductDescription>{description}</ProductDescription>
      <UserReview reviews={reviews} rating={rating} />
    </div>
  );
};

export default withRouter(ProductPreview);
