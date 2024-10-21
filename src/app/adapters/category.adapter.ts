import { CategoryInfo } from "../interfaces/Category.interface"


export const CategoryAdapter = (categoryInfo: CategoryInfo) => {
    return categoryInfo.content
}