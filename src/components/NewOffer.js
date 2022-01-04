import React from "react";

const NewOffer = () => {
  return (
    <div className="offerPopup">
      Offer popup
      <form className="offerForm">
        <input type="text" className="offerTitle" />
        <input type="text" className="offerDescription" />
        <input type="text" className="offerCategory" />
        <input type="text" className="offerPrice" />
        <input type="text" className="offerImg" />
        <input type="text" className="offerContacts" />
        <input type="text" className="offerComments" />
      </form>
    </div>
  );
};

export default NewOffer;

// title – offer title
// description – detailed offer description
// category – store defined category
// price – price in ZANO
// img-url – ipfs/arweave link to offer image
// contact – preferred way of communication (telegram, email, zano alias)
// comments -additional comments about the offer
