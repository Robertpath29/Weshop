import React, { FC, useEffect, useState } from "react";
import { ContainerPaginate, OutputProductsStyle } from "./outputProducts.style";
import FilterOutput from "./FilterOutput/FilterOutput";

import Products from "./Products/Products";
import ReactPaginate from "react-paginate";

const OutputProducts: FC<{ categoryProduct: string }> = ({
    categoryProduct,
}) => {
    const [pageCount, setPageCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState<number>(12);
    const [sortBy, setSortBy] = useState<string>("data");
    const [color, setColor] = useState("");
    const [productDisplay, setProductDisplay] = useState<string>("block");

    const changePage = (e: { selected: number }) => {
        const selectedPage = e.selected + 1;

        setCurrentPage(selectedPage);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [perPage]);
    return (
        <OutputProductsStyle>
            <FilterOutput
                setProductDisplay={setProductDisplay}
                setPerPage={setPerPage}
                setSortBy={setSortBy}
                setColor={setColor}
            />
            <hr />
            <Products
                productDisplay={productDisplay}
                perPage={perPage}
                currentPage={currentPage}
                setPageCount={setPageCount}
                sortBy={sortBy}
                color={color}
                categoryProduct={categoryProduct}
            />
            {pageCount !== 0 && (
                <ContainerPaginate>
                    <ReactPaginate
                        previousLabel="Prev"
                        pageCount={pageCount}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        breakLabel={"..."}
                        onPageChange={changePage}
                        forcePage={currentPage - 1}
                        containerClassName={"pagination-products"}
                        activeClassName={"active"}
                    />
                </ContainerPaginate>
            )}
        </OutputProductsStyle>
    );
};

export default OutputProducts;
