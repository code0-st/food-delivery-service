import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IProductsPageProps} from "../types";
import {ProductsPageContainer} from "../../Client/ProductsPage/ProductsPage";
const s = require('../style.module.scss')


const ProductsPageWorker:React.FC<IProductsPageProps> = ({}) => {
    return (
        <div className={s.worker_page}>
            <ProductsPageContainer fromWorker />
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const ProductsPageWorkerContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPageWorker)