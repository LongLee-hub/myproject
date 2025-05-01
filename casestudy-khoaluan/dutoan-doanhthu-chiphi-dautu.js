
class Room {
    name;
    invest;
    price;
    occupancyRate;
    revenue

    constructor(name, invest, price, occupancyRate, revenue) {
        this.name = name;
        this.invest = invest;
        this.price = price;
        this.occupancyRate = occupancyRate;
        this.revenue = revenue;
    }
}

const room = [
    new Room(`room1`, 100000000, 499000, 0.8),
    new Room(`room2`, 100000000, 599000, 0.8),
    new Room(`room3`, 100000000, 699000, 0.8),
];
console.log(room)

let roomIndex = -1;
let totalInvest = 0;

function displayRoom() {
    const tableBody = document.getElementById('roomList');
    tableBody.innerHTML = '';
    let row = '';
    for (let i = 0; i < room.length; i++) {
        console.log(room[i].name);
        row += `<tr>
        <td>${room[i].name}</td>
        <td>${room[i].invest.toLocaleString()} VND</td>
        <td>${room[i].price.toLocaleString()} VND</td>
        <td>${room[i].occupancyRate}</td>
        <td><button type="button" onclick="handleEdit(${i})">Edit </button></td>
        <td><button type="button" onClick="handleDelete(${i})">Delete</button> </td>
        </tr>`;
    }
    totalInvest = 0
    for (let i = 0; i < room.length; i++) {
        totalInvest += room[i].invest;
    }
    let row2 = `<tr>
<td>Tổng đầu tư</td>
<td>${totalInvest.toLocaleString()} VND</td>
</tr>`
    tableBody.innerHTML = row + row2;
}

function createRoom(e) {
    e.preventDefault();
    const roomName = document.getElementById('roomName').value;
    const roomInvest = parseInt(document.getElementById('roomInvest').value);
    const roomPrice = parseInt(document.getElementById('roomPrice').value);
    const roomOccupancyRate = parseFloat(document.getElementById('roomOccupancyRate').value);
    // Ẩn bảng doanh thu khi chuẩn bị sửa
    document.getElementById("revenueSection").style.display = "none";
    document.getElementById("expensesSection").style.display = "none";
    document.getElementById("profitSection").style.display = "none";
    if (roomIndex !== -1) {
        room[roomIndex].name = roomName;
        room[roomIndex].invest = roomInvest;
        room[roomIndex].price = roomPrice;
        room[roomIndex].occupancyRate = roomOccupancyRate;
        roomIndex = -1;
    } else {
        room.push(
            new Room(
                roomName,
                roomInvest,
                roomPrice,
                roomOccupancyRate
            )
        );
    }
    displayRoom();
    document.getElementById("roomForm").reset();

}

function handleDelete(index) {
    if (confirm(`Bạn có muốn xóa sản phẩm ${room[index].name} không?`)) {
        room.splice(index, 1);
        displayRoom();
        // Ẩn bảng doanh thu khi chuẩn bị sửa
        document.getElementById("revenueSection").style.display = "none";
        document.getElementById("expensesSection").style.display = "none";
        document.getElementById("profitSection").style.display = "none";
    }
}

function handleEdit(index) {
    roomIndex = index;
    document.getElementById('roomName').value = room[index].name;
    document.getElementById('roomInvest').value = room[index].invest;
    document.getElementById('roomPrice').value = room[index].price;
    document.getElementById('roomOccupancyRate').value = room[index].occupancyRate;
    // Ẩn bảng doanh thu khi chuẩn bị sửa
    document.getElementById("revenueSection").style.display = "none";
    document.getElementById("expensesSection").style.display = "none";
    document.getElementById("profitSection").style.display = "none";

}

let totalRevenue = 0;

function duToan() {
    const revenueBody = document.getElementById("revenueTable");
    const revenueSection = document.getElementById("revenueSection");

    revenueBody.innerHTML = ''; // Xóa dữ liệu cũ
    revenueSection.style.display = "block"; // Hiện bảng khi bấm nút
    let row = ` `
    for (let i = 0; i < room.length; i++) {
        room[i].revenue = room[i].price * room[i].occupancyRate * 30;
        row += `<tr>
                <td>${room[i].name}</td>
                <td>${room[i].revenue.toLocaleString()} VND</td>
                </tr>`
    }
    totalRevenue = 0
    for (let i = 0; i < room.length; i++) {
        totalRevenue += room[i].revenue;
    }
    let row2 = `<tr>
                        <td>Tổng doanh thu</td>
                        <td>${totalRevenue.toLocaleString()} VND</td>
                        </tr>`
    revenueBody.innerHTML = row + row2;
}
let totalCost = 0
function chiPhi() {
    const expensesBody = document.getElementById("expensesTable");
    const expensesSection = document.getElementById("expensesSection");

    expensesBody.innerHTML = ''; // Xóa dữ liệu cũ
    expensesSection.style.display = "block"; // Hiện bảng khi bấm nút\
    totalCost = 0

    let rent = room.length * 4000000;
    let nhuyeupham = totalRevenue * 0.01;
    let giatla = totalRevenue * 0.05;
    let dien = totalRevenue * 0.09;
    let nuoc = totalRevenue * 0.02;
    let wifi = 248000;
    let netflix = 230000;
    totalCost = rent + nhuyeupham + giatla + dien + nuoc + wifi + netflix;
    let row = `
<tr>
<td>Thuê nhà</td>
<td></td>
<td>${(rent).toLocaleString()} VND</td>
</tr>
<tr>
<td>Nhu yếu phẩm </td>
<td>1%</td>
<td>${(nhuyeupham).toLocaleString()} VND</td>
</tr>
<tr>
<td>Giặt là</td>
<td>5%</td>
<td>${(giatla).toLocaleString()} VND</td>
</tr>
<tr>
<td>Điện</td>
<td>9%</td>
<td>${dien.toLocaleString()} VND</td>
</tr>
<tr>
<td>Nước</td>
<td>2%</td>
<td>${nuoc.toLocaleString()} VND</td>
</tr>
<tr>
<td>Wifi</td>
<td></td>
<td>${wifi.toLocaleString()} VNĐ</td>
</tr>
<tr>
<td>Netflix</td>
<td></td>
<td>${netflix.toLocaleString()} VNĐ</td>
</tr>
<tr>
<td>Tổng cộng</td>
<td></td>
<td>${totalCost.toLocaleString()} VNĐ</td>
</tr> `
    expensesBody.innerHTML = row
}
function loiNhuan() {
    const profitBody = document.getElementById("profitTable");
    const profitSection = document.getElementById("profitSection");
    profitBody.innerHTML = ''; // Xóa dữ liệu cũ
    profitSection.style.display = "block"; // Hiện bảng khi bấm nút\

    let row = ` `;
    row = `
<tr>
<td>Tổng doanh thu</td>
<td>${totalRevenue.toLocaleString()} VNĐ</td>
</tr>
<tr>
<td>Tổng chi phí</td>
<td>${totalCost.toLocaleString()} VNĐ</td>
</tr>
<tr>
<td>Lợi nhuận</td>
<td>${(totalRevenue - totalCost).toLocaleString()} VNĐ </td>
</tr>
<tr>
<td>Đầu tư</td>
<td>${totalInvest.toLocaleString()} VNĐ</td>
</tr>
<tr>
<td>Thời gian hoàn vốn (tháng)</td>
<td>${(totalInvest / (totalRevenue - totalCost)).toFixed(2)}</td>
</tr>`
    profitBody.innerHTML = row
}
function xuatDutoan(){
    duToan();
    chiPhi();
    loiNhuan();
}

displayRoom();
document.getElementById("roomForm").addEventListener("submit", createRoom);