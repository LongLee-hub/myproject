function check(x) {
    let mangChuoi = x.split(',');
    let mangSo = mangChuoi.map(Number);
    let mangChan = true;
    let mangLe = true;
    for (let i = 0; i < mangSo.length; i++) {
        let a = mangSo[i];
        if (a % 2 === 0) {
            mangLe = false;
        }
        else{
            mangChan = false
        }
        if (!mangChan && !mangLe){
            return -1;
        }
    }
    if (mangChan) {
        return 1;
    }else if(mangLe){
        return 0;
    }else{
        return -1;
    }
}