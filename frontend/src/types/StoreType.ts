type useStoreType = {
    branch:string,
    sem:string,
    subject:string,
    filter:string,
    loading:boolean,
    updateBranch:(a:string) => (void),
    updateSem:(a:string) => (void),
    updateSubject:(a:string) => (void),
    updateFilter:(a:string) => (void),
    updateLoading:(a:boolean) => (void);
}

export default useStoreType;