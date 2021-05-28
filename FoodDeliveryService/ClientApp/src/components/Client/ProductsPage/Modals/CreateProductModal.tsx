import React, {useEffect, useState} from "react";
import {TRootState} from "../../../../redux/store";
import {connect} from "react-redux";
import {Dialog} from "@material-ui/core";
import {createProductAsync, editProductAsync, removeProductAsync} from "../../../../redux/reducers/products/actions";
import {getCatalogsAsync} from "../../../../redux/reducers/enums/actions";
import {TEnumItem} from "../../../../redux/reducers/enums/types.data";
import {ICreateProduct, IEditProduct, IRemoveProduct} from "../../../../redux/reducers/products/actions/types";
import {CreateLogo} from "../../../common/IconedLabels/Logo";
import {SimpleInput} from "../../../common/Fields/Inputs/SimpleInput";
import {SimpleSelect} from "../../../common/Fields/Selects/SimpleSelect";
import {SimpleButton} from "../../../common/Fields/Buttons/SimpleButton";
import {IProduct} from "../../../../redux/reducers/products/types.data";

const s = require('./style.module.scss')

interface ICreateProductModalProps {
    open: boolean,
    closeHandler: () => void
    catalogs: TEnumItem[]
    createProductAsync: ICreateProduct
    editProductAsync: IEditProduct
    removeProductAsync: IRemoveProduct
    getCatalogsAsync: any
    flag: 'create' | 'edit' | 'remove'
    product?: IProduct
}

const CreateProductModal: React.FC<ICreateProductModalProps> = ({
                                                                    open,
                                                                    closeHandler,
                                                                    catalogs,
                                                                    getCatalogsAsync,
                                                                    createProductAsync,
                                                                    editProductAsync,
                                                                    removeProductAsync,
                                                                    flag,
                                                                    product,
                                                                }) => {
    useEffect(() => {
        if (open) {
            getCatalogsAsync()
        }
    }, [open])
    const [name, setName] = useState<string>(product && product.name || '')
    const [catalogId, setCatalogId] = useState<number>(product && product.catalogId || -1)
    const [price, setPrice] = useState<number>(product && product.price || 0)
    const [weight, setWeight] = useState<number>(product && product.weight || 0)

    const createCatalogHandler = () => {
        createProductAsync({
            name,
            price,
            weight,
            catalogId,
        })
    }
    const editCatalogHandler = () => {
        product && editProductAsync({
            id: product.id,
            name,
            catalogId,
            price,
            weight
        })
    }
    const removeProductHandler = () => {
        product && removeProductAsync({id: product.id})
    }
    return (
        <Dialog open={open} onClose={closeHandler}>
            <div className={s.root}>
                <div className={s.form_field}>
                    <div className={s.logo}>
                        <CreateLogo/>
                    </div>
                    <div className={s.row}>
                        <SimpleInput label={'Наименование'}
                                     value={name}
                                     onChange={event => setName(event.target.value)}
                                     error={!name}/>
                        <SimpleInput label={'Цена'}
                                     value={price.toString()}
                                     type={'number'}
                                     onChange={event => setPrice(+event.target.value)}
                                     error={!price}/>
                        <SimpleInput label={'Вес'}
                                     value={weight.toString()}
                                     onChange={event => setWeight(+event.target.value)}
                                     error={!weight}/>
                    </div>
                    <SimpleSelect label={'В каталоге'}
                                  items={catalogs}
                                  value={catalogId}
                                  onChange={setCatalogId}/>
                    {flag === 'create' && <SimpleButton onClick={createCatalogHandler}>
                        Создать !
                    </SimpleButton>}
                    {flag === 'edit' && <SimpleButton onClick={editCatalogHandler}>
                        Сохранить !
                    </SimpleButton>}
                    {flag === 'remove' && <SimpleButton onClick={removeProductHandler}>
                        Ок
                    </SimpleButton>}
                </div>
            </div>
        </Dialog>
    )
}

const mapStateToProps = (state: TRootState) => ({
    catalogs: state.enums.catalogs,
})
const mapDispatchToProps = {
    createProductAsync,
    editProductAsync,
    removeProductAsync,
    getCatalogsAsync,
}

export const CreateProductModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProductModal)