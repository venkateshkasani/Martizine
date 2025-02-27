import  { create } from 'zustand'
import useStoreType from '@/types/StoreType';

const useStore = create<useStoreType>((set) => ({
  branch:'',
  sem:'',
  subject:'',
  updateBranch: (updatedBranch:string) => set({branch: updatedBranch}),
  updateSem: (updatedSem:string) => set({sem: updatedSem}),
  updateSubject: (updatedSubject:string) => set({subject: updatedSubject}),
}))

export default useStore;