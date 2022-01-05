import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductItemDetail from '../../components/Container/Product/components/ProductItemDetail';
import { addOneItemToCart } from '../../redux/apiCall';
import { accessToken } from '../../utils/getToken';
import { toSlug } from '../../utils/ToSlug';
ProductDetailPage.propTypes = {};


function ProductDetailPage(props) {

    const dispatch = useDispatch()
    const { slug } = useParams()
    const user = useSelector(state => state.user)

    //tìm xem có sp nào có tên trùng với slug => hiển thị lên detail
    const detailProduct = useSelector(state => {
        const foundProduct = state.products.products.find(x => toSlug(x.productName) === slug)
        return foundProduct
    })

    const productItemValues = detailProduct

    const handleAddCartClick = (valuesAdd) => {
        if (user.UserName) {
            addOneItemToCart(dispatch, valuesAdd)
        }
    }

    const style = {
        fontSize: 17
    }

    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-11">
                        <div className="card">
                            <ProductItemDetail
                                item={productItemValues}
                                handleAddItemToCartClick={handleAddCartClick}
                            />
                            {
                                accessToken && <ToastContainer style={style} />
                            }
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;