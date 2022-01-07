import React, { useState } from "react";
import tshirt from "../img/Tshirt-design.jpg";
import noPhoto from "../img/no_photo.png";

const Content = ({ offers, totalOffers, getOffers }) => {
  const [offset, setOffset] = useState(100);

  if (offers?.length) {
    return (
      <div className="content-container">
        {offers.map((offer) => (
          <div key={offer.tx_hash} className="offer-card">
            <div className="offer-header">
              <img
                className="offer-img"
                src={offer.url ? offer.url : noPhoto}
                alt="Marketplace offer pic"
              />
              <h3 className="offer-title">{offer.t}</h3>
              <p className="offer-categories">{offer.cat}</p>
              <div className="offer-expiration">
                <p>Expires in</p>
                <p>
                  <strong>2 days</strong>
                </p>
              </div>
              {/* <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="info-icon"
              >
                <path
                  d="M10 9C9.73479 9 9.48043 9.10536 9.2929 9.29289C9.10536 9.48043 9 9.73478 9 10V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V10C11 9.73478 10.8946 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9ZM10.38 5.08C10.1365 4.97998 9.86347 4.97998 9.62 5.08C9.49725 5.12759 9.38511 5.19896 9.29 5.29C9.20167 5.3872 9.13065 5.49882 9.08 5.62C9.02402 5.73868 8.99662 5.86882 9 6C8.99924 6.13161 9.02447 6.26207 9.07423 6.38391C9.124 6.50574 9.19732 6.61656 9.29 6.71C9.38721 6.79833 9.49882 6.86936 9.62 6.92C9.7715 6.98224 9.93597 7.00632 10.099 6.99011C10.2619 6.97391 10.4184 6.91792 10.5547 6.82707C10.691 6.73622 10.8029 6.61328 10.8805 6.46907C10.9582 6.32486 10.9992 6.16378 11 6C10.9963 5.73523 10.8927 5.48163 10.71 5.29C10.6149 5.19896 10.5028 5.12759 10.38 5.08ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg> */}
            </div>
            <div className="offer-content">
              <p className="offer-description">
                {offer.do
                  ? offer.do
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>

              <div className="offer-bottom">
                <div className="offer-price">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.144 18H3.6C1.6128 18 0 16.3872 0 14.4V8.856C0 6.8724 1.6128 5.256 3.6 5.256H5.292V3.6C5.292 1.6128 6.9048 0 8.892 0H14.4C16.3836 0 18 1.6128 18 3.6V9.108C18 11.0916 16.3872 12.708 14.4 12.708H6.5232C6.0588 12.708 5.6448 12.4308 5.4684 12.0024C5.292 11.574 5.3892 11.0844 5.7168 10.7568L9.0612 7.4124H3.6C2.808 7.4124 2.16 8.0568 2.16 8.8524V14.4C2.16 15.192 2.8044 15.84 3.6 15.84H9.144C9.936 15.84 10.584 15.1956 10.584 14.4V12.708H12.744V14.4C12.744 16.3872 11.1312 18 9.144 18ZM8.9784 10.548H14.4C15.192 10.548 15.84 9.9036 15.84 9.108V3.6C15.84 2.808 15.1956 2.16 14.4 2.16H8.892C8.1 2.16 7.452 2.8044 7.452 3.6V5.256H11.5128C11.9772 5.256 12.3912 5.5332 12.5676 5.9616C12.744 6.39 12.6468 6.8796 12.3192 7.2072L8.9784 10.548Z"
                      fill="#0D0C3A"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <span>{offer.ap}&nbsp;ZANO</span>
                </div>

                <p className="offer-contact">{offer.cnt}</p>
              </div>
              <p className="offer-comments">{offer.com}</p>
            </div>

            {/* <div className="offer-buttons">
              <a href="#" className="btn-primary">
                Respond
              </a>
            </div> */}
          </div>
        ))}
        {/* <div className="load-more">
          {totalOffers > offers.length && (
            <p
              onClick={() => {
                getOffers(offset);
                setOffset(offset + 100);
              }}
            >
              Load more...
            </p>
          )}
        </div> */}
      </div>
    );
  } else {
    return <div className="content-container">No offers available</div>;
  }
};

export default Content;
