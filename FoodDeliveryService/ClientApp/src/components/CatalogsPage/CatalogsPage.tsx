import React, {useEffect} from "react";
import {ICatalogsPageProps} from "./types";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {getCatalogsAsync} from "../../redux/reducers/enums/actions";
import {CatalogCard} from "./CatalogCard";
import {Loading} from "../common/Loading/Loading";

const s = require('./styles.module.scss')
const CatalogsPage: React.FC<ICatalogsPageProps> = ({
                                                        catalogs,
                                                        catalogsLoading,
                                                        getCatalogsAsync,
                                                    }) => {
    useEffect(() => {
        getCatalogsAsync()
    }, [])
    return (
        <div className={s.content}>
            {catalogsLoading
                ? <Loading />
                : <div className={s.content_body}>
                    {catalogs
                    && catalogs.length > 0
                    && catalogs.map((item, index) => <CatalogCard key={item.id}
                                                                                    catalog={item}
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