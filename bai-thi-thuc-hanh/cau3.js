class Books {
    ma;
    ten;
    namxuatban;
    soquyen;
    tinhtrang

    constructor(ma, ten, namxuatban, soquyen, tinhtrang) {
        this.ma = ma;
        this.ten = ten;
        this.namxuatban = namxuatban;
        this.soquyen = soquyen;
        this.tinhtrang = tinhtrang;

    }
}

const book = [
    new Books(12345, `Toan`, 2000, 3, `True`),
    new Books(23456, `Van`, 1998, 4, `False`),
    new Books(34567, `Anh`, 1998, 5, `False`),
];

function displayBooks() {
    const tableBody = document.getElementById('bookList');
    tableBody.innerHTML = '';
    let row = ``;
    for (let i = 0; i < book.length; i++) {
        row += `<tr>
        <td>${book[i].ma}</td>
        <td>${book[i].ten}</td>
        <td>${book[i].namxuatban}</td>
        <td>${book[i].soquyen}</td>
        <td>${book[i].tinhtrang}</td>
        </tr>`;
    }
    tableBody.innerHTML = row;
}

function themSachMoi(e){
    e.preventDefault();
    const bookMa = document.getElementById('ma').value;
    const bookTen = document.getElementById('ten').value;
    const booknamXuatBan = document.getElementById('namXuatBan').value;
    const booksoLuong = document.getElementById('soLuong').value;
    const booktinhTrang = document.getElementById('tinhTrang').value;

    book.push(
        new Books(
            bookMa,
            bookTen,
            booknamXuatBan,
            booksoLuong,
            booktinhTrang,
        )
    );
    displayBooks();
    document.getElementById("bookForm").reset();
}
displayBooks();
document.getElementById("bookForm").addEventListener("submit", themSachMoi);
