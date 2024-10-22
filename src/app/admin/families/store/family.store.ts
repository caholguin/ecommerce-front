import { inject, InjectionToken } from '@angular/core';

import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { Family } from '../../../interfaces/Category.interface';
import { FamilyService } from '../services/Family.service';
import { family } from '../family.routes';


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

    getFamily(id: number) {
      return store.families().find((fam) => fam.id === id);
    },

    async addFamily(family: Omit<Family, 'id'>) {      
      try {
        const newFamily = await lastValueFrom(familyService.addFamily(family));

        patchState(store, ({ families }) => ({
          families: [
            ...families,
            { id: newFamily.id, ...family },
          ],
        }));
      } catch (error) {}
    },

    async removeFamily(id: number) {
      try {
        await lastValueFrom(familyService.removeFamily(id));

        patchState(store, ({ families }) => ({
          families: families.filter((fam) => fam.id !== id),
        }));
      } catch (error) {}
    },

    async updateFamily(id:number, family: Family) {
      try {
        await lastValueFrom(familyService.updateFamily(id,family));

        patchState(store, ({ families }) => ({
          families: families.map((fam) =>
            fam.id === family.id ? { ...fam, ...family } : fam,
          ),
          isLoading: false,
        }));
      } catch (error) {}
    },   

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