$("#login_button_style").click(function(){
    var username = $(".username1").val();
    var password1 = $(".password1").val();
    if(username == ""){
        $("#username_err_message1").html("用户名不可以为空，请注意！");
        //将光标定位到用户名输入框
        $(".username1").focus();
        if(password1 == ""){
            $("#password_err_message1").html("密码不可以为空，请检查！");
            //将光标定位到密码输入框
            $(".password1").focus();
        }
    }else{
        $(".login1_form_style").submit();
    }
})