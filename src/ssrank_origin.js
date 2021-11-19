//取得任务SS目标分数
//var Pts=document.getElementById("chapterPts");
//var index=Pts.selectedIndex;
//var SSPts=Pts.options[index].value;
//alert(SSPts);
//var SSPts=0;
//var shot=0;



//结算个数计算函数
function oneItemPts(itemNum,itemBuy){
i=itemNum-itemBuy;
if (i>=0) {
    return i;  }
else
      { return 0;}
}

//---------------------------------------道具输入框检测函数---------------------------------------
//取得当前持有数和任务前购买数
//var man1Pts=1,man2Pts=1
function inputItem(){
    var Pts=document.getElementById("chapterPts");
var index=Pts.selectedIndex;
var SSPts=parseInt(Pts.options[index].value);
//测试显示
document.getElementById("testSpan").innerHTML = SSPts;
    //拍摄得分
    var myShotPts=parseInt(document.getElementById("shotPts").value);
    document.getElementById("testSpan2").innerHTML = myShotPts;
    //万叶丸
    var man1Pts=parseInt(document.getElementById("man1").value);
    var man2Pts=parseInt(document.getElementById("man2").value);
    manyouganPts=oneItemPts(man1Pts,man2Pts)*250;
    //御神水
    var go1Pts=parseInt(document.getElementById("go1").value);
    var go2Pts=parseInt(document.getElementById("go2").value);
    goshinsuiPts=oneItemPts(go1Pts,go2Pts)*500;
    //净化之火
    var jyo1Pts=parseInt(document.getElementById("jyo1").value);
    var jyo2Pts=parseInt(document.getElementById("jyo2").value);
    shizumePts=oneItemPts(jyo1Pts,jyo2Pts)*2500;
    //镜石
    var ka1Pts=parseInt(document.getElementById("ka1").value);
    var ka2Pts=parseInt(document.getElementById("ka2").value);
    kagamiPts=oneItemPts(ka1Pts,ka2Pts)*5000;
    //墨壶
    var su1Pts=parseInt(document.getElementById("su1").value);
    var su2Pts=parseInt(document.getElementById("su2").value);
    sumiPts=oneItemPts(su1Pts,su2Pts)*5000;
    //十四式
    var t141Pts=parseInt(document.getElementById("t141").value);
    var t142Pts=parseInt(document.getElementById("t142").value);
    t14Pts=oneItemPts(t141Pts,t142Pts)*100;
    //零式
    var t01Pts=parseInt(document.getElementById("t01").value);
    var t02Pts=parseInt(document.getElementById("t02").value);
    t0Pts=oneItemPts(t01Pts,t02Pts)*2500;
    //61式
    var t611Pts=parseInt(document.getElementById("t611").value);
    var t612Pts=parseInt(document.getElementById("t612").value);
    t61Pts=oneItemPts(t611Pts,t612Pts)*250;
    //90式
    var t901Pts=parseInt(document.getElementById("t901").value);
    var t902Pts=parseInt(document.getElementById("t902").value);
    t90Pts=oneItemPts(t901Pts,t902Pts)*400;
    //总分显示
    
    var myItemPts=manyouganPts+goshinsuiPts+shizumePts+kagamiPts+sumiPts+t14Pts+t61Pts+t0Pts+t90Pts
    document.getElementById("testSpan3").innerHTML = myItemPts;

    document.getElementById("itemTotalMy").innerHTML = myItemPts
    var myPts=myShotPts+myItemPts
    document.getElementById("myPts").innerHTML = myPts  
    document.getElementById("testSpan4").innerHTML = myPts;
    var remainPts=SSPts-myPts;
    document.getElementById("testSpan5").innerHTML = remainPts;
    if (remainPts>0) {
        document.getElementById("totalPtsRemain").innerHTML = remainPts;
        document.getElementById("rPts").style.display = "block"

    } else {
        document.getElementById("ssComplete").style.display = "block"
        document.getElementById("rPts").style.display = "none"
    }

//测试显示

//document.getElementById("testSpan2").innerHTML = myShotPts;


}

