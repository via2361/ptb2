function giaiPhuongTrinhBac2(a, b, c) {
    var delta = b * b - 4 * a * c;

    if (a == 0) {
        return "Phương trình vô nghiệm";
    }
    else {
        if (delta < 0) {
            return "Phương trình vô nghiệm";
        } else if (delta === 0) {
            var x = -b / (2 * a);
            return "Phương trình có nghiệm kép x = " + x;
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
        }
    }
}

var a = 0;
var b = -3;
var c = 2;

console.log(giaiPhuongTrinhBac2(a, b, c));
