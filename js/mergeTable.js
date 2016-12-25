window.onload = function () {

    var table=document.getElementById("table");
    var tab = table.rows;//all rows of tab;

    var cells = tab.item(0).cells;
    var rLen = tab.length;
    var cLen = cells.length;

    var startRow = 0, startCell = 0, endRow = 0, endCell = 0;
    var key =0;
    //console.debug(table.width);
    //var tdwidth = tab[0].cells[0].width;
    //var  tdheight = tab[0].cells[0].height;
    //console.debug("tdwidth"+tdwidth+"tdheight"+tdheight+table.width);




    var tdheight = tab[0].cells[0].offsetHeight +1;
    var tdwidth = tab[0].cells[0].offsetWidth +1;
    var startx = table.rows[0].cells[0].offsetLeft+table.rows[0].cells[0].clientLeft;
    var starty = table.rows[0].cells[0].offsetTop+table.rows[0].cells[0].clientTop;
    table.onmousedown = function(e){
        //选中颜色处理

        if (e.button == 0){
            key=1;
//起点省略小数部分
            /*移动中清除颜色*/
            var rownum = tab.length;
            var colnum =  tab[0].cells.length;
            for (var a =0;a<rownum;a++){
                for(var b =0;b<colnum;b++){
                    table.rows[a].cells[b].style.backgroundColor = "white";
                }
            }



            startCell = parseInt((e.clientX-startx)/tdwidth);
            startRow = parseInt((e.clientY-starty)/tdheight);
                 //table.rows[parseInt(startRow)].cells[parseInt(endRow)].style.backgroundColor = "#00f";

            console.debug("onmousedown"+key+ "x:"+e.clientX+"y:"+ e.clientY+"startCell"+startCell+"startRow"+startRow);



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
            var startRow1 = parseInt(Math.min(startRow, endRow));
            var  endRow1= parseInt(Math.max(startRow, endRow));
            var startCell1 = parseInt(Math.min(startCell, endCell));
            var endCell1=parseInt(Math.max(startCell, endCell));
            var row=endRow1-startRow1;
            var cell=endCell1-startCell1;


            /*解除合并*/
            unMerge.onclick = function(e){
                menu.style.display="none";
                var a=tab[startRow1].cells[startCell1].rowSpan;
                var b =tab[startRow1].cells[startCell1].colSpan;
                //*解除合并单元格方法*/
                for(i=0;i<=a;i++){
                    for(j=0;j<=b;j++){
                        if(i==0&&j==0){

                        }else {
                            tab[startRow1+i].cells[startCell1+j].style.display = "table";
                            tab[startRow1+i].cells[startCell1+j].style.backgroundColor = "yellow";
                            tab[startRow1+i].cells[startCell1+j].style ="border-collapse: separate;border-spacing: 2px;border-color: grey;" ;
                        }
                    }

                }
                tab[startRow1].cells[startCell1].rowSpan=1;
                tab[startRow1].cells[startCell1].colSpan=1;
                tab[startRow1].cells[startCell1].style.backgroundColor = "white";



            };
            /*点击合并后合并单元格*/
            merge.onclick=function (e) {
                menu.style.display="none";
                if(endRow!=startRow || endCell!=startCell){

                    if(endRow!=startRow){

                        tab[startRow1].cells[startCell1].rowSpan=Math.abs(row+1);

                    }
                    if(endCell!=startCell){

                        tab[startRow1].cells[startCell1].colSpan=Math.abs(cell+1);


                    }
                    //*合并单元格方法*/
                    for(i=0;i<=row;i++){
                        for(j=0;j<=cell;j++){
                            if(i==0&&j==0){
                                tab[startRow1+i].cells[startCell1+j].style.backgroundColor = "white";
                            }else {
                                tab[startRow1+i].cells[startCell1+j].style.display = "none";
                            }
                        }

                    }



                }


            };
        }

    };



    table.onmousemove =  function(e){
        if(key==1){
            console. debug("onmousemove"+key+ "x:"+e.clientX+"y:"+ e.clientY);
            /*移动中清除颜色*/
            var rownum = tab.length;
            var colnum =  tab[0].cells.length;
            for (var a =0;a<rownum;a++){
                for(var b =0;b<colnum;b++){
                    table.rows[a].cells[b].style.backgroundColor = "white";



                }
            }

            endCell = parseInt((e.clientX-startx)/tdwidth);
            endCell = parseInt((e.clientX-startx)/tdwidth);
            endCell = parseInt((e.clientX-startx)/tdwidth);
            endRow = parseInt((e.clientY-starty)/tdheight);
            endRow = parseInt((e.clientY-starty)/tdheight)
            endRow = parseInt((e.clientY-starty)/tdheight)
            for (var ar =Math.min(startRow, endRow);ar<=Math.max(startRow, endRow);ar++){
                for(var bc =Math.min(startCell, endCell);bc<=Math.max(startCell, endCell);bc++){
                    table.rows[ar].cells[bc].style.backgroundColor = "#00f";
                }
            }



        }


    };
    table.onmouseup = function(e){
        key=0;
        console.debug("onmouseup"+key + "x:"+e.clientX+"y:"+ e.clientY);
        endCell = parseInt((e.clientX-startx)/tdwidth);
        endRow = parseInt((e.clientY-starty)/tdheight);
        for (var ar =Math.min(startRow, endRow);ar<=Math.max(startRow, endRow);ar++){
            for(var bc =Math.min(startCell, endCell);bc<=Math.max(startCell, endCell);bc++){
                table.rows[ar].cells[bc].style.backgroundColor = "#00f";
            }
        }



    };
    document.getElementsByTagName("body").onmouseup = function(e){
        key =1;

    };

};


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