function convertNumbers(number){
  // This function will convert numbers into roman numerals
  // eg convertNumbers(100)-> c
  // Symbol  Value
  //     I       1
  //     V       5
  //     X       10
  //     L       50
  //     C       100
  //     D       500
  //     M       1,000
  if(number<0 || number>3999){
    return "That range of number is not acceptable"
  }else if(number<1){
    return "";
  }else if(number>=1000){
    return "M"+convertNumbers(number-1000);
  }else if(number>=900){
    return "CM"+convertNumbers(number-900);
  }else if(number>=500){
    return "D"+convertNumbers(number-500);
  }else if(number>=400){
    return "CD"+convertNumbers(number-400);
  }else if(number>=100){
    return "C"+convertNumbers(number-100);
  }else if(number>=90){
    return "XC"+convertNumbers(number-90);
  }else if(number>=50){
    return "L"+convertNumbers(number-50);
  }else if(number>=40){
    return "XL"+convertNumbers(number-40);
  }else if(number>=10){
    return "X"+convertNumbers(number-10);
  }else if(number>=9){
    return "IX"+convertNumbers(number-9);
  }else if(number>=5){
    return "V"+convertNumbers(number-5);
  }else if(number>=4){
    return "IV"+convertNumbers(number-4);
  }else if(number>=1){
    return "I"+convertNumbers(number-1);
  }else{
    return"my friend stop joking";
  };
};
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var numberToConvert = $("#number").val();
    var result = convertNumbers(numberToConvert);
    $(".result").text(result);
  })
});
