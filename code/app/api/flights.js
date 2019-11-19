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

export const getSearchResult = async(action) => { 
    try { 
        return await api.postData('/search', action.payload)
    } catch (error) {
        logger('error post profile', error)
        throw error
    }
  };  

  export const getReview = async (action) => {
    try {
        return await api.postData('/review', action.payload) 
    } catch (error) {
        logger('error.response', error)
        throw error
    }
}  
