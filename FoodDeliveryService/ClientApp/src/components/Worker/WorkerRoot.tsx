import React, {useEffect, useState} from "react";
import {SimpleInput} from "../common/Fields/Inputs/SimpleInput";
import {SimpleButton} from "../common/Fields/Buttons/SimpleButton";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {setCreateModalOpen, setSearchValue} from "../../redux/reducers/rootPage/actions/actions";
import {ISetCreateModalOpen, ISetSearchValue} from "../../redux/reducers/rootPage/actions/types";
import {getDepartmentsAsync, getPositionsAsync} from "../../redux/reducers/enums/actions";

const s = require('./style.module.scss')

interface IWorkerRootProps {
    searchValue: string
    createModalOpen: boolean
    setSearchValue: ISetSearchValue
    setCreateModalOpen: ISetCreateModalOpen
    getDepartmentsAsync: any
    getPositionsAsync: any
}

const WorkerRoot: React.FC<IWorkerRootProps> = ({
                                                    searchValue,
                                                    createModalOpen,
                                                    setSearchValue,
                                                    setCreateModalOpen,
                                                    getDepartmentsAsync,
                                                    getPositionsAsync,
                                                    children
                                                }) => {
    useEffect(() => {
        getDepartmentsAsync()
        getPositionsAsync()
    })
    return (
        <div className={s.worker_content}>
            {/*<div className={s.actions}>*/}
            {/*    <div className={s.actions_search}>*/}
            {/*        <SimpleInput label={'Поиск'}*/}
            {/*                     value={searchValue}*/}
            {/*                     onChange={event => setSearchValue(event.target.value)}/>*/}
            {/*    </div>*/}
            {/*    <SimpleButton onClick={() => setCreateModalOpen(!createModalOpen)}>*/}
            {/*        Создать*/}
            {/*    </SimpleButton>*/}
            {/*</div>*/}
            {children}
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({
    searchValue: state.rootPage.searchValue, // TODO: this shit isnt working
    createModalOpen: state.rootPage.createModalOpen,
})
const mapDispatchToProps = {
    setSearchValue,
    setCreateModalOpen,
    getDepartmentsAsync,
    getPositionsAsync,
}

export const WorkersRootContainer = connect(mapStateToProps, mapDispatchToProps)(WorkerRoot)