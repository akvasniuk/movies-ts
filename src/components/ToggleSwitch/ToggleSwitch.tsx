import {FormControlLabel, FormGroup, Switch} from "@mui/material";

import {themeAction} from "../../redux/slices";
import {useAppDispatch, useAppSelector} from "../../hooks";

const ToggleSwitch = () => {
    const dispatch = useAppDispatch();
    const {darkTheme} = useAppSelector(state => state.themeReducer);

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