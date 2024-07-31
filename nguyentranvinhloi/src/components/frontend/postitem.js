import { Link } from 'react-router-dom';
import {urlImage} from '../../config';


function PostItem(props) {
    return (
        <div className="col-md-3 mb-3"  >
            <div className="product-item bg-white" style={{height:"230px"}}>
                <div className="product-image text-center">
                    <Link to={"/chi-tiet-bai-viet/"+props.post.slug}>
                        <img src={urlImage+"post/"+props.post.image} className="img-fluid" alt={props.post.image} />
                    </Link>
                </div>
                <div className="post-name p-2">
                    <h3 className="text-center fs-6">
                    <Link className="nav-link" to={"/chi-tiet-bai-viet/"+props.post.slug}>
                        {props.post.title}
                    </Link>
                    </h3>
                    
                </div>

                
            </div>


        </div>
    );
}
export default PostItem;