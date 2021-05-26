import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IWorkersPageProps} from "../types";
import {Loading} from "../../common/Loading/Loading";
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {getWorkersListAsync} from "../../../redux/reducers/user/actions";
import {setWorkersList} from "../../../redux/reducers/user/actions/actions";
import {IWorker} from "../../../redux/reducers/user/types.data";

const s = require('../style.module.scss')

const WorkersPage: React.FC<IWorkersPageProps> = ({
                                                      workersList,
                                                      workersListLoading,
                                                      setWorkersList,
                                                      getWorkersListAsync,
                                                  }) => {
    useEffect(() => {
        getWorkersListAsync()
        return () => {
            setWorkersList([])
        }
    }, [])
    const PAGE_SIZE = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    useEffect(() => {
        if (workersList.length) {
            setPageCount(Math.ceil(workersList.length / PAGE_SIZE))
        }
    }, [workersList])
    return (
        <div className={s.worker_page}>
            {workersListLoading
                ? <Loading/>
                : workersList && workersList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Фамилия</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Отчество</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Отдел</TableCell>
                            <TableCell>Должность</TableCell>
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
                <TableCell>{row.workPhone}</TableCell>
                <TableCell>{row.department.name}</TableCell>
                <TableCell>{row.position.name}</TableCell>
            </TableRow>
        </React.Fragment>
    );
}
