function kiemTraMangKyTu(arr) {
    if (!arr || arr.length === 0) {
        return -1; // Mảng rỗng hoặc không hợp lệ
    }

    let chiCoSo = true;
    let chiCoChu = true;

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];

        // Kiểm tra xem có phải ký tự số không (0-9)
        const laSo = /^[0-9]$/.test(char);

        // Kiểm tra xem có phải ký tự chữ không (a-zA-Z)
        const laChu = /^[a-zA-Z]$/.test(char);

        if (!laSo) {
            chiCoSo = false; // Nếu không phải số, thì không phải mảng chỉ chứa số
        }

        if (!laChu) {
            chiCoChu = false; // Nếu không phải chữ, thì không phải mảng chỉ chứa chữ
        }

        // Nếu đã xác định chứa cả chữ và số hoặc ký tự đặc biệt, có thể dừng sớm
        if (!chiCoSo && !chiCoChu) {
            return -1;
        }
    }

    if (chiCoSo) {
        return 1; // Mảng chỉ chứa ký tự số
    } else if (chiCoChu) {
        return 0; // Mảng chỉ chứa ký tự chữ
    } else {
        return -1; // Mảng chứa cả chữ và số hoặc ký tự đặc biệt
    }
}