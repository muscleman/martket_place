import React, { useState, useContext } from "react";
import { Store } from "../store/store-reducer";
import { setPagination } from "../store/actions";

const Pagination = () => {
  const { state, dispatch } = useContext(Store);
  const { limit, offset, currentPage } = state.pagination;
  const [isSelectActive, setSelectIsActive] = useState(false);

  const setLimit = (e) => {
    setSelectIsActive(false);
    setPagination(dispatch, {
      limit: e,
      offset: 0,
      currentPage: 1,
    });
  };

  const setPage = (pageIndex) => {
    setPagination(dispatch, {
      limit: limit,
      offset: limit * pageIndex,
      currentPage: pageIndex + 1,
    });
  };
  const prevPage = () => {
    setPagination(dispatch, {
      limit: limit,
      offset: limit * (currentPage - 2),
      currentPage: currentPage - 1,
    });
  };
  const nextPage = () => {
    setPagination(dispatch, {
      limit: limit,
      offset: limit * currentPage,
      currentPage: currentPage + 1,
    });
  };

  const toggleSelect = () => {
    if (isSelectActive) {
      setSelectIsActive(false);
    } else {
      setSelectIsActive(true);
    }
  };

  const renderPagination = () => {
    const renderPagesLinks = () => {
      const pagesCount = () => Math.ceil(state.offers.totalOffers / limit);
      const pagesLinksList = [];
      for (let index = 0; index < pagesCount(); index++) {
        const link = <button key={ 'pag-' + index }
                             className={ `link ${ (currentPage === (index + 1)) ? 'active' : '' } ${ (currentPage > (index + 5) || (currentPage < (index - 3))) ? 'hide' : '' } ${ (pagesCount() > 5) && (((currentPage < index) && ((currentPage + 4) > index)) || (((currentPage - 2 > index) && ((currentPage - 6) < index)) && (index > 1))) ? 'dot' : '' }` }
                             onClick={ () => setPage(index) }>{ index + 1 }</button>;
        pagesLinksList.push(link);
      }
      return pagesLinksList;
    };

    const markup = (
      <div className="pagination-wrap">
        <div className={ `custom-select ${ isSelectActive ? 'active' : '' }` }>
          <div className="select-head pointer" onClick={ () => toggleSelect() }>
            <span>{ limit }</span>
          </div>
          <div className="select-dropdown">
            <ul>
              <li className="select-option" onClick={ () => setLimit(10) }>10</li>
              <li className="select-option" onClick={ () => setLimit(20) }>20</li>
              <li className="select-option" onClick={ () => setLimit(50) }>50</li>
              <li className="select-option" onClick={ () => setLimit(100) }>100</li>
            </ul>
          </div>
        </div>
        <span>Count on page</span>
        <div className="buttons-wrap">
          <button className="back pagination-button btn-primary" disabled={ !offset } onClick={ () => prevPage() }>
            <span>prev</span></button>
          <div className="pagination-links">{ renderPagesLinks() }</div>
          <button className="next pagination-button btn-primary"
                  disabled={ offset >= (state.offers.totalOffers - limit) }
                  onClick={ () => nextPage() }><span>next</span></button>
        </div>
      </div>);
    return markup;
  };

  return renderPagination();
};

export default Pagination;
