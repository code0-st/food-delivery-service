import React, {useEffect} from "react";
import {ICatalogsPageProps} from "./types";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {getCatalogsAsync} from "../../redux/reducers/enums/actions";
import Spinner from "reactstrap/lib/Spinner";
import {Fade, ListGroup, ListGroupItem} from "reactstrap";

const CatalogsPage: React.FC<ICatalogsPageProps> = ({
                                                        catalogs,
                                                        catalogsLoading,
                                                        getCatalogsAsync,
                                                    }) => {
    useEffect(() => {
      getCatalogsAsync()
    }, [])
    return (
        <div>
            {catalogsLoading
                ? <Spinner color={'primary'} />
                : <ListGroup>
                    {catalogs && catalogs.length > 0 && catalogs.map(item => (
                        <Fade key={item.id} in >
                            <ListGroupItem>{item.name}</ListGroupItem>
                        </Fade>
                    )) || <div>Нет данных...</div>}
                </ListGroup>}
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