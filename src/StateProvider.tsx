import React, {createContext, useContext, useReducer} from "react";
import { initialState, reducer, IAction, IState } from './reducer';

interface Props {
    reducer: any;
    initialState: any;
    children: any;
}

const StateContext = createContext(initialState);

const dispatchContext = createContext((() => true) as React.Dispatch<IAction>)

export const Provider:React.FunctionComponent = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <dispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </dispatchContext.Provider>
    )
}

export const useDispatch = () => {
    return useContext(dispatchContext);
}

export const useGlobalState = <K extends keyof IState>(property: K) => {
    const state = useContext(StateContext);
    return state[property];
}