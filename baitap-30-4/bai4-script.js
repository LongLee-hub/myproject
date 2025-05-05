function find(x) {
    // Bước 1: Kiểm tra định dạng phân số
    const regexPhanSo = /^(\-?\d+)\/(\-?\d+)$/;
    const match = x.match(regexPhanSo);

    if (!match) {
        return "Không phải là phân số";
    }

    // Bước 2: Lấy tử số và mẫu số
    let tuSo = parseInt(match[1]);
    let mauSo = parseInt(match[2]);

    // Bước 3: Kiểm tra mẫu số bằng 0
    if (mauSo === 0) {
        return "Không phải là phân số (Mẫu số bằng 0 không hợp lệ)";
    }

    // Bước 4: Xử lý trường hợp tử số bằng 0
    if (tuSo === 0) {
        return "0";
    }

    // Bước 5: Tìm ước số chung lớn nhất (GCD)
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const ucln = gcd(tuSo, mauSo);

    // Bước 6: Rút gọn phân số
    tuSo /= ucln;
    mauSo /= ucln;

    // Bước 7: Đảm bảo mẫu số là dương (nếu có dấu âm)
    if (mauSo < 0) {
        tuSo *= -1;
        mauSo *= -1;
    }

    // Bước 8: Trả về phân số đã rút gọn
    return `${tuSo}/${mauSo}`;
}
