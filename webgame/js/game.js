//网站的JS文件
//喂，你怎么能看JS文件啊，听说看到源代码就像看到果体一样的羞耻>.<
//快走开啦！

//设置基础数据
var str;
var money = 0;
var stage = 1;
var monsterStr;		//怪物战斗力

var r1,r2,r3,r4,r5,r6;
var w1,w2,w3,w4,w5,w6;


var gmm;			//淘金金币
var tmpRam;			//随机数存储
var f = 0;


//初始化
//localStorage.setItem("str", str);
if (localStorage.getItem("f") == null)
{
localStorage.setItem("money", money);
localStorage.setItem("stage", stage);
localStorage.setItem("r1", 0);
localStorage.setItem("r2", 0);
localStorage.setItem("r3", 0);
localStorage.setItem("r4", 0);
localStorage.setItem("r5", 0);
localStorage.setItem("r6", 0);
localStorage.setItem("w1", 1);
localStorage.setItem("w2", 1);
localStorage.setItem("w3", 1);
localStorage.setItem("w4", 0);
localStorage.setItem("w5", 0);
localStorage.setItem("w6", 0);
localStorage.setItem("f", 1);
}


gamestart();
//后台读档
function gamestart()
{

	document.getElementById("money").innerHTML= "金币：" + localStorage.getItem("money");
	document.getElementById("m2").innerHTML= "金币：" + localStorage.getItem("money");
	document.getElementById("stage").innerHTML= "关卡：" + localStorage.getItem("stage");
	document.getElementById("w1").innerHTML= "武器 - Lv" + localStorage.getItem("w1");
	document.getElementById("w2").innerHTML= "防具 - Lv" + localStorage.getItem("w2");
	document.getElementById("w3").innerHTML= "手套 - Lv" + localStorage.getItem("w3");
	document.getElementById("w4").innerHTML= "鞋子 - Lv" + localStorage.getItem("w4");
	document.getElementById("w5").innerHTML= "戒指 - Lv" + localStorage.getItem("w5");
	document.getElementById("w6").innerHTML= "光环 - Lv" + localStorage.getItem("w6");	
	
	w1 = parseInt(localStorage.getItem("w1"));
	w2 = parseInt(localStorage.getItem("w2"));
	w3 = parseInt(localStorage.getItem("w3"));
	w4 = parseInt(localStorage.getItem("w4"));
	w5 = parseInt(localStorage.getItem("w5"));
	w6 = parseInt(localStorage.getItem("w6"));
	
	//战斗力计算
	str = w1 * 5 + w2 * 15 + w3 * 50 + w4 * 120 + w5 * 380 + w6 * 650;
	localStorage.setItem("str", str);
	document.getElementById("str").innerHTML= "战斗力：" + localStorage.getItem("str");
	
	document.getElementById("x1m").innerHTML= "升级费用：" + ((w1 + 1) * 5) ;	
	document.getElementById("x2m").innerHTML= "升级费用：" + ((w2+1) * 50) ;	
	document.getElementById("x3m").innerHTML= "升级费用：" + ((w3+1) * 150) ;
	document.getElementById("x4m").innerHTML= "升级费用：" + ((w4+1) * 550) ;
	document.getElementById("x5m").innerHTML= "升级费用：" + ((w5+1) * 850) ;
	document.getElementById("x6m").innerHTML= "升级费用：" + ((w6+1) * 1500) ;
	

	
	
	if(w1 <= 10)
	document.getElementById("w1m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w1")) + "个";
	else if(w1 <= 20)
	document.getElementById("w1m").innerHTML = "需要【SN】宝石" +(parseInt(localStorage.getItem("w1")) - 10)  + "个";
	else if(w1 < 30)
	document.getElementById("w1m").innerHTML = "需要【UN】宝石" +(parseInt(localStorage.getItem("w1")) - 20)  + "个";
	else if(w1 < 40)
	document.getElementById("w1m").innerHTML = "需要【R】宝石" +(parseInt(localStorage.getItem("w1")) - 30)  + "个";
	else if(w1 < 50)
	document.getElementById("w1m").innerHTML = "需要【SR】宝石" +(parseInt(localStorage.getItem("w1")) - 40)  + "个";
	else
	document.getElementById("w1m").innerHTML = "需要【UR】宝石" +(parseInt(localStorage.getItem("w1")) - 49)  + "个";
	
	if(w2 <= 10)
	document.getElementById("w2m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w2")) + "个";
	else if(w2 < 20)
	document.getElementById("w2m").innerHTML = "需要【SN】宝石" + parseInt(localStorage.getItem("w2")) - 10 + "个";
	else if(w2 < 30)
	document.getElementById("w2m").innerHTML = "需要【UN】宝石" + parseInt(localStorage.getItem("w2")) - 20 + "个";
	else if(w2 < 40)
	document.getElementById("w2m").innerHTML = "需要【R】宝石" + parseInt(localStorage.getItem("w2")) - 30 + "个";
	else if(w2 < 50)
	document.getElementById("w2m").innerHTML = "需要【SR】宝石" + parseInt(localStorage.getItem("w2")) - 40 + "个";
	else
	document.getElementById("w2m").innerHTML = "需要【UR】宝石" + parseInt(localStorage.getItem("w2")) - 49 + "个";
	
	if(w3 < 10)
	document.getElementById("w3m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w3")) + "个";
	else if(w3 < 20)
	document.getElementById("w3m").innerHTML = "需要【SN】宝石" + parseInt(localStorage.getItem("w3")) - 10 + "个";
	else if(w3 < 30)
	document.getElementById("w3m").innerHTML = "需要【UN】宝石" + parseInt(localStorage.getItem("w3")) - 20 + "个";
	else if(w3 < 40)
	document.getElementById("w3m").innerHTML = "需要【R】宝石" + parseInt(localStorage.getItem("w3")) - 30 + "个";
	else if(w3 < 50)
	document.getElementById("w3m").innerHTML = "需要【SR】宝石" + parseInt(localStorage.getItem("w3")) - 40 + "个";
	else
	document.getElementById("w3m").innerHTML = "需要【UR】宝石" + parseInt(localStorage.getItem("w3")) - 49 + "个";
	
	if(w4 < 10)
	document.getElementById("w4m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w4")) + "个";
	else if(w4 < 20)
	document.getElementById("w4m").innerHTML = "需要【SN】宝石" + parseInt(localStorage.getItem("w4")) - 10 + "个";
	else if(w4 < 30)
	document.getElementById("w4m").innerHTML = "需要【UN】宝石" + parseInt(localStorage.getItem("w4")) - 20 + "个";
	else if(w4 < 40)
	document.getElementById("w4m").innerHTML = "需要【R】宝石" + parseInt(localStorage.getItem("w4")) - 30 + "个";
	else if(w4 < 50)
	document.getElementById("w4m").innerHTML = "需要【SR】宝石" + parseInt(localStorage.getItem("w4")) - 40 + "个";
	else
	document.getElementById("w4m").innerHTML = "需要【UR】宝石" + parseInt(localStorage.getItem("w4")) - 49 + "个";
	
	if(w5 < 10)
	document.getElementById("w5m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w5")) + "个";
	else if(w5 < 20)
	document.getElementById("w5m").innerHTML = "需要【SN】宝石" + parseInt(localStorage.getItem("w5")) - 10 + "个";
	else if(w5 < 30)
	document.getElementById("w5m").innerHTML = "需要【UN】宝石" + parseInt(localStorage.getItem("w5")) - 20 + "个";
	else if(w5 < 40)
	document.getElementById("w5m").innerHTML = "需要【R】宝石" + parseInt(localStorage.getItem("w5")) - 30 + "个";
	else if(w5 < 50)
	document.getElementById("w5m").innerHTML = "需要【SR】宝石" + parseInt(localStorage.getItem("w5")) - 40 + "个";
	else
	document.getElementById("w5m").innerHTML = "需要【UR】宝石" + parseInt(localStorage.getItem("w5")) - 49 + "个";
	
	if(w6 <= 10)
	document.getElementById("w6m").innerHTML = "需要【N】宝石" + parseInt(localStorage.getItem("w6")) + "个";
	else if(w6 <= 20)
	document.getElementById("w6m").innerHTML = "需要【SN】宝石" + (parseInt(localStorage.getItem("w6")) - 10) + "个";
	else if(w6 <= 30)
	document.getElementById("w6m").innerHTML = "需要【UN】宝石" + (parseInt(localStorage.getItem("w6")) - 20) + "个";
	else if(w6 <= 40)
	document.getElementById("w6m").innerHTML = "需要【R】宝石" +(parseInt(localStorage.getItem("w6")) - 30)  + "个";
	else if(w6 <= 50)
	document.getElementById("w6m").innerHTML = "需要【SR】宝石" +(parseInt(localStorage.getItem("w6")) - 40)  + "个";
	else
	document.getElementById("w6m").innerHTML = "需要【UR】宝石" +(parseInt(localStorage.getItem("w6")) - 49)  + "个";
	
	document.getElementById("baoshi").innerHTML= "【N】宝石：" + localStorage.getItem("r1") + " ||" +"【SN】宝石：" + localStorage.getItem("r2") + " ||" +"【UN】宝石：" + localStorage.getItem("r3") + " ||" +"【R】宝石：" + localStorage.getItem("r4") + " ||" +"【SR】宝石：" + localStorage.getItem("r5") + " ||" +"【UR】宝石：" + localStorage.getItem("r6");
}


