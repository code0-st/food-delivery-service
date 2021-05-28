import React, {useState} from "react";
import {ICatalogCardProps} from "./types";
import {Button, Fade} from "reactstrap";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../../routers/paths.main";
import {ImageIcon} from "../../../icons/icons";
import {TRootState} from "../../../redux/store";
import {connect} from "react-redux";
import {DeleteOutlined} from "@material-ui/icons";
import {CreateCatalogModalContainer} from "./Modals/CreateCatalogModal";

const s = require('./styles.module.scss')

export const CatalogCard: React.FC<ICatalogCardProps> = ({
                                                             catalog,
                                                             index,
                                                             fromWorker,
                                                         }) => {
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [removeModalOpen, setRemoveModalOpen] = useState<boolean>(false)

    return (
        <Fade in timeout={{enter: 20 * index, exit: 50}}>
            <Link to={ROUTE_PATHS.catalogs.catalog.catalog(catalog.id).path} onClick={event => {
                fromWorker && event.preventDefault()
            }}>
                <div className={s.card} onClick={() => {
                    fromWorker && setEditModalOpen(true)
                }}>
                    {fromWorker && <div className={s.remove_icon} onClick={() => setRemoveModalOpen(true)}>
                        <DeleteOutlined/>
                    </div>}
                    <ImageIcon/>
                    <div>{catalog.name}</div>
                    {!fromWorker && <Button>Перейти!</Button>}
                    <CreateCatalogModalContainer open={editModalOpen}
                                                 closeHandler={() => setEditModalOpen(false)}
                                                 flag={'edit'}
                                                 catalog={catalog}/>
                    <CreateCatalogModalContainer open={removeModalOpen}
                                                 closeHandler={() => setRemoveModalOpen(false)}
                                                 flag={'remove'}
                                                 catalog={catalog}/>
                </div>
            </Link>
        </Fade>
    )
}