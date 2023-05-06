const reconstruct = function(n, mod){
    var v = [mod, 0];
    var w = [n, 1];
    while(w[0]*w[0]*2 > mod){
        q = Math.floor(v[0] / w[0]);
        z = [v[0] - q*w[0], v[1] - q*w[1]];
        v = w;
        w = z;
        console.log(JSON.stringify(w));
    }
    if(w[1] < 0){
        w[0] *= -1;
        w[1] *= -1;
    }
    return w;
}

const add_rational_expression = function(original, mod){
    original += '*';
    var buffer = "";
    var res = "";
    for(var i = 0;i < original.length;i++){
        var c = original[i];
        if('0' <= c && c <= '9'){
            buffer += c;
        }
        else{
            if(buffer != ""){
                var num = parseInt(buffer);
                if(num < mod && num * num * 2 > mod){
                    w = reconstruct(num, mod);
                    buffer += ' <font color="red">' + w[0] + "/" + w[1] + "</font> ";
                }
                res += buffer;
                buffer = "";
            }
            res += c;
        }
    }
    return res.slice(0, -1);
}

window.onload = function() {
    var mod = -1;
    var statement = document.getElementById("task-statement");
    var src = statement.innerHTML;
    if(src.indexOf("998244353") != -1 || src.indexOf("998,244,353") != -1){
        mod = 998244353;
    }
    if(src.indexOf("1000000007") != -1 || src.indexOf("10^{9}+7") != -1 || src.indexOf("1,000,000,007") != -1){
        mod = 1000000007;
    }
    if(mod != -1){
        statement.innerHTML = add_rational_expression(src, mod);
    }
};
