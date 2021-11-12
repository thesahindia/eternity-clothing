import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CustomButton from "../customButton/CustomButton";
import { ReactComponent as PackageIcon } from "../../assets/images/package.svg";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/actions";

const StripeCheckoutButton = ({ amountToPay }) => {
  const dispatch = useDispatch()
  const priceForStripe = amountToPay * 100;
  const publishableKey =
    "pk_test_51Jue0kSCtv5oIPfrPJkOieQ5TmzKbMz9x8JqYrV2u13yevt7p4f7WSJtM29jrcitBl9BiETQIeZyakvM0H562MIy00HCUDyt44";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Succesful")
       dispatch(emptyCart())
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Payment failed!! Please try again with the provided test credit card."
        );
      });
  };

  return (
    <StripeCheckout
      name="Eternity Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/bxB.svg"
      description={`Your total is $${amountToPay}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton
        btn="secondary"
        width="170px"
        height="45px"
        fontSize="large"
      >
        <i style={{ padding: "1px 8px 0 0" }}>
          <PackageIcon />
        </i>
        Place Order
      </CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
