function timeConversion(s) {
    var x = s.slice(-2)
    var time = s.slice(0, -2).split(":");
    
    if (x=="AM" && time[0] == "12") {
        time[0] = "00";
    } else if (x == "PM") {
        var y = (parseInt(time[0]) % 12) + 12
        time.shift()
        time.unshift(y.toString())
    } 
    return time.join(':')
}

console.log(timeConversion("12:00:01AM"))