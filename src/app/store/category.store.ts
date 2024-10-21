import { inject, InjectionToken } from '@angular/core';

import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { Category } from '../interfaces/Category.interface';
import { CategoryService } from '../services/Category.service';

type StoreState = {
  categories: Category[];
};

const initialState: StoreState = {
  categories: [],
};

const STORE_STATE = new InjectionToken<StoreState>('CategoryStore', {
  factory: () => initialState,
});

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<Category>(),
  withMethods((store, categoryService = inject(CategoryService)) => ({

  })),
  withHooks({
    async onInit(store, categoryService = inject(CategoryService)) {
      const categories = await lastValueFrom(
        categoryService.loadCategories(),
      );

      patchState(store, { categories });
    },
  }),

);