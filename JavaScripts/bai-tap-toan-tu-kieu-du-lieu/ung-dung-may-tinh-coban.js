function ketqua(pheptinh){
    let a1 = parseFloat(document.getElementById("a").value);
    let b1 =parseFloat(document.getElementById("b").value);
    let result;
    if (isNaN(a1)||isNaN(b1)) {
        result = "Vui lòng nhập đầy đủ số"
    }else {
        switch (pheptinh){
            case 'cong':
                result = `${a1}+${b1}=${a1+b1}`
                break;
            case 'tru':
                result = `${a1}-${b1}=${a1-b1}`
                break;
            case 'nhan':
                result = `${a1}*${b1}=${a1*b1}`
                break;
            case 'chia':
                if(b1===0){
                    result = 'Không thể chia cho 0'
                }else {
                    result = `${a1}/${b1}=${a1/b1}`
                }
                break;
        }
    }
    document.getElementById("result").innerHTML = result;
}