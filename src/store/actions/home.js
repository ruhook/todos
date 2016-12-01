import { TESTING, ADDITEM, DBL, REMOVE } from '../mutation-types';

export const testing = ({ commit }, args) => {
    commit({
        type: 'TESTING',
        playload: args
    })
};
export const additem = ({ commit }, args) => {
    commit({
        type: 'ADDITEM',
        playload: args
    })
};
export const dbl = ({ commit }, args) => {
    commit({
        type: 'DBL',
        playload: args
    })
};
export const remove = ({ commit }, args) => {
    commit({
        type: 'REMOVE',
        playload: args
    })
};