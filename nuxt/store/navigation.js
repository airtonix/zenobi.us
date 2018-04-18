import debug from 'debug';

const log = debug('client/store/navigation');

export const types = {
    SET_ITEM_OFFSCREEN: 'SET_ITEM_OFFSCREEN'
};

export const state = () => ({
    tree: [
        { id: 1, label: 'home', url: '/', icon: 'gesture', iconOnly: true},
        { id: 2, label: 'resume', url: '/resume'},
        { id: 3, label: 'stories', url: '/stories'},
        { id: 4, label: 'projects', url: '/projects'},
    ],
});

export const getters = {
    tree (state) { return state.tree; },
}

export const mutations = {
    [types.SET_ITEM_OFFSCREEN] (state, {id, yesno}) {
        const item = state.tree.find(item => item.id === id);
        if (!item) {
            return;
        }
        log('mutate.SET_ITEM_OFFSCREEN', {item, yesno});
        item.offScreen = yesno;
    }
}

export const actions = {
    setItemOffScreen ({commit}, {id, yesno}) {
        log('action.setItemOffScreen', {id, yesno});
        commit(types.SET_ITEM_OFFSCREEN, {id, yesno});
    }
}