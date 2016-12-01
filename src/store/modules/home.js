import { TESTING, ADDITEM, DBL, REMOVE } from '../mutation-types';

const state = {
    test: [{
        msg: '失业',
        checkbox: false,
        showInput: false
    }],
    showTest: [],
    item: '',
    newitem: ''
}

const mutations = {
    [TESTING](state) {
        state.test.push({
            msg: state.item,
            checkbox: false,
            showInput: false
        });
        state.item = '';
    },
    [ADDITEM](state, index) {
        var _index = index.playload;
        state.test[_index].msg = state.newitem;
        state.test[_index].showInput = !state.test[_index].showInput;
        state.newitem = '';
    },
    [DBL](state, index) {
        var _index = index.playload;
        state.test.forEach(function(e) {
            e.showInput = false;
        })
        state.test[_index].showInput = true
    },
    [REMOVE](state, index) {
        var _index = index.playload;
        state.test.splice(_index, 1);
    }
}

export default {
    state,
    mutations
}