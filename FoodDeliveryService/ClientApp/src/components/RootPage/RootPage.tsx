import React, {useEffect, useState} from "react";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {setCurrentRootPage} from "../../redux/reducers/rootPage/actions/actions";
import {INavigationItem} from "../../redux/globalTypes";
import {ISetCurrentRootPage} from "../../redux/reducers/rootPage/actions/types";
import {SimpleNavigation} from "../common/Navigation/Navigation";
import {CopyrightIcon} from "../../icons/icons";
import {CreateLogo} from "../common/IconedLabels/Logo";
import {LoginLink} from "../common/IconedLabels/LoginLink";
import {IClient, IWorker} from "../../redux/reducers/user/types.data";
import {ProfileLink} from "../common/IconedLabels/ProfileLink";
import {ShopBasketContainer} from "../common/ShopBasket/ShopBasket";
import {CreateBasket} from "../common/IconedLabels/Basket";
import {useLocation} from "react-router";
import {ROUTE_PATHS} from "../../routers/paths.main";

const s = require('./styles.module.scss')

interface IRootPageProps {
    internalPages: INavigationItem[]
    setCurrentRootPage: ISetCurrentRootPage
    userInfo: IClient | IWorker | null
}

const RootPage: React.FC<IRootPageProps> = ({
                                                internalPages,
                                                setCurrentRootPage,
                                                children,
                                                userInfo,
                                            }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <div className={s.root}>
        <div className={s.root_header}>
            <div className={s.row}>
                <SimpleNavigation internalPages={internalPages}
                                  setCurrentPage={setCurrentRootPage}/>
                <CreateLogo/>
                {userInfo
                    ? <ProfileLink userName={userInfo.userName}/>
                    : <LoginLink/>}
                <CreateBasket onClick={() => setOpen(true)}/>
                {/*{getUserRole() === 'client' && <CreateBasket />}*/}
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
    userInfo: state.user.userInfo,
})
const mapDispatchToProps = {
    setCurrentRootPage
}

export const RootPageContainer = connect(mapStateToProps, mapDispatchToProps)(RootPage)