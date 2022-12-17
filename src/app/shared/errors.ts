export function errorHandler(error: any){
    if(error.includes(`User validation failed`)){
      return error.split(': ')[2]
    } 
    else {
        return error
    }
}