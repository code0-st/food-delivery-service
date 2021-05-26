import {TEnumItem} from "../../../redux/reducers/enums/types.data";

export interface ICatalogsPageProps {
    catalogs: TEnumItem[]
    catalogsLoading: boolean
    getCatalogsAsync: any
}

export interface ICatalogCardProps {
    catalog: TEnumItem
    index: number
}