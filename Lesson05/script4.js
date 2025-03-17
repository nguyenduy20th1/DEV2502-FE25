function phb1(a, b) {
    if (a === 0) {
        if (b === 0) {
            console.log("Phương trình có vô số nghiệm.");
        } else {
            console.log("Phương trình vô nghiệm.");
        }
    } else {
        let x = -b / a;
        console.log("Phương trình có nghiệm x =", x);
    }
}

let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));

phb1(a, b);
