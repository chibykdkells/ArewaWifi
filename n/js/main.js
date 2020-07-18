var price = document.getElementById("price");
var data = document.getElementById("data");
var profit = document.getElementById("profit");
var rate = document.getElementById("rate");
var percentageProfit = 0;
var priceVal = 0;
var dataVal = 0;
var unitPriceVal = 0;
var rateVal= 0;
var unitProfit= 0;
var profitVal= 0;
var revenue=0;
var str;
var res;

const formatMoney = (n,c, d, t) => {
    // var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function thousands_separators(num){ 
    // return num;
    return num.replace(/\,/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


function getProfit(){
    price.addEventListener("keyup", function(){
        let val = price.value.replace(/\,/g, '').replace(/[a-z A-z]/g, '')
        priceVal = parseFloat(val);
        price.value = thousands_separators(val);
        calculateValues()

    });
    data.addEventListener("keyup", function(){
        let val = data.value.replace(/\,/g, '').replace(/[a-z A-z]/g, '');
        dataVal = parseFloat(val);
        calculateValues()
    });

    rate.addEventListener("keyup", function(){
        let val = rate.value.replace(/\,/g, '').replace(/[a-z A-z]/g, '')
        rateVal = parseFloat(val);
        rate.value = thousands_separators(val);
        calculateValues()
    });
}

function calculateValues(){
    unitPriceVal = dataVal == 0 ? 0 : (priceVal / dataVal);
    // console.log(unitPriceVal, priceVal, "unit, price")
    document.getElementById("unitPrice").innerText = thousands_separators(formatMoney(unitPriceVal, ',', '.'));

    if(rateVal > 0){
        unitProfit = (rateVal - unitPriceVal);
        document.getElementById("unitProfit").innerText = thousands_separators(unitProfit.toFixed(2));

        profitVal = (dataVal*rateVal) - priceVal;
        document.getElementById("profit").innerText = thousands_separators(profitVal.toFixed(2));
        if (profitVal < 0){
            document.getElementById("showProfit").classList.remove("text-success");
            document.getElementById("showProfit").classList.add("text-danger");
        }
        else if (profitVal > 0){
            document.getElementById("showProfit").classList.add("text-success");
            document.getElementById("showProfit").classList.remove("text-danger");
        }

        percentageProfit = (profitVal/priceVal)*100;
        document.getElementById("percentageProfit").innerText = percentageProfit.toFixed(2); 

        revenue = (dataVal*rateVal);
        document.getElementById("revenue").innerText = thousands_separators(revenue.toFixed(2));
    }
    
}

getProfit();



/*function navigate(url){
    location.href = url;
}



//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $(theModal).on('hidden.bs.modal', function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

autoPlayYouTubeModal();*/