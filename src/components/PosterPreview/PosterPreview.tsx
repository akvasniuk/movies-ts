import css from "./PosterPreview.module.css";
import {imageURL} from "../../configs";
import notFoundImage from "../../assets/not_found.jpg";
import {FC} from "react";

interface IProps {
    backdrop_path: string,
    title: string,
    id?: number
}

const PosterPreview: FC<IProps> = ({backdrop_path, title}) => {
    return (
        <div className={css.img_container}>
            <p>
                {backdrop_path ? <img src={`${imageURL}/${backdrop_path}`}
                                      alt={title}/>
                    : <img src={notFoundImage}
                           alt={title}/>
                }
            </p>
        </div>
    );
};

export {PosterPreview};