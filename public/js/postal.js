
function calculateRate(mailType, weight) {

    let price = 0; 
    let totalPrice = 0;
    let totalWeight = weight/16;
   
    switch(mailType) {
        case "priority-express":
            price = 24.70;
            totalPrice = price * totalWeight;
            break;
        case "priority":
            price = 6.7;
            totalPrice = price * totalWeight;
            break;
        case "first-class-mail":
            price = 1.10;
            totalPrice = price * totalWeight;
            break; 
        case "first-class-package":
            price = 3.5;
            totalPrice = price * totalWeight;
            break;  
        case "retail":
            price = 0.178;
            totalPrice = price * totalWeight;
            break; 

        default:
            totalPrice = -1;
    }
    console.log("Return calculate rate")

    return totalPrice
}

function postalServices (req, res) {
    console.log("calling postal Services")
    console.log
    let mailType = req.body.shipping;
    let weight = req.body.weight;
    let total = calculateRate(mailType, weight);
    res.render('pages/postal.ejs', {data:req.body, total:total})
}

module.exports = {
    postalServices
}