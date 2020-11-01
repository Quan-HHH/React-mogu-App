import { getResItemRequest } from '../../../../api/request'

export const getDiscoverList = () => {
    return ( dispatch ) => {
        getResItemRequest().then( res => {
            console.log(res)
        })
    }
}