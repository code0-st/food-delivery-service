import React from "react";
import {TRootState} from "../../redux/store";
import {connect} from "react-redux";
import {setCurrentRootPage} from "../../redux/reducers/rootPage/actions/actions";
import {INavigationItem} from "../../redux/globalTypes";
import {ISetCurrentRootPage} from "../../redux/reducers/rootPage/actions/types";
import {SimpleNavigation} from "../common/Navigation/Navigation";
import {CopyrightIcon} from "../../icons/icons";
import {CreateLogo} from "../common/IconedLabels/Logo";
import {ProfileLink} from "../common/IconedLabels/ProfileLink";
import {LoginLink} from "../common/IconedLabels/LoginLink";

const s = require('./styles.module.scss')

interface IRootPageProps {
    internalPages: INavigationItem[]
    setCurrentRootPage: ISetCurrentRootPage
}

const RootPage: React.FC<IRootPageProps> = ({
                                                internalPages,
                                                setCurrentRootPage,
                                                children,
                                            }) => {
    return <div className={s.root}>
        <div className={s.root_header}>
            <div className={s.row}>
                <SimpleNavigation internalPages={internalPages}
                                  setCurrentPage={setCurrentRootPage}/>
                <CreateLogo/>
                {/*<ProfileLink userName={'Тестовый Тест'} />*/}
                <LoginLink/>
            </div>
        </div>
        {children}
        <div className={s.root_footer}>
            <CopyrightIcon/>
            CODE0-ST / GITHUB COMMUNITY
        </div>
    </div>
}

const mapStateToProps = (state: TRootState) => ({
    internalPages: state.rootPage.internalPages,
})
const mapDispatchToProps = {
    setCurrentRootPage
}

export const RootPageContainer = connect(mapStateToProps, mapDispatchToProps)(RootPage)