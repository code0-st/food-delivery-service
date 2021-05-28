import React, {useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {ICatalogsPageProps} from "../types";
import {CatalogsPageContainer} from "../../Client/CatalogsPage/CatalogsPage";
import {SimpleButton} from "../../common/Fields/Buttons/SimpleButton";
import {CreateCatalogModalContainer} from "../../Client/CatalogsPage/Modals/CreateCatalogModal";
const s = require('../style.module.scss')

const CatalogsPageWorker:React.FC<ICatalogsPageProps> = ({}) => {
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false)

    return (
        <div className={s.worker_page}>
                <div className={s.actions}>
                    <SimpleButton onClick={() => setCreateModalOpen(true)}>
                        Создать !
                    </SimpleButton>
                </div>
            <CatalogsPageContainer fromWorker />
            <CreateCatalogModalContainer open={createModalOpen}
                                         closeHandler={() => setCreateModalOpen(false)}
                                         flag={'create'}/>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const CatalogsPageWorkerContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogsPageWorker)