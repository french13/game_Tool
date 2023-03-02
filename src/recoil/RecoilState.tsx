import {atom} from 'recoil'

interface rhun {
    title : string
    ab : string
    id : string
    date : any
    point : string
  }
  


export const rhunState = atom<rhun[]>({
    key : 'rhunState',
    default : []
})