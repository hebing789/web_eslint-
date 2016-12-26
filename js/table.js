window.onload = function () {
/*    document.oncontextmenu = function (e) {
        e.preventDefault();
    };*/
    var table=document.getElementById("table");
    var tab = document.getElementById("table").rows;//all rows of tab;
    var cells = tab.item(0).cells;;
    var i = 0
    var a = 0
    var j = 0

    var rLen = tab.length;
    var cLen = cells.length;
    var key = 0;
    var startRow = 0, startCell = 0, endRow = 0, endCell = 0;
    for (; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            a = (function (i, j) {

                tab[i].cells[j].onmousedown = function (e) {// onmouseover event


                    if (e.button == 0) {
                        this.style.backgroundColor = "#f00";
                        key = 1;
                        startRow = i;
                        startCell = j;
                    }
                    if (e.button == 2) {
                        var menu = document.getElementById("menu");
                        var merge=document.getElementById("he");
                        var unMerge=document.getElementById("un_he");
                        document.oncontextmenu = function(e) {
                            var e = e || window.event;
                            //鼠标点的坐标
                            var oX = e.clientX;
                            var oY = e.clientY;
                            //菜单出现后的位置
                            menu.style.display = "block";
                            menu.style.left = oX + "px";
                            menu.style.top = oY + "px";
                            //阻止浏览器默认事件
                            return false;//一般点击右键会出现浏览器默认的右键菜单，写了这句代码就可以阻止该默认事件。
                        };
                        document.onclick = function(e) {
                            var e1 = e || window.event;
                            menu.style.display = "none";
                        };
                        menu.onclick = function(e) {
                            var e2 = e || window.event;
                            e.cancelBubble = true;
                        };
                        var row=endRow-startRow;
                        var cell=endCell-startCell;
                        /*解除合并*/
                        unMerge.onclick = function(e){
                            var a=tab[startRow].cells[startCell].rowSpan;
                            var b =tab[startRow].cells[startCell].colSpan;
                            //*解除合并单元格方法*/
                            for(i=0;i<=a;i++){
                                for(j=0;j<=b;j++){
                                    if(i==0&&j==0){

                                    }else {
                                        tab[startRow+i].cells[startCell+j].style.display = "table";
                                        tab[startRow+i].cells[startCell+j].style.backgroundColor = "yellow";
                                        tab[startRow+i].cells[startCell+j].style ="border-collapse: separate;border-spacing: 2px;border-color: grey;" ;
                                    }
                                }

                            }
                            tab[startRow].cells[startCell].rowSpan=1;
                            tab[startRow].cells[startCell].colSpan=1;
                            tab[startRow].cells[startCell].style.backgroundColor = "white";



                        };
                        /*点击合并后合并单元格*/
                        merge.onclick=function (e) {
                            menu.style.display="none";
                            if(endRow!=startRow || endCell!=startCell){

                                if(endRow!=startRow){

                                    tab[startRow].cells[startCell].rowSpan=Math.abs(row+1);

                                }
                                if(endCell!=startCell){

                                    tab[startRow].cells[startCell].colSpan=Math.abs(cell+1);


                                }
                                //*合并单元格方法*/
                                for(i=0;i<=row;i++){
                                    for(j=0;j<=cell;j++){
                                        if(i==0&&j==0){
                                            tab[startRow+i].cells[startCell+j].style.backgroundColor = "white";
                                        }else {
                                            tab[startRow+i].cells[startCell+j].style.display = "none";
                                        }
                                    }

                                }



                            }


                        };
                    }
                };
                /*鼠标起来后统计选中的结束位置*/
                tab[i].cells[j].onmouseup = function () {
                    if (key == 1) {
                       /* //this.style.backgroundColor = "#0f0";*/
                        key = 2;
                        endRow = i;
                        endCell = j;
                    }
                };


                /*,鼠标点下去key=1,移动过程中更改单元格颜色*/
                tab[i].cells[j].onmousemove = function () {
                    /*key记录当前鼠标为点下去的状态*/
                    if (key == 1) {
                        /*移动中更改颜色*/
                        var rownum = tab.length;
                        var colnum =  tab[0].cells.length;
                        for (var a =0;a<rownum;a++){
                            for(var b =0;b<colnum;b++){
                                tab[a].cells[b].style.backgroundColor = "white";
                            }
                        }

                        var r = i;
                        var c = j;
                        if (startRow != r && startCell != c) {
                            for (var x = Math.min(startRow, r); x <= Math.max(startRow, r); x++) {
                                for (var y = Math.min(startCell, c); y < Math.max(startCell, c)+1; y++) {
                                    tab[x].cells[y].style.backgroundColor = "#00f";
                                }
                            }
                        }
                        else if (startRow != r || startCell != c) {
                            this.style.backgroundColor = "#00f";
                        }
                    }
                };
            }(i, j));

        }


    }

};


function merge() {
      const ret = {}
    for (const i in arguments) {
        const m = arguments[i]
        for (const j in m) ret[j] = m[j]
    }
    return ret
}




console.log(merge({ a: 123 }, { b: 456 }))


/*var tables = document.getElementsByTagName('table');
 var table = tables[0];
 table.onmousedown = function(){
 /!*获取选中的标签*!/
 var targ
 if (!e) var e = window.event
 if (e.target) targ = e.target
 else if (e.srcElement) targ = e.srcElement
 targ = targ.parentNode
 //document.getElementsByTagName('td')[0].style.color="#070000";



 }

 table.onmouseup = function(){
 /!*获取选中的标签*!/
 var targ
 if (!e) var e = window.event
 if (e.target) targ = e.target
 else if (e.srcElement) targ = e.srcElement
 targ = targ.parentNode;
 targ.style.color="#070000";



 }*/


//var start_e;
//var end_e;
//function whichButton(event)
//{
//    var btnNum = event.button;
//    if (btnNum==2)
//    {
//        alert("您点击了鼠标右键！");
//    }
//    else if(btnNum==0)
//    {
//
//    }
//    else if(btnNum==1)
//    {
//        alert("您点击了鼠标中键！");
//    }
//    else
//    {
//        alert("您点击了" + btnNum+ "号键，我不能确定它的名称。");
//    }
//}
//function mousedown(e){
//
//
//        start_e=e;
//        e.style.backgroundColor="#a1d9ff";
//
//
//
//
//}
//
//function mouseup(e){
//    end_e=e;
//    e.style.backgroundColor="#a1d9ff";
//    control_td_color(start_e,end_e);
//    if (e.button == 0) {
//        this.style.backgroundColor = "#a1d9ff";
//
//    }
//
//
//
//    }
//
//function mousemove(e){
//    if(e.button!=0){
//        return;
//    }
//
//    e.style.backgroundColor="#a1d9ff";
//}
//
//
//function control_td_color(starte,ende){
///*思路,1获取整个table对象,
//2判断其实位置的坐标
//,3获取结束位置在table的坐标,
//4遍历table中起始位置到结束位置,更改其颜色*/
//
//
//
//}
//
//function selected(e){
//    e.style.backgroundColor="#a1d9ff";
//}