import React from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {ICatalogsPageProps} from "../types";
import {CatalogsPageContainer} from "../../Client/CatalogsPage/CatalogsPage";
const s = require('../style.module.scss')

const CatalogsPageWorker:React.FC<ICatalogsPageProps> = ({}) => {
    return (
        <div className={s.worker_page}>
            <CatalogsPageContainer />
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const CatalogsPageWorkerContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogsPageWorker)