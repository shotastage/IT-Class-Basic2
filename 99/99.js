for (var i = 1; i < 10; i++) {
    
    for (var j = 1; j < 10; j++) {
        document.getElementById("res").innerHTML +=  "<p class=\"piece\">" + i*j   + "</p>";
    }
    
    // 表を改行
    document.getElementById("res").innerHTML += "<br><br>";
}
