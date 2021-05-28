import React, {useEffect} from "react";
import {ICatalogsPageProps} from "./types";
import {connect} from "react-redux";
import {CatalogCard} from "./CatalogCard";
import {Loading} from "../../common/Loading/Loading";
import {TRootState} from "../../../redux/store";
import {getCatalogsAsync} from "../../../redux/reducers/enums/actions";

const s = require('./styles.module.scss')
const CatalogsPage: React.FC<ICatalogsPageProps> = ({
                                                        catalogs,
                                                        catalogsLoading,
                                                        getCatalogsAsync,
                                                        fromWorker,
                                                    }) => {
    useEffect(() => {
        getCatalogsAsync()
    }, [])
    return (
        <div className={s.content}>
            {catalogsLoading
                ? <Loading/>
                : <div className={s.content_body}>
                    {catalogs
                    && catalogs.length > 0
                    && catalogs.map((item, index) => <CatalogCard key={item.id}
                                                                  catalog={item}
                                                                  fromWorker={fromWorker}
                                                                  index={index}/>)}
                </div>}
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    catalogs: state.enums.catalogs,
    catalogsLoading: state.enums.loadings.catalogsLoading
})
export const CatalogsPageContainer = connect(mapStateToProps,
    {
        getCatalogsAsync,
    })
(CatalogsPage)