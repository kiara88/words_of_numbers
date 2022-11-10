function to_words() {
    var num_to_convert = document.getElementById("number").value;
    var answer = convert_num_to_text(num_to_convert);
    print_result(answer);
}

function convert_num_to_text(num_to_convert){
    var num_split = num_to_convert.split("");

    if(num_split.length == 1){
        // We have a single digit number, no value for tens, one_digit = 1
        if(num_split[0]=="0"){
            return "Zero";
        }
        else {
            return find_ones(num_split[0]);
        }
    }
    else if (num_split.length == 2) {
        // do the magic here
        if(num_split[0] == "1"){
            return find_teen(num_split[1]);
        }
        else if(num_split[0]=="2"){
            var tens = "Twenty ";
        }
        else if(num_split[0]=="3"){
            var tens = "Thirty ";
        }
        else if(num_split[0]=="4"){
            var tens = "Fourty ";
        }
        else if(num_split[0]=="5"){
            var tens = "Fifty ";
        }
        else if(num_split[0]=="6"){
            var tens = "Sixty ";
        }
        else if(num_split[0]=="7"){
            var tens = "Seventy ";
        }
        else if(num_split[0]=="8"){
            var tens = "Eighty ";
        }
        else if(num_split[0]=="9"){
            var tens = "Ninety ";
        }        

        if(tens) {
            var ones = find_ones(num_split[1]);
            if(ones) {
                return tens + ones;
            } else {
                return tens.trim();
            }
            
        }
    } 
    else {
        return "Only two digit numbers are supported!";
    }
}

function find_hundreds(){
    
}

function find_ones(num_split) {
    if(num_split=="1"){
        var ones = "One";
    }
    else if(num_split=="2"){
        var ones = "Two";
    }
    else if(num_split=="3"){
        var ones = "Three";
    }
    else if(num_split=="4"){
        var ones = "Four";
    }
    else if(num_split=="5"){
        var ones = "Five";
    }
    else if(num_split=="6"){
        var ones = "Six";
    }
    else if(num_split=="7"){
        var ones = "Seven";
    }
    else if(num_split=="8"){
        var ones = "Eight";
    }
    else if(num_split=="9"){
        var ones = "Nine";
    }    

    return ones;
}

function find_teen(second_digit) {
    if(second_digit == "0") {
        var result = "Ten";
    }
    else if(second_digit=="1"){
        var result = "Eleven";
    }
    else if(second_digit=="2"){
        var result = "Twelve";
    }
    else if(second_digit=="3"){
        var result = "Thirteen";
    }    
    else if(second_digit=="4"){
        var result = "Fourteen";
    }
    else if(second_digit=="5"){
        var result = "Fifteen";
    }
    else if(second_digit=="6"){
        var result = "Sixteen";
    }
    else if(second_digit=="7"){
        var result = "Seventeen";
    }    
    else if(second_digit=="8"){
        var result = "Eighteen";
    }
    else if(second_digit=="9"){
        var result = "Nineteen";
    }    

    return result;
}

function print_result(result) {
    if(document.getElementById("results")) {
        document.getElementById("results").innerHTML = result;
    }
}

function test_convert_num_to_text(value, answer) {
    if(convert_num_to_text(value) == answer) {
        console.log("Test Case for " + value + " passed.");
    } else {
        console.log("Test Case for " + value + " failed. Answer was " + convert_num_to_text(value));
    }
}


// Test Cases
test_convert_num_to_text("0", "Zero");
test_convert_num_to_text("3", "Three");
test_convert_num_to_text("9", "Nine");
test_convert_num_to_text("10", "Ten");
test_convert_num_to_text("11", "Eleven");
test_convert_num_to_text("14", "Fourteen");
test_convert_num_to_text("20", "Twenty");
test_convert_num_to_text("22", "Twenty Two");
test_convert_num_to_text("37", "Thirty Seven");
test_convert_num_to_text("40", "Fourty");
test_convert_num_to_text("103", "One Hundred Three");
test_convert_num_to_text("214", "Two Hundred Fourteen");
test_convert_num_to_text("300", "Three Hundred");
test_convert_num_to_text("436", "Four Hundred Thirty Six");