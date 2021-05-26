import React, {useState} from "react";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {setCurrentRootPage, setCurrentRootPageWorker} from "../../redux/reducers/rootPage/actions/actions";
import {INavigationItem} from "../../redux/globalTypes";
import {ISetCurrentRootPage, ISetCurrentRootPageWorker} from "../../redux/reducers/rootPage/actions/types";
import {SimpleNavigation} from "../common/Navigation/Navigation";
import {CopyrightIcon} from "../../icons/icons";
import {CreateLogo} from "../common/IconedLabels/Logo";
import {LoginLink} from "../common/IconedLabels/LoginLink";
import {IClient, IWorker} from "../../redux/reducers/user/types.data";
import {ProfileLink} from "../common/IconedLabels/ProfileLink";
import {ShopBasketContainer} from "../common/ShopBasket/ShopBasket";
import {CreateBasket} from "../common/IconedLabels/Basket";
import {getUserRole} from "../../helpers/helpers";

const s = require('./styles.module.scss')

interface IRootPageProps {
    internalPages: INavigationItem[]
    workersInternalPage: INavigationItem[]
    setCurrentRootPage: ISetCurrentRootPage
    setCurrentRootPageWorker: ISetCurrentRootPageWorker
    userInfo: IClient | IWorker | null
}

const RootPage: React.FC<IRootPageProps> = ({
                                                userInfo,
                                                internalPages,
                                                workersInternalPage,
                                                setCurrentRootPage,
                                                setCurrentRootPageWorker,
                                                children,
                                            }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <div className={s.root}>
        <div className={s.root_header}>
            <div className={s.row}>
                <SimpleNavigation internalPages={getUserRole() === 'client' ? internalPages : workersInternalPage}
                                  setCurrentPage={getUserRole() === 'client' ? setCurrentRootPage : setCurrentRootPageWorker}/>
                <CreateLogo/>
                {userInfo
                    ? <ProfileLink userName={userInfo.userName}/>
                    : <LoginLink/>}
                {getUserRole() === 'client' && <CreateBasket onClick={() => setOpen(true)}/>}
            </div>
        </div>
        {children}
        <div className={s.root_footer}>
            <CopyrightIcon/>
            CODE0-ST / GITHUB COMMUNITY
        </div>
        <ShopBasketContainer open={open}
                             closeHandler={() => setOpen(false)}/>
    </div>
}

const mapStateToProps = (state: TRootState) => ({
    internalPages: state.rootPage.internalPages,
    workersInternalPage: state.rootPage.workersInternalPage,
    userInfo: state.user.userInfo,
})
const mapDispatchToProps = {
    setCurrentRootPage,
    setCurrentRootPageWorker,
}

export const RootPageContainer = connect(mapStateToProps, mapDispatchToProps)(RootPage)