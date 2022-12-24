
//import hooks
import { useState } from "react"

export const PageButtons = ( { page, setPage } ) => {

    //Pagination

    const nextPage = () => {
        setPage( page + 1 )
    }

    const previousPage = () => {
        setPage( page - 1 )
    }

    return (
        <section className="nextPageSection" >
            <button type="button" className="nextPageButton" disabled={ page <= 1 } onClick={ () => previousPage() }>
                Previous page
            </button>
            <p className="currentPage"> {`Page ${page}`} </p>
            <button type="button" className="nextPageButton" onClick={ () => nextPage() }>
                Next page
            </button>
        </section>
    )
}
