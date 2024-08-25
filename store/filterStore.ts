import { create } from 'zustand';

interface isCollapseInterface{
  collapse: boolean
}
interface FilterState {
  filters: any[];
  setFilters: (newFilters: any[]) => void;
  updateFilter: (sectionId: number, index: number) => void;
  unselectAll: (sectionId: number) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filters: [],

  setFilters: (newFilters) => set({ filters: newFilters }),

  updateFilter: (sectionId, index) =>
    set((state) => ({
      filters: state.filters.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              content: section.content.map((subItem:any, i:any) =>
                i === index ? { ...subItem, checked: !subItem.checked } : subItem
              ),
            }
          : section
      ),
    })),

  unselectAll: (sectionId) =>
    set((state) => ({
      filters: state.filters.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              content: section.content.map((subItem:any) => ({
                ...subItem,
                checked: false,
              })),
            }
          : section
      ),
    })),
}));


export const useCollapse=(p0: (state: any) => any)=>create<isCollapseInterface>((set)=>({
  collapse: false,
  setCollapse: (newCollapse:boolean)=>set({collapse:newCollapse})
}))