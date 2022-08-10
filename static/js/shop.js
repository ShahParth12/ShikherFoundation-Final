var shopcart = [];
$(document).ready(function () {
  outputCart();
  $(".productItem").click(function (e) {
    e.preventDefault();
    var iteminfo = $(this.dataset)[0];
    iteminfo.qty = 1;
    var itemincart = false;
    $.each(shopcart, function (index, value) {
      //console.log(index + '  ' + value.id);
      if (value.id == iteminfo.id) {
        value.qty = parseInt(value.qty) + parseInt(iteminfo.qty);
        itemincart = true;
      }
    });
    if (!itemincart) {
      shopcart.push(iteminfo);
    }
    sessionStorage["sca"] = JSON.stringify(shopcart);
    outputCart();
    ///
  });

  function outputCart() {
    if (sessionStorage["sca"] != null) {
      shopcart = JSON.parse(sessionStorage["sca"].toString());
      console.log(sessionStorage["sca"]);
      $("#checkoutdiv").show();
    }
    var holderHTML = "";
    var total = 0;
    var itemCnt = 0;
    $.each(shopcart, function (index, value) {
      console.log(value);
      var stotal = value.qty * value.price;
      total += stotal;
      itemCnt += parseInt(value.qty);
      holderHTML +=
        "<tr><td>" +
        value.qty +
        "</td><td>#" +
        value.id +
        " " +
        value.name +
        "(" +
        value.s +
        ")</td><td> " +
        formatMoney(value.price) +
        ' </td><td class="text-xs-right"> ' +
        formatMoney(stotal) +
        "</td></tr>";
    });
    holderHTML +=
      '<tr><td colspan="3" class="text-xs-right">Total</td><td class="text-xs-right">' +
      formatMoney(total) +
      "</td></tr>";
    $("#output").html(holderHTML);
    $(".total").html(formatMoney(total));
    $(".items").html(itemCnt);
  }

  function formatMoney(n) {
    return "₹" + (n / 100).toFixed(2);
  }
});