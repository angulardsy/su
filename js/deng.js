function chan(){
	var user=document.getElementById("name"),
	    pwd=document.getElementById("psw"),
	    fu=document.getElementById("fu"),
	    tishi=document.getElementById("tishi"),
	    btn=document.getElementById("btn"),
	    namevl=user.value,
	    pwdvl=pwd.value,
        ls=window.localStorage;
		if( namevl=="" || pwdvl==""){
			tishi.innerHTML="用户名或密码不能为空！";
			return false;
		}else if(namevl=="张三" && pwdvl=="123"){
            //正确，判断是否记住密码
            if(fu.checked){
                //记住用户名及密码
                 ls.setItem("username",namevl);
                 ls.setItem("password",pwdvl);
            }else{
            	ls.setItem("username","");
                 ls.setItem("password","");
            }

		}else{
			tishi.innerHTML="用户名或密码有误！";
			return false;
		}
}
//取出用户名及密码
var  user=document.getElementById("name"),
	 pwd=document.getElementById("psw"),
     ls=window.localStorage;
if(ls.getItem("username") && ls.getItem("password")){
	var uVal=ls.getItem("username"),
	    pVal=ls.getItem("password");
	    user.value=uVal;
	    pwd.value=pVal;
	    fu.checked=true;
}