import { inject, InjectionToken } from '@angular/core';

import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { SubCategory } from '../interfaces/SubCategory.interface';
import { SubCategoryService } from '../services/SubCategory.service';


type StoreState = {
  subCategories: SubCategory[];
};

const initialState: StoreState = {
  subCategories: [],
};

const STORE_STATE = new InjectionToken<StoreState>('SubCategoryStore', {
  factory: () => initialState,
});

export const SubCategoryStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<SubCategory>(),
  withMethods((store, subCategoryService = inject(SubCategoryService)) => ({

  })),
  withHooks({
    async onInit(store, subCategoryService= inject(SubCategoryService)) {
      const subCategories = await lastValueFrom(
        subCategoryService.getAllSubCategories(),
      );subCategoryService

      patchState(store, { subCategories });
    },
  }),

);