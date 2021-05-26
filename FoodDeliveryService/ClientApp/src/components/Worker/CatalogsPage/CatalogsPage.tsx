import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {ICatalogsPageProps} from "../types";
const s = require('../style.module.scss')

const CatalogsPage:React.FC<ICatalogsPageProps> = ({}) => {
    return (
        <div className={s.worker_page}></div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const CatalogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogsPage)