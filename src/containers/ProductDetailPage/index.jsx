import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductItemDetail from '../../components/Container/Product/components/ProductItemDetail';
import { addOneItemToCart, getCarts, getProducts, updateCart } from '../../redux/apiCall';
import { toSlug } from '../../utils/ToSlug';
import { addToCart } from '../HeaderCartContainer/cartSlice';

ProductDetailPage.propTypes = {};

export let idLastItem = 0
function ProductDetailPage(props) {

    const dispatch = useDispatch()
    const history = useHistory()
    const { slug } = useParams()

    //tìm xem có sp nào có tên trùng với slug => hiển thị lên detail
    const detailProduct = useSelector(state => {
        const foundProduct = state.products.products.find(x => toSlug(x.product.name) === slug)
        return foundProduct
    })

    const productItemValues = detailProduct



    //tìm xem có sản phẩm nào trong giỏ có trùng tên với sản phẩm chuẩn bị thêm vào không?
    // => có thì trả về index trong giỏ hàng
    const findProductInCart = useSelector((state) => {
        const foundProduct = state.carts.carts.findIndex(
            x => toSlug(x.product.name) === slug)
        return foundProduct
    })

    //lấy giá trị sản phẩm sẽ update dựa vào index
    const valueUpdate = useSelector(state => state.carts.carts[findProductInCart])

    //lấy giá trị cuối cùng để truy xuất id và đưa vào hàm add ở cartslice
    const length = useSelector(state => state.carts.carts.length)
    idLastItem = useSelector(state => state.carts.carts[length - 1])

    const handleAddCartClick = (productValues) => {

        //nếu không có sản phẩm trong giỏ thì thêm sp mới
        if (findProductInCart === -1) {
            addOneItemToCart(dispatch, productValues)
            console.log('add')
        }
        //có thì update số lượng
        else if (findProductInCart !== -1) {
            updateCart(dispatch, valueUpdate)
            console.log('update')
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
                            <ToastContainer style={style} />
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