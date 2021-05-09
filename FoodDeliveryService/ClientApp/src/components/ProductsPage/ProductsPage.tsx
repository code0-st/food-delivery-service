import React from "react";
import {IProductsPageProps} from "./types";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
const s = require('./styles.module.scss')

const ProductsPage:React.FC<IProductsPageProps> = ({}) => {
    return (
        <div className={s.content}>
            Тут будут продукты...
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}
export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage)