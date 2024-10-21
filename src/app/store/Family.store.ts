import { inject, InjectionToken } from '@angular/core';

import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { Family } from '../interfaces/Family.interface';
import { FamilyService } from '../services/family.service';

type StoreState = {
  families: Family[];
};

const initialState: StoreState = {
  families: [],
};

const STORE_STATE = new InjectionToken<StoreState>('FamilyStore', {
  factory: () => initialState,
});

export const FamilyStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<Family>(),
  withMethods((store, familyService = inject(FamilyService)) => ({

  })),
  withHooks({
    async onInit(store, familyService = inject(FamilyService)) {
      const families = await lastValueFrom(
        familyService.getAllFamilies(),
      );

      patchState(store, { families });
    },
  }),

);