var size, crust, toppings, price, total;
function Pizza(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

$(document).ready(function(){
    $('button#order').click(function(){
        var pizzaSize = $('.size option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();

        var pTopping = [];
        
        $.each($("input[name='toppings']:checked"), function(){
            pTopping.push($(this).val());
        });
        var pizzaTopping = pTopping.length*100;
        var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust)+ parseInt(pizzaTopping);
        alert("Your total order is: "+pizzaTotal)
        $('.delivery').show();
        event.preventDefault();
    });
});

$(document).ready(function(){
     $('#order2').click(function(){
         $('#placeOrder2').append('<div class="row">'+
        '<div class="col-md-4">'+
    '<h4><b>Order your pizza of choice!</b></h4>'+
    '<form id="form" class="size2">'+
        '<select class="form-control">'+
            '<option label="Pepperoni Large  -  1500" value="1500"></option>'+
            '<option label="Pepperoni Medium  -  1100" value="1100"></option>'+
            '<option label="Pepperoni Small  -  850" value="850"></option>'+
            '<option label="Pepperoni sliced -  350" value="350"></option>'+

            '<option label="Zuchni Large  -  1200" value="1200"></option>'+
            '<option label="Zuchni Medium  -  900" value="900"></option>'+
            '<option label="Zuchni Small  -  600" value="600"></option>'+
            '<option label="Zuchni sliced -  200" value="200"></option>'+

            '<option label="Chicken Pesto Large  -  1300" value="1300"></option>'+
            '<option label="Chicken Pesto Medium  -  1000" value="1000"></option>'+
            '<option label="Chicken Pesto Small  -  750" value="750"></option>'+
            '<option label="Chicken Pesto sliced -  400" value="400"></option>'+

            '<option label="Bella Napoli Large  -  1100" value="1100"></option>'+
            '<option label="Bella Napoli Medium  -  945" value="945"></option>'+
            '<option label="Bella Napoli Small  -  550" value="550"></option>'+
            '<option label="Bella Napoli sliced -  200" value="200"></option>'+

            '<option label="margerita sliced -  200" value="200"></option>'+
            '<option label="margerita sliced -  200" value="200"></option>'+
            '<option label="margerita sliced -  200" value="200"></option>'+
        '</select>'+
    '</form>'+
'</div>'+
'<div class="col-md-4">'+
    '<h4>Select pizza crust!</h4>'+
    '<form id="form" class="crust2">'+
        '<select name="Crust" class="form-control">'+
            '<option label="none" value="0"></option>'+

            '<option label="Crispy large -  250" value="250"></option>'+
            '<option label="Crispy medium -  150" value="150"></option>'+
            '<option label="Crispy  small -  100" value="100"></option>'+

            '<option label="chicago pizza large  -  180" value="180"></option>'+
            '<option label="chicago pizza medium  -  150" value="150"></option>'+
            '<option label="chicago pizza small  -  120" value="120"></option>'+

            '<option label="Glutten-free large -  300" value="300"></option>'+
            '<option label="Glutten-free medium -  300" value="300"></option>'+
            '<option label="Glutten-free small -  300" value="300"></option>'+

            '<option label="pizza bagels large  -  250" value="250"></option>'+
            '<option label="pizza bagels medium  -  150" value="150"></option>'+
            '<option label="pizza bagels small  -  100" value="100"></option>'+

            '<option label="sicilian style large   -  250" value="250"></option>'+
            '<option label="sicilian style medium  -  150" value="150"></option>'+
            '<option label="sicilian style small  -  100" value="100"></option>'+
        '</select>'+
    '</div>'+
    '</form>'+

'<div class="col-md-4">'+
    '<h4>Select Toppings of choice!</h4>'+
    '<form id="form" class="topping2">'+
        '<div class="row">'+
            '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Pepperoni" value="100">Pepperoni<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Onions" value="100">Onions<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Sausage" value="100">Sausage<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Bacon" value="100">Bacon<br>'+
    '</div>'+
        '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Cheese" value="100">Cheese<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Bell-Pepper" value="100">Bell-Pepper<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Mushrooms" value="100">Mushrooms<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Olive" value="100">Olive<br>'+
    '</div>'+
'</div>'+

    '</form>'+'<br>'+
    
'</div>'+
'</div>');   
$(document).ready(function(){
    $('#secondOrder').click(function(){
        var pizzaSize2 = $('.size2 option:selected').val();
        var pizzaCrust2 = $('.crust2 option:selected').val();

        var pizzaTopping2 = [];

    $.each($("input[name='toppings2']:checked"), function(){
    pTopping2.push($(this).val());
    });

    var pizzaTopping2 = pizzaTopping2.length*100;
    var pizzaTotal2 = parseInt(pizzaSize2) + parseInt(pizzaCrust2)+ parseInt(pizzaTopping2);
    
    alert("Your total order is: "+pizzaTotal2)
    
    });
    event.preventDefault();
});

});
});

$(document).ready(function(){
    $('form#place').submit(function(){
        var name = $('input#name').val();
        var location = $('input#location').val();
        var house= $('input#house').val();
        var phone= $('input#phone').val();
        if ($('input#name').val() && $('input#location').val() && $('input#house').val() && $('input#phone').val() !== ""){
            alert(" "+name+" your order will be delivered at "+location+" house number "+house+" owner of "+ phone+" .");
        } else {
            alert("please enter your details");
        };
    });
})

function myFunction() {
    var del;
    if (confirm("Delivery Fee = Ksh 200")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
      document.getElementById("order received").innerHTML = del;
      }
      
     