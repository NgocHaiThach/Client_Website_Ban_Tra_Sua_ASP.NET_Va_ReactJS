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

    //tìm xem có sản phẩm nào trong giỏ có trùng tên với sản phẩm chuẩn bị thêm vào không?
    // => có thì trả về index trong giỏ hàng
    // const findProductInCart = useSelector((state) => {
    //     const list = state.carts.carts.dishCarts

    //     const foundProduct = list === undefined ? undefined : list.findIndex(
    //         x => toSlug(x.product.productName) === slug)
    //     // console.log('gio hàng', foundProduct)
    //     return foundProduct
    // })

    //lấy giá trị sản phẩm sẽ update dựa vào index
    //const valueUpdate = useSelector(state => state.carts.carts.dishCarts === undefined ? undefined : state.carts.carts.dishCarts[findProductInCart])



    const handleAddCartClick = (valuesAdd) => {
        if (user.UserName) {
            console.log('username', user.UserName)
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