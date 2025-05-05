function kiemTraMangCapPhanTuLienKe(x) {
    let mangChuoi = x.split(",")
    let mangSo = mangChuoi.map(Number);
    let ok = true;
    for (let i = 0; i < mangSo.length; i += 2) {
        if (mangSo[i] >= mangSo[i + 1]) {
            ok = false;
            break; // Nếu có cặp không thỏa mãn, dừng vòng lặp
        }
    }
    return ok;
}