import {imageURL} from "../../configs";
import css from "./PosterPreview.module.css";
import notFoundImage from "../../assets/not_found.jpg";

const PosterPreview = ({backdrop_path, title}) => {

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