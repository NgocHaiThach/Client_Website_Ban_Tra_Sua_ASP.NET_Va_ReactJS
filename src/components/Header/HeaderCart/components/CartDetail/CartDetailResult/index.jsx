import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../../../../utils/FormatPrice';
import { idUser } from '../../../../../../utils/getToken'
CartDetailResult.propTypes = {};

function CartDetailResult(props) {
    const { cartList } = props

    const showTotal_SubAmount = (cartList) => {
        let total = 0
        for (let i = 0; i < cartList.length; i++) {
            total += (cartList[i].product.price + cartList[i].size.price) * cartList[i].quantily
        }
        return total
    }

    return (
        <div className="totals">
            <div className="totals-item">
                <label>Tổng:</label>
                <div className="totals-value" >{formatPrice(showTotal_SubAmount(cartList))}đ</div>
            </div>
            <div className="totals-item">
                <label>Giảm:</label>
                <div className="totals-value">10.000đ</div>
            </div>
            <div className="totals-item">
                <label>Giao Hàng:</label>
                <div className="totals-value" >15.000đ</div>
            </div>
            <div className="totals-item totals-item-total">
                <label>Tổng Cộng:</label>
                <div className="totals-value total-grand">{formatPrice(showTotal_SubAmount(cartList) - 10000 + 15000)}đ</div>
            </div>
            <Link to={`payment/${idUser}`} className="btn col l-12 checkout">Thanh Toán</Link>
        </div>
    );
}

export default CartDetailResult;