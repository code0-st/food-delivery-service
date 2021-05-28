import React, {useEffect, useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IClientsPageProps} from "../types";
import {Loading} from "../../common/Loading/Loading";
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {setClientsList} from "../../../redux/reducers/user/actions/actions";
import {getClientsListAsync, getSortedClientsAsync} from "../../../redux/reducers/user/actions";
import {IClient} from "../../../redux/reducers/user/types.data";
import {TGetSortedClients} from "../../../redux/api/requests/user/types.data";
import {SimpleInput} from "../../common/Fields/Inputs/SimpleInput";
import {SimpleButton} from "../../common/Fields/Buttons/SimpleButton";

const s = require('../style.module.scss')

const ClientsPage: React.FC<IClientsPageProps> = ({
                                                      clientsList,
                                                      setClientsList,
                                                      clientsListLoading,
                                                      getClientsListAsync,
                                                      getSortedClientsAsync,
                                                  }) => {
    useEffect(() => {
        getClientsListAsync({})
        return () => {
            setClientsList([])
        }
    }, [])
    const PAGE_SIZE = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)

    const [searchValue, setSearchValue] = useState<string>('')
    const [sortBody, setSortBody] = useState<TGetSortedClients | null>(null)

    const searchHandler = () => {
        if(searchValue) {
            getClientsListAsync({searchValue})
        } else {
            getClientsListAsync({})
        }
    }
    useEffect(() => {
        if (clientsList.length) {
            setPageCount(Math.ceil(clientsList.length / PAGE_SIZE))
        }
    }, [clientsList])

    useEffect(() => {
        if (sortBody) {
            getSortedClientsAsync(sortBody)
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
            </div>
            {clientsListLoading
                ? <Loading/>
                : clientsList && clientsList.length && <TableContainer component={Paper}>
                <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortState: 'LastName',
                            })}>Фамилия</TableCell>
                            <TableCell onClick={() => setSortBody({
                                isAsc: sortBody ? !sortBody.isAsc : true,
                                sortState: 'FirstName',
                            })}>Имя</TableCell>
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
    getSortedClientsAsync,
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
