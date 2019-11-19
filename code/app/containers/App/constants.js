/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const REQUEST_API_DATA = 'boilerplate/App/REQUEST_API_DATA';
export const GET_SEARCH = 'boilerplate/App/GET_SEARCH';
export const GET_REVIEW = 'boilerplate/App/GET_REVIEW'; 
export const UPDATE_SEARCH = 'boilerplate/App/UPDATE_SEARCH'; 
export const UPDATE_REVIEW = 'boilerplate/App/UPDATE_REVIEW'; 
