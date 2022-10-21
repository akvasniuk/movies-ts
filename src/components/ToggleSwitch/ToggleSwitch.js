import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {themeAction} from "../../redux/slices";

const ToggleSwitch = () => {
    const dispatch = useDispatch();
    const {darkTheme} = useSelector(state => state.themeReducer);

    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={darkTheme}
                            onChange={() => dispatch(themeAction.toggleTheme())}
                        />
                    }
                 label=""/>
            </FormGroup>
        </div>
    );
};

export {ToggleSwitch};