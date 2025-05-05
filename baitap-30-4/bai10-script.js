function checkString(str) {
    if (typeof str !== 'string') {
        return []; // Trả về mảng rỗng nếu tham số không phải là chuỗi
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = new Set();

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); // Chuyển về in thường để so sánh không phân biệt hoa thường
        if (vowels.includes(char)) {
            foundVowels.add(char); // Thêm vào Set để tự động loại bỏ trùng lặp
        }
    }

    return Array.from(foundVowels); // Chuyển Set thành mảng để trả về
}

