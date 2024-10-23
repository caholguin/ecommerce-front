import { inject, InjectionToken } from "@angular/core";
import { Category } from "../../../interfaces/Category.interface"
import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { withEntities } from "@ngrx/signals/entities";
import { CategoryService } from "../services/Category.service";
import { lastValueFrom } from "rxjs";


type StoreState = {
    categories: Category[];
}

const initialState: StoreState = {
    categories: [],
}

const STORE_STATE = new InjectionToken<StoreState>('CategoryStore', {
    factory: () => initialState,
  });
  
  export const CategoryStore = signalStore(
    { providedIn: 'root' },
    withState(() => inject(STORE_STATE)),
    withEntities<Category>(),
    withMethods((store, categoryService = inject(CategoryService)) => ({
  
      getCategory(id: number) {
        return store.categories().find((cat) => cat.id === id);
      },
  
      async addCategory(category: Omit<Category,"id">) {      
        try {
          const newCategory = await lastValueFrom(categoryService.addCategory(category));
  
          patchState(store, ({ categories }) => ({
            categories: [
              ...categories,
              { id: newCategory.id, ...category, family: newCategory.family },
            ],
          }));
        } catch (error) {}
      },
  
      async removeCategory(id: number) {
        try {
          await lastValueFrom(categoryService.removeCategory(id));
  
          patchState(store, ({ categories }) => ({
            categories: categories.filter((cat) => cat.id !== id),
          }));
        } catch (error) {}
      },
  
      async updateCategory(category: Category) {
        try {
          const categoryUpdate = await lastValueFrom(categoryService.updateCategory(category.id,category));
  
          patchState(store, ({ categories }) => ({
            categories: categories.map((cat) =>
              cat.id === category.id ? { ...cat, ...categoryUpdate } : cat,
            ),
            isLoading: false,
          }));
        } catch (error) {}
      },   
  
    })),
    withHooks({
      async onInit(store, categoryService = inject(CategoryService)) {
        const categories = await lastValueFrom(
          categoryService.getAllCategories(),
        );
  
        patchState(store, { categories });
      },
    }),
  
  );
