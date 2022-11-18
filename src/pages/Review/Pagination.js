import React from "react";
import './Pagination.scss';

function Pagination({total, limit, getButtonIndex}) {
    const numPages = Math.ceil(total/limit);

    return(
        <div className="pagination">
            {Array(numPages)
            .fill()
            .map((_, i) => (
                <button
                    className="paginatopmBtn"
                    key={i+1}
                    onClick={e=>getButtonIndex(e.target.innerText)}
                >
                    {i+1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
