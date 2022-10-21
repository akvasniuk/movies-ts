import css from "./Company.module.css";

import {PosterPreview} from "../../components";
import {FC} from "react";

interface IProps {
    logo_path: string,
    name: string,
}

const Company: FC<IProps> = ({logo_path, name}) => {
    return (
        <div className={css.company}>
            <PosterPreview backdrop_path={logo_path} title={name}/>
            <span>{name}</span>
        </div>
    );
};

export {Company};