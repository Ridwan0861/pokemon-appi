import { CombatState, ReturnPokemonMapper } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const initialState: CombatState = {
  combatList: [],
};

export const CombatSlice = createSlice({
  name: "combat",
  initialState,
  reducers: {
    addPokemonToCombat: (state, action: PayloadAction<ReturnPokemonMapper>) => {
      if (state.combatList.length < 6) {
        state.combatList.push(action.payload);
        toast.success(`${action.payload.name} ditambahkan ke daftar Tempur!`);
      } else {
        toast.warn("Daftar Pertempuran Selesai!");
      }
    },
    removePokemonFromCombat: (state, action: PayloadAction<number>) => {
      state.combatList = state.combatList.filter(
        (pokemon) => pokemon.id !== action.payload
      );

      toast.info(`Pokemon dihapus dari daftar Pertempuran!`);
    },
  },
});

export const { addPokemonToCombat, removePokemonFromCombat } =
  CombatSlice.actions;
