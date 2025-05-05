function laSoNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function kiemTraMangNguyenTo(arr) {
    let mangChuoi = arr.split(',');
    let mangSo = mangChuoi.map(Number);
    if (!mangSo || mangSo.length === 0) {
        return false; // Mảng rỗng không thỏa mãn điều kiện "toàn bộ là số nguyên tố"
    }

    for (let i = 0; i < mangSo.length; i++) {
        const num = mangSo[i];

        // Kiểm tra xem phần tử có phải là số nguyên không
        if (!Number.isInteger(num)) {
            return false;
        }

        // Kiểm tra xem phần tử có phải là số nguyên tố không
        if (!laSoNguyenTo(num)) {
            return false; // Nếu tìm thấy một phần tử không phải số nguyên tố, trả về false ngay
        }
    }

    // Nếu vòng lặp hoàn thành mà không trả về false, có nghĩa là tất cả các phần tử đều là số nguyên tố
    return true;
}