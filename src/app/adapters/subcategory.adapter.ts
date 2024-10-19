import { SubCategoryInfo } from "../interfaces/SubCategory.interface"


export const SubCategoryAdapter = (subCategoryInfo: SubCategoryInfo) => {
    return subCategoryInfo.content;
}