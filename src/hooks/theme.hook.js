import {useSelector} from "react-redux";

const useAppTheme = () => {
    const {darkTheme} = useSelector(state => state.themeReducer);

    return {
        background: darkTheme ? "rgba(0,0,0,0.83)" : '',
        color: darkTheme ? "white" : ''
    }
}

export {
    useAppTheme
}