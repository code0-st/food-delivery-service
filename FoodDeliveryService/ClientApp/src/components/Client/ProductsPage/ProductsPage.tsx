import React, {useEffect, useState} from "react";
import {IProductsPageProps} from "./types";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {getProductsListAsync, getProductsListByCatalogAsync} from "../../../redux/reducers/products/actions";
import {Loading} from "../../common/Loading/Loading";
import {ProductCardContainer} from "./ProductCard";
import {Pagination} from "@material-ui/lab";
import {withRouter} from "react-router";


const s = require('./styles.module.scss')

const ProductsPage: React.FC<IProductsPageProps> = ({
                                                        getProductsListAsync,
                                                        getProductsListByCatalogAsync,
                                                        productsList,
                                                        productsListLoading,
                                                        ...props
                                                    }) => {
    const catalogId = props.match.params.id
    useEffect(() => {
        if (catalogId) {
            getProductsListByCatalogAsync(catalogId)
        } else {
            getProductsListAsync()
        }
    }, [])
    const PAGE_SIZE = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    useEffect(() => {
        if (productsList.length) {
            setPageCount(Math.ceil(productsList.length / PAGE_SIZE))
        }
    }, [productsList])
    return (
        <div className={s.content}>
            {productsListLoading
                ? <div className={s.loading}>
                    <Loading/>
                </div>
                : <div className={s.content_body}>
                    {productsList
                    && productsList.length > 0
                    && productsList.filter((item, index) => index >= PAGE_SIZE * (currentPage - 1) && index < PAGE_SIZE * currentPage)
                        .map((item, index) => {
                            if (index < PAGE_SIZE * currentPage) {
                                return <ProductCardContainer key={item.id}
                                                             product={item}
                                                             index={index}/>
                            }
                        })}
                </div>}
            <div className={s.pagination}>
                <Pagination count={pageCount}
                            page={currentPage}
                            onChange={(event, page) => setCurrentPage(page)}
                            variant="outlined"
                            shape="rounded"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    productsList: state.products.productsList,
    productsListLoading: state.products.productListLoading,
})
const mapDispatchToProps = {
    getProductsListAsync,
    getProductsListByCatalogAsync,
}
export const ProductsPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage))