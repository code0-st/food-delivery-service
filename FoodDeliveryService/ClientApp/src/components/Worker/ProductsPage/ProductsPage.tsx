import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IProductsPageProps} from "../types";
const s = require('../style.module.scss')


const ProductsPage:React.FC<IProductsPageProps> = ({}) => {
    return (
        <div className={s.worker_page}></div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage)