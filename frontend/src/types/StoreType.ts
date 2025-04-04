type useStoreType = {
    branch:string,
    sem:string,
    subject:string,
    filter:string,
    updateBranch:(a:string) => (void),
    updateSem:(a:string) => (void),
    updateSubject:(a:string) => (void),
    updateFilter:(a:string) => (void),
}

export default useStoreType;