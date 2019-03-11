import React from 'react';
import './Paganetion.css';

const Pagenation =(props)=>{
    const {page,totalPages,handleChange} = props
    return(
        <div className="Pagination">
            <button
                className="Pagination-button"
                onClick={()=>handleChange('prev')}
                disabled={page<=1}
            >
                &larr;
            </button>

            <span className="Pagination-info">
                page <b>{page}</b> of {totalPages}
            </span>

            <button
                className="Pagination-button"
                onClick={()=>handleChange('next')}
                disabled={page>=totalPages}
            >
                &rarr;
            </button>
        </div>
    )
}
export default Pagenation;