//战斗(通过按钮传递)
function bat()
{
	stage = parseInt(localStorage.getItem("stage"));
	//算出怪物战斗力
	monsterStr = (stage*4)*(stage + 4);
	
	//胜负得出
	if(monsterStr <= localStorage.getItem("str"))
	{
		document.getElementById("batover").innerHTML= "胜利";
		if(stage > 99)
		document.getElementById("batover").innerHTML= "恭喜你突破99关，其实你还是可以继续玩，不过游戏总要有个小目标大家才有动力玩嘛";
		localStorage.setItem("stage", stage +1);
		localStorage.setItem("money", parseInt(localStorage.getItem("money")) + (stage*2)*(stage + 3));
		gamestart();
	}
	else
	{
			document.getElementById("batover").innerHTML= "你需要" + monsterStr+ "点战斗力才能过关";
	}
}

//淘金
function getMoney()
{
	gmm = Math.ceil(Math.random()*100);
	localStorage.setItem("money", parseInt(localStorage.getItem("money")) + gmm);
	document.getElementById("gmm").innerHTML= "获得金币" + gmm;
	gamestart();
}

//开1次箱子
function getBox()
{
	//检查钱够不够
	if(parseInt(localStorage.getItem("money")) < 100)
	{
		document.getElementById("bxo").innerHTML= "钱不足100";
	}
	else
	{
		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - 100);
		
		//抽随机数
		tmpRam = Math.ceil(Math.random()*140);
		if(tmpRam < 2)
		{
			localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【UR】宝石";
		}
		else if(tmpRam < 10)
		{
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【SR】宝石";
		}
		else if(tmpRam < 20)
		{
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【R】宝石";
		}
		else if(tmpRam < 40)
		{
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【UN】宝石";
		}
		else if(tmpRam < 60)
		{
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【SN】宝石";
		}
		else
		{
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) + 1);
			document.getElementById("bxo").innerHTML= "获得了【N】宝石";
		}
			
		gamestart();
	}
}

