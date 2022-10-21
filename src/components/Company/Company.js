import css from "./Company.module.css";

import {PosterPreview} from "../../components";

const Company = ({logo_path, name}) => {
    return (
        <div className={css.company}>
            <PosterPreview backdrop_path={logo_path} title={name}/>
            <span>{name}</span>
        </div>
    );
};

export {Company};