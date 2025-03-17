function ptb2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                console.log("Phương trình có vô số nghiệm.");
            } else {
                console.log("Phương trình vô nghiệm.");
            }
        } else {
            let x = -c / b;
            console.log("Phương trình bậc 1 có nghiệm x =", x);
        }
    } else {
        let delta = b * b - 4 * a * c;
        console.log("Giá trị của Δ (delta) =", delta);

        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt:");
            console.log("x1 =", x1);
            console.log("x2 =", x2);
        } else if (delta === 0) {
            let x = -b / (2 * a);
            console.log("Phương trình có nghiệm kép x =", x);
        } else {
            console.log("Phương trình vô nghiệm (Δ < 0).");
        }
    }
}

let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

ptb2(a, b, c);
