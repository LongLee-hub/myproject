function doitien(){
let amount1 = parseFloat(document.getElementById("amount").value);
let loai1 = document.getElementById("currentcy1").value;
let loai2 = document.getElementById("currentcy2").value;
let result;
console.log(typeof amount1);
if (loai1 =="VNĐ" && loai2 == "USD"){
    result= amount1*24.5 + " VNĐ";
}else if (loai1 == "USD" && loai2 == "VNĐ"){
    result= amount1/24.5 + " USD";
}else if (loai1 == "VNĐ"){
    result= amount1 + " VNĐ"
}else{
    result= amount1 +" USD"
}

    document.getElementById("result").innerHTML = result;
}