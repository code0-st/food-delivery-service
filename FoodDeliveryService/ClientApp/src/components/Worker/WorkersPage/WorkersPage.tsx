import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IWorkersPageProps} from "../types";
import {Loading} from "../../common/Loading/Loading";
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {getSortedWorkersAsync, getWorkersListAsync} from "../../../redux/reducers/user/actions";
import {setWorkersList} from "../../../redux/reducers/user/actions/actions";
import {IWorker} from "../../../redux/reducers/user/types.data";
import {TGetSortedClients, TGetSortedWorkers} from "../../../redux/api/requests/user/types.data";
import {SimpleInput} from "../../common/Fields/Inputs/SimpleInput";
import {SimpleButton} from "../../common/Fields/Buttons/SimpleButton";
import {CreateWorkerModalContainer} from "./Modals/CreateWorkerModal";

const s = require('../style.module.scss')

const WorkersPage: React.FC<IWorkersPageProps> = ({
                                                      workersList,
                                                      workersListLoading,
                                                      setWorkersList,
                                                      getWorkersListAsync,
                                                      getSortedWorkersAsync,
                                                  }) => {
    useEffect(() => {
        getWorkersListAsync({})
        return () => {
            setWorkersList([])
        }
    }, [])
    const PAGE_SIZE = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)

    const [searchValue, setSearchValue] = useState<string>('')
    const [sortBody, setSortBody] = useState<TGetSortedWorkers | null>(null)
    const [createWorkerModal, setCreateWorkerModal] = useState<boolean>(false)

    const searchHandler = () => {
        if (searchValue) {
            getWorkersListAsync({searchValue})
        } else {
            getWorkersListAsync({})
        }
    }

    useEffect(() => {
        if (workersList.length) {
            setPageCount(Math.ceil(workersList.length / PAGE_SIZE))
        }
    }, [workersList])

    useEffect(() => {
        if (sortBody) {
            getSortedWorkersAsync(sortBody)
        }
    }, [sortBody])
    return (
        <div className={s.worker_page}>
            <div className={s.actions}>
                <div className={s.actions_search}>
                    <SimpleInput label={'Поиск'}
                                 value={searchValue}
                                 onChange={event => setSearchValue(event.target.value)}/>
                </div>
                <SimpleButton onClick={searchHandler}>
                    Поиск
                </SimpleButton>
                <SimpleButton onClick={() => setCreateWorkerModal(true)}>
                    Создать
                </SimpleButton>
            </div>
            {workersListLoading
                ? <Loading/>
                : workersList && workersList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortField: 'LastName',
                            })}>Фамилия</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortField: 'FirstName',
                            })}>Имя</TableCell>
                            <TableCell>Отчество</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortField: 'Department',
                            })}>Отдел</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortField: 'Position',
                            })}>Должность</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workersList
                            .filter((item, index) => index >= PAGE_SIZE * (currentPage - 1) && index < PAGE_SIZE * currentPage)
                            .map((row, index) => {
                                    if (index < PAGE_SIZE * currentPage) {
                                        return <Row key={row.id} row={row}/>

                                    }
                                }
                            )}
                    </TableBody>
                </Table>
            </TableContainer>}
            <div className={s.pagination}>
                <Pagination count={pageCount}
                            page={currentPage}
                            onChange={(event, page) => setCurrentPage(page)}
                            variant="outlined"
                            shape="rounded"/>
            </div>
            <CreateWorkerModalContainer open={createWorkerModal}
                                        closeHandler={() => setCreateWorkerModal(false)} />
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    workersList: state.user.workersList,
    workersListLoading: state.user.loadings.workersListLoading,
})
const mapDispatchToProps = {
    getWorkersListAsync,
    setWorkersList,
    getSortedWorkersAsync,
}

export const WorkersPageContainer = connect(mapStateToProps, mapDispatchToProps)(WorkersPage)

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: IWorker }) {
    const {row} = props;
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.patronymic}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.department.name}</TableCell>
                <TableCell>{row.position.name}</TableCell>
            </TableRow>
        </React.Fragment>
    );
}
