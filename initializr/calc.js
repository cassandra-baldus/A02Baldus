var item;
var quantity;
var price;
var total = 0;
var tax = .03225;

function calcTotal(){
    var order = $("#form1").value;
    for (var i; i < order.length; i++){
        switch (order[i]){
            case "CHICKEN NUGGETS":
                price = 4.49
                total += price * quantity
                break;
            case "2 CHEESEBURGERS":
                price = 2
                total += price * quantity
                break;
            case "BIG MAC":
                price = 3.99
                total += price * quantity
                break;
            case "QUARTER POUNDER":
                price = 3.79
                total += price * quantity
                break;
            case "CHICKEN MCWRAP":
                price = 4.39;
                total += price * quantity
                break;
            case "FRIES":
                price = 1.79;
                total += price * quantity
                break;
            case "SODA":
                price = 1.29
                total += price * quantity
                break;
            case "SWEET TEA":
                price = 1.29
                total += price * quantity
                break;
            case "ORANGE JUICE":
                price = 1.89
                total += price * quantity
                break;
            default:
                total += 0;
        }
    }
    return total;
}