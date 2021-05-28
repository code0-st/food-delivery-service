import React, {useState} from "react";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {IProductsPageProps} from "../types";
import {ProductsPageContainer} from "../../Client/ProductsPage/ProductsPage";
import {SimpleButton} from "../../common/Fields/Buttons/SimpleButton";
import {CreateProductModalContainer} from "../../Client/ProductsPage/Modals/CreateProductModal";
const s = require('../style.module.scss')


const ProductsPageWorker:React.FC<IProductsPageProps> = ({}) => {
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false)
    return (
        <div className={s.worker_page}>
            <div className={s.actions}>
                <SimpleButton onClick={() => setCreateModalOpen(true)}>
                    Создать !
                </SimpleButton>
            </div>
            <ProductsPageContainer fromWorker />
            <CreateProductModalContainer open={createModalOpen}
                                         flag={'create'}
                                         closeHandler={() => setCreateModalOpen(false)}/>
        </div>
    )
}

const mapStateToProps = (state: TRootState) => ({})
const mapDispatchToProps = {}

export const ProductsPageWorkerContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPageWorker)