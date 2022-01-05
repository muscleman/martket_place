import React, { useState } from "react";
import tshirt from "./../img/Tshirt-design.jpg";

const NewOffer = () => {
  const [title, setTitle] = useState("Offer title");
  const [description, setDescription] = useState("Detailed offer description");
  const [category, setCategory] = useState("Category-Item");
  const [price, setPrice] = useState("10");
  const [imageUrl, setImageUrl] = useState("");
  const [contact, setContact] = useState("@username");
  const [comment, setComment] = useState("");

  return (
    <div className="popup-container">
      <form className="offer-form">
        <div>
          <label for="offer-title">Title</label>
          <input
            type="text"
            id="offer-title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label for="offer-description">Description</label>
          <input
            type="text"
            id="offer-description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label for="offer-category">Category</label>
          <input
            type="text"
            id="offer-category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label for="offer-price">Price</label>
          <input
            type="text"
            id="offer-price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label for="offer-img">Image link</label>
          <input type="text" id="offer-img" />
        </div>
        <div>
          <label for="offer-contact">Contact details</label>
          <input
            type="text"
            id="offer-contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label for="offer-comment">Comments</label>
          <input
            type="text"
            id="offer-comment"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </form>
      <div className="offer-preview">
        <p className="offer-preview-text">Preview:</p>
        <div className="offer-card">
          <img className="offer-img" src={tshirt} alt="Marketplace offer pic" />
          <div className="offer-content">
            <h3 className="offer-title">{title}</h3>
            <p className="offer-categories">{category}</p>
            <p className="offer-price">{price}</p>
            <p className="offer-description">{description}</p>

            <p className="offer-contact">{contact}</p>
            <p className="offer-comments">{comment}</p>
            <p className="offer-expiration">*Expires in 2 days</p>
          </div>

          {/* <div className="offer-buttons">
            <a href="#" className="btn-primary">
              Respond
            </a>
          </div> */}
        </div>
      </div>
      <div>
        <a href="#" className="btn-popup">
          Submit Offer
        </a>
        <p className="offer-submit-text">
          *You will need to confirm submission with Zano wallet
        </p>
      </div>
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
