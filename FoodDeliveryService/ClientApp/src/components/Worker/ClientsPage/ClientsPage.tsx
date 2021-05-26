import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IClientsPageProps} from "../types";
import {Loading} from "../../common/Loading/Loading";
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {setClientsList} from "../../../redux/reducers/user/actions/actions";
import {getClientsListAsync} from "../../../redux/reducers/user/actions";
import {IClient} from "../../../redux/reducers/user/types.data";

const s = require('../style.module.scss')

const ClientsPage: React.FC<IClientsPageProps> = ({
                                                      clientsList,
                                                      setClientsList,
                                                      clientsListLoading,
                                                      getClientsListAsync,
                                                  }) => {
    useEffect(() => {
        getClientsListAsync()
        return () => {
            setClientsList([])
        }
    }, [])
    const PAGE_SIZE = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)
    useEffect(() => {
        if (clientsList.length) {
            setPageCount(Math.ceil(clientsList.length / PAGE_SIZE))
        }
    }, [clientsList])
    return (
        <div className={s.worker_page}>
            {clientsListLoading
                ? <Loading/>
                : clientsList && clientsList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Фамилия</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Ник</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Адрес</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientsList
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
    clientsList: state.user.clientsList,
    clientsListLoading: state.user.loadings.clientsListLoading,
})
const mapDispatchToProps = {
    getClientsListAsync,
    setClientsList,
}

export const ClientsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ClientsPage)

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: IClient }) {
    const {row} = props;
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
            </TableRow>
        </React.Fragment>
    );
}
