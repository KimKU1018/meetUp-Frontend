import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.scss';

const SearchBox = ({ getSearchInput, getSearchInputValue }) => {
    return (
        <section className="searchBox">
            <form className="searchForm">
                <input
                    onChange={e => getSearchInput(e.target.value)}
                    className="search"
                    type="text"
                    placeholder="검색어를 입력해주세요"
                />
                <button className="searchBtn" onClick={getSearchInputValue}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                </button>
            </form>
        </section>
    );
};

export default SearchBox;
