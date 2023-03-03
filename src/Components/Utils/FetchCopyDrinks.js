export const fetchCopyDrinks = (items) => {
    return new Promise((resolve, reject) => {
      setTimeout (()=>{
        resolve(items)
      },3000)
    })
  }


