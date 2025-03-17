function kiemTra(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Nhập số từ người dùng
let n = parseInt(prompt("Nhập một số:"));

if (n > 1) {
    console.log("Các số nguyên tố nhỏ hơn", n, "là:");
    for (let i = 2; i < n; i++) {
        if (kiemTra(i)) {
            console.log(i);
        }
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn 1!");
}
