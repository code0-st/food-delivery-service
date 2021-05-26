import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE_PATHS} from "../paths.main";
import {WorkersRootContainer} from "../../components/Worker/WorkerRoot";
import {connect} from "react-redux";
import {TRootState} from "../../redux/store";
import {OrdersPageContainer} from "../../components/Worker/OrdersPage/OrdersPage";
import {ISetCreateModalOpen} from "../../redux/reducers/rootPage/actions/types";
import {setCreateModalOpen} from "../../redux/reducers/rootPage/actions/actions";
import {ClientsPageContainer} from "../../components/Worker/ClientsPage/ClientsPage";
import {CatalogsPageWorkerContainer} from "../../components/Worker/CatalogsPage/CatalogsPage";
import {ProductsPageWorkerContainer} from "../../components/Worker/ProductsPage/ProductsPage";
import {WorkersPageContainer} from "../../components/Worker/WorkersPage/WorkersPage";

interface IWorkerSwitch {
    searchValue: string
    createModalOpen: boolean
    setCreateModalOpen: ISetCreateModalOpen
}

const WorkerSwitch: React.FC<IWorkerSwitch> = ({
                                                   searchValue,
                                                   createModalOpen,
                                                   setCreateModalOpen
                                               }) => (
    <Route exact={false}
           path={ROUTE_PATHS.worker.path}>
        <WorkersRootContainer>
            <Switch>
                <Route path={ROUTE_PATHS.worker.path}
                       exact
                       component={() => <Redirect to={ROUTE_PATHS.worker.orders}/>}/>
                <Route path={ROUTE_PATHS.worker.orders}
                       exact
                       component={() => <OrdersPageContainer searchValue={searchValue}
                                                             createModalOpen={createModalOpen}
                                                             closeCreateModalHandler={() => setCreateModalOpen(false)}/>}/>
                <Route path={ROUTE_PATHS.worker.clients}
                       exact
                       component={() => <ClientsPageContainer searchValue={searchValue}
                                                              createModalOpen={createModalOpen}
                                                              closeCreateModalHandler={() => setCreateModalOpen(false)}/>}/>
                <Route path={ROUTE_PATHS.worker.catalogs}
                       exact
                       component={() => <CatalogsPageWorkerContainer searchValue={searchValue}
                                                               createModalOpen={createModalOpen}
                                                               closeCreateModalHandler={() => setCreateModalOpen(false)}/>}/>
                <Route path={ROUTE_PATHS.worker.products}
                       exact
                       component={() => <ProductsPageWorkerContainer searchValue={searchValue}
                                                               createModalOpen={createModalOpen}
                                                               closeCreateModalHandler={() => setCreateModalOpen(false)}/>}/>
                <Route path={ROUTE_PATHS.worker.workers}
                       exact
                       component={() => <WorkersPageContainer searchValue={searchValue}
                                                              createModalOpen={createModalOpen}
                                                              closeCreateModalHandler={() => setCreateModalOpen(false)}/>}/>
            </Switch>
        </WorkersRootContainer>
    </Route>
)

const mapStateToProps = (state: TRootState) => ({
    searchValue: state.rootPage.searchValue,
    createModalOpen: state.rootPage.createModalOpen,
})
const mapDispatchToProps = {
    setCreateModalOpen
}
export const WorkerSwitchContainer = connect(mapStateToProps, mapDispatchToProps)(WorkerSwitch)