export const initialState = {
    basket: {
        count: 0,
        products: {
            name: 'テスト',
            id: 1,
        }
    },
};

export type IState = typeof initialState;

export interface IAction { // グローバルステイトの更新を行わせる指示の型定義
    type: 'ADD_TO_BASKET',
    item: {
        count: 0,
        products: {
            name: 'interface',
            id: 1,
        }
    }
  }

export const reducer = (state: IState, action: IAction) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: action.item
            }
        default:
            return state;
    }
}