//武器升级
function lv1()
{
	if (parseInt(localStorage.getItem("money")) - (w1+1) * 5 >= 0)
	{
		if(w1 <= 10 &&  parseInt(localStorage.getItem("r1")) - w1 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w1);
			localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
		}		
		else if(w1 > 10 && w1 <= 20 && parseInt(localStorage.getItem("r2")) - w1 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w1 + 10);
			localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
		}
			
		else if( w1 > 20 && w1 <= 30 &&  parseInt(localStorage.getItem("r3")) - w1 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w1 + 20);
			localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
		}
		
		else if(w1 > 30 && w1 <= 40 &&  parseInt(localStorage.getItem("r4")) - w1 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w1 + 30);
			localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
		}
		
		else if(w1 > 40 && w1 <= 50 &&  parseInt(localStorage.getItem("r5")) - w1 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w1 + 40);
			localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w1 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w1+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w1 - 49);
				localStorage.setItem("w1", parseInt(localStorage.getItem("w1")) + 1);
			}
				
		}

	}
		gamestart();
	
}

function lv2()
{
		if (parseInt(localStorage.getItem("money")) - (w2+1) * 5 >= 0)
	{
		if(w2 <= 10 &&  parseInt(localStorage.getItem("r1")) - w2 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w2);
			localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
		}		
		else if(w2 > 10 && w2 <= 20 && parseInt(localStorage.getItem("r2")) - w2 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w2 + 10);
			localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
		}
			
		else if( w2 > 20 && w2 <= 30 &&  parseInt(localStorage.getItem("r3")) - w2 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w2 + 20);
			localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
		}
		
		else if(w2 > 30 && w2 <= 40 &&  parseInt(localStorage.getItem("r4")) - w2 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w2 + 30);
			localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
		}
		
		else if(w2 > 40 && w2 <= 50 &&  parseInt(localStorage.getItem("r5")) - w2 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w2 + 40);
			localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w2 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w2+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w2 - 49);
				localStorage.setItem("w2", parseInt(localStorage.getItem("w2")) + 1);
			}
				
		}

	}
		gamestart();
}

function lv3()
{
		if (parseInt(localStorage.getItem("money")) - (w3+1) * 5 >= 0)
	{
		if(w3 <= 10 &&  parseInt(localStorage.getItem("r1")) - w3 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w3);
			localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
		}		
		else if(w3 > 10 && w3 <= 20 && parseInt(localStorage.getItem("r2")) - w3 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w3 + 10);
			localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
		}
			
		else if( w3 > 20 && w3 <= 30 &&  parseInt(localStorage.getItem("r3")) - w3 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w3 + 20);
			localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
		}
		
		else if(w3 > 30 && w3 <= 40 &&  parseInt(localStorage.getItem("r4")) - w3 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w3 + 30);
			localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
		}
		
		else if(w3 > 40 && w3 <= 50 &&  parseInt(localStorage.getItem("r5")) - w3 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w3 + 40);
			localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w3 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w3+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w3 - 49);
				localStorage.setItem("w3", parseInt(localStorage.getItem("w3")) + 1);
			}
				
		}

	}
		gamestart();
}

function lv4()
{
		if (parseInt(localStorage.getItem("money")) - (w4+1) * 5 >= 0)
	{
		if(w4 <= 10 &&  parseInt(localStorage.getItem("r1")) - w4 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w4);
			localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
		}		
		else if(w4 > 10 && w4 <= 20 && parseInt(localStorage.getItem("r2")) - w4 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w4 + 10);
			localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
		}
			
		else if( w4 > 20 && w4 <= 30 &&  parseInt(localStorage.getItem("r3")) - w4 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w4 + 20);
			localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
		}
		
		else if(w4 > 30 && w4 <= 40 &&  parseInt(localStorage.getItem("r4")) - w4 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w4 + 30);
			localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
		}
		
		else if(w4 > 40 && w4 <= 50 &&  parseInt(localStorage.getItem("r5")) - w4 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w4 + 40);
			localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w4 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w4+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w4 - 49);
				localStorage.setItem("w4", parseInt(localStorage.getItem("w4")) + 1);
			}
				
		}

	}
		gamestart();
}

function lv5()
{
		if (parseInt(localStorage.getItem("money")) - (w5+1) * 5 >= 0)
	{
		if(w5 <= 10 &&  parseInt(localStorage.getItem("r1")) - w5 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w5);
			localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
		}		
		else if(w5 > 10 && w5 <= 20 && parseInt(localStorage.getItem("r2")) - w5 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w5 + 10);
			localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
		}
			
		else if( w5 > 20 && w5 <= 30 &&  parseInt(localStorage.getItem("r3")) - w5 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w5 + 20);
			localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
		}
		
		else if(w5 > 30 && w5 <= 40 &&  parseInt(localStorage.getItem("r4")) - w5 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w5 + 30);
			localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
		}
		
		else if(w5 > 40 && w5 <= 50 &&  parseInt(localStorage.getItem("r5")) - w5 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w5 + 40);
			localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w5 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w5+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w5 - 49);
				localStorage.setItem("w5", parseInt(localStorage.getItem("w5")) + 1);
			}
				
		}

	}
		gamestart();
}

function lv6()
{
		if (parseInt(localStorage.getItem("money")) - (w6+1) * 5 >= 0)
	{
		if(w6 <= 10 &&  parseInt(localStorage.getItem("r1")) - w6 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
			localStorage.setItem("r1", parseInt(localStorage.getItem("r1")) - w6);
			localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
		}		
		else if(w6 > 10 && w6 <= 20 && parseInt(localStorage.getItem("r2")) - w6 + 10 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
			localStorage.setItem("r2", parseInt(localStorage.getItem("r2")) - w6 + 10);
			localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
		}
			
		else if( w6 > 20 && w6 <= 30 &&  parseInt(localStorage.getItem("r3")) - w6 + 20 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
			localStorage.setItem("r3", parseInt(localStorage.getItem("r3")) - w6 + 20);
			localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
		}
		
		else if(w6 > 30 && w6 <= 40 &&  parseInt(localStorage.getItem("r4")) - w6 + 30 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
			localStorage.setItem("r4", parseInt(localStorage.getItem("r4")) - w6 + 30);
			localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
		}
		
		else if(w6 > 40 && w6 <= 50 &&  parseInt(localStorage.getItem("r5")) - w6 + 40 >= 0)
		{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
			localStorage.setItem("r5", parseInt(localStorage.getItem("r5")) - w6 + 40);
			localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
		}
		
		else
		{
			if(parseInt(localStorage.getItem("r6")) - w6 - 49 >= 0)
			{		localStorage.setItem("money", parseInt(localStorage.getItem("money")) - (w6+1)  * 5);
				localStorage.setItem("r6", parseInt(localStorage.getItem("r6")) - w6 - 49);
				localStorage.setItem("w6", parseInt(localStorage.getItem("w6")) + 1);
			}
				
		}

	}
		gamestart();
}