import { toast } from "react-toastify"

const getStoreReadList = () =>{
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }

    else{
         return []
    }

}

const addToStoreReadList = (id) =>{
    const storedList = getStoreReadList()
    if(storedList.includes(id)){
        console.log(id, 'already exist')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        toast('this book added to your read list')
    }
 }

 export {addToStoreReadList,getStoreReadList}