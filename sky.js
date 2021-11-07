var arr = [[600, 200], [750, 200], [900, 200], [1050, 200], [1200, 200], [600, 300], [750, 300], [900, 300], [1050, 300], [1200, 300], [600, 480], [750, 480], [900, 480], [1050, 480], [1200, 480]]

function getval(arr) {
    var dig = /\d+/;
    var ar = [];
    for (i of arr) {
        ar.push(dig.exec(i)[0]);
    }
    return ar
}

function pres(num) {
    press(arr[Number(num)][0], arr[Number(num)][1], 1);

}



function check(time,inde) {
    try {
        if (time == Number(getT[inde])) {
            index++;
            print(key[inde]);
            pres(key[inde]);
            check(time,index);
        }
    }
    catch (err){
        run = false;
    }
}


var file = open('/storage/emulated/0/BaiduNetdisk/光遇乐谱/寒蝉鸣泣之时 You.txt');
var text = file.read()+'';
text=text.replace(/\x00/g,'');
//print(text.match(/\u0074\u0069\u006d\u0065\u0022\u003a\d+/g));
var getT = getval(text.match(/\u0074\u0069\u006d\u0065\u0022\u003a\d+/g));
var key = getval(text.match(/\u004b\u0065\u0079\d+/g));
//print(getT);
var index = 0;
var counter = 0;
var run = true;
var counter2=0
while (run){
    if (counter2%340==0){
        check(counter, index);
        counter++;
    }
    //sleep(1);
    counter2++;

}
