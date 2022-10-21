import {useAppSelector} from "./redux.hook";


const useAppTheme = () => {
    const {darkTheme} = useAppSelector(state => state.themeReducer);

    return {
        background: darkTheme ? "rgba(0,0,0,0.83)" : '',
        color: darkTheme ? "white" : ''
    }
}

export {
    useAppTheme
}