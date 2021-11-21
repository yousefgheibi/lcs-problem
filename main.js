let N = 100;
let L = new Array(N);
for (let i = 0; i < N; i++) {
    L[i] = new Array(N);

}

function findLCS(X, Y, m, n) {
    let s = new Set();
    if (m == 0 || n == 0) {
        s.add("");
        return s;
    }

    if (X[m - 1] == Y[n - 1]) {
        let tmp = findLCS(X, Y, m - 1, n - 1);
        for (let str of tmp.values())
            s.add(str + X[m - 1]);
    }

    else {
        if (L[m - 1][n] >= L[m][n - 1])
            s = findLCS(X, Y, m - 1, n);

        if (L[m][n - 1] >= L[m - 1][n]) {
            let tmp = findLCS(X, Y, m, n - 1);


            for (let item of tmp.values())
                s.add(item)
        }
    }
    return s;
}

function LCS(X, Y, m, n) {

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = Math.max(L[i - 1][j],
                    L[i][j - 1]);
        }
    }
    return L[m][n];
}

let X = "abade";
let Y = "caade";
let m = X.length;
let n = Y.length;

document.write("LCS length is " +
    LCS(X, Y, m, n) + "<br><hr>");

let s = findLCS(X, Y, m, n);
;
let substring = prompt("Please enter your pattern:");
if (substring != null) {
    for (let str of s.values()) {
        if (str.includes(substring))
            document.write(str);

    }
}




