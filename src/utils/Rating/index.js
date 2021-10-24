export const showRating = (rating) => {
    let result = []
    for (let i = 1; i <= rating; i++) {
        result.push(<i key={i} className="home-product-item__star--gold fas fa-star"></i>)
    }
    for (let j = 1; j <= (5 - rating); j++) {
        result.push(<i key={4 + j} className="fas fa-star"></i>)
    }
    return (result)
}