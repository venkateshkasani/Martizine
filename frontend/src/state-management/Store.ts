import  { create } from 'zustand'
import useStoreType from '@/types/StoreType';

const useStore = create<useStoreType>((set) => ({
  branch:'',
  sem:'',
  subject:'',
  filter:'',
  updateBranch: (updatedBranch:string) => set({branch: updatedBranch}),
  updateSem: (updatedSem:string) => set({sem: updatedSem}),
  updateSubject: (updatedSubject:string) => set({subject: updatedSubject}),
  updateFilter:(updatedFilter:string) => {
    console.log("filter updated globally",updatedFilter)
    set({filter:updatedFilter})
  },
}))

export default useStore;