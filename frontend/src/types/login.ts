export type loginCredentials = {
   clientId:string,
   select_by:string,
   credential:string
}

export type userDataType = {
   name:string,
   email:string,
   picture:string,
   role:"admin" | "user",
   savedFiles:string[]
}