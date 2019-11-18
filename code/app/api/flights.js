import { logger } from '../utils/logger'
import api from './api'

export const getCities = async () => {
    try {
        const action = '/cities'
        const result = await api.getData(action)
        return result.data
    } catch (error) {
        logger('error.response', error)
        throw error
    }
} 

export const getSearchResult = async (data) => { 
    try {
        const action = '/search'
        const result = await api.postData(action, data)
        debugger;
        return result.data
    } catch (error) {
        logger('error post profile', error)
        throw error
    }
  };  

  export const getReview = async () => {
    try {
        const action = '/review'
        const result = await api.postData(action)
        return result.data
    } catch (error) {
        logger('error.response', error)
        throw error
    }
}  
