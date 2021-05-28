import React, {useState} from "react";
import {TRootState} from "../../../../redux/store";
import {connect} from "react-redux";
import {Dialog} from "@material-ui/core";
import {
    createCatalogAsync,
    editCatalogAsync,
    removeCatalogAsync
} from "../../../../redux/reducers/enums/actions";
import {TEnumItem} from "../../../../redux/reducers/enums/types.data";
import {CreateLogo} from "../../../common/IconedLabels/Logo";
import {SimpleInput} from "../../../common/Fields/Inputs/SimpleInput";
import {SimpleButton} from "../../../common/Fields/Buttons/SimpleButton";
import {ICreateCatalog, IEditCatalog, IRemoveCatalog} from "../../../../redux/reducers/enums/actions/types";

const s = require('./style.module.scss')

interface ICreateCatalogModalProps {
    open: boolean,
    closeHandler: () => void

    createCatalogAsync: ICreateCatalog
    editCatalogAsync: IEditCatalog
    removeCatalogAsync: IRemoveCatalog
    flag: 'create' | 'edit' | 'remove'
    catalog?: TEnumItem
}

const CreateCatalogModal: React.FC<ICreateCatalogModalProps> = ({
                                                                    open,
                                                                    closeHandler,
                                                                    flag,
                                                                    catalog,
                                                                    createCatalogAsync,
                                                                    editCatalogAsync,
                                                                    removeCatalogAsync,
                                                                }) => {

    const [name, setName] = useState<string>(catalog && catalog.name || '')

    const createCatalogHandler = () => {
        createCatalogAsync({
            name,
        })
    }
    const editCatalogHandler = () => {
        catalog && editCatalogAsync({
            id: catalog.id,
            name,

        })
    }
    const removeCatalogHandler = () => {
        catalog && removeCatalogAsync({id: catalog.id})
    }
    return (
        <Dialog open={open} onClose={closeHandler}>
            <div className={s.root}>
                <div className={s.form_field}>
                    <div className={s.logo}>
                        <CreateLogo/>
                    </div>
                    <SimpleInput label={'Наименование'}
                                 value={name}
                                 onChange={event => setName(event.target.value)}
                                 error={!name}/>
                    {flag === 'create' && <SimpleButton onClick={createCatalogHandler}>
                        Создать !
                    </SimpleButton>}
                    {flag === 'edit' && <SimpleButton onClick={editCatalogHandler}>
                        Сохранить !
                    </SimpleButton>}
                    {flag === 'remove' && <SimpleButton onClick={removeCatalogHandler}>
                        Ок
                    </SimpleButton>}
                </div>
            </div>
        </Dialog>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {
    createCatalogAsync,
    editCatalogAsync,
    removeCatalogAsync,
}

export const CreateCatalogModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCatalogModal)