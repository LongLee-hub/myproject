function nut(content) {
    document.getElementById('displaytext').innerHTML += content;
}

function tinhtoan() {
    try {
        let congthuc = document.getElementById('displaytext').innerHTML;
        document.getElementById('displaytext').innerHTML = eval(congthuc);
    } catch (error) {
        document.getElementById('displaytext').innerHTML = error;
    }
}

function xoa() {
    document.getElementById('displaytext').innerHTML = '';
}