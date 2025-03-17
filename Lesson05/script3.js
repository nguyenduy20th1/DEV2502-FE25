let n = parseInt(prompt("Nhập một số: "));

if (n > 0) {
    console.log("Các số chia hết cho 5 nhỏ hơn", n, "và lớn hơn 0:");
    for (let i = 5; i < n; i += 5) {
        console.log(i);
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương!");
}
