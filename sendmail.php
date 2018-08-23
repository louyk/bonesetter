<?php

header("content-type:text/html;charset=utf-8");
ini_set("magic_quotes_runtime",0);
require 'phpmailer/class.phpmailer.php';
	$hospital=$_POST['hospitalval'];
	
	$name=$_POST['name_val'];
    $e_mail=$_POST['emailval'];
    $tel=$_POST['telVal'];
    $message=$_POST['messageval'];
    $_uptime=$_POST['_uptime'];
    $Cture=1;

try {
	$mail = new PHPMailer(true);
	$mail->IsSMTP();
	$mail->CharSet='UTF-8'; //设置邮件的字符编码，这很重要，不然中文乱码
	$mail->SMTPAuth   = true;                  //开启认证
	$mail->Port       = 80;
	$mail->Host       = "smtp.mxhichina.com";
	$mail->Username   = "ask@bad-corp.com";
	$mail->Password   = "Bai_da!B.A.D.18";
	//$mail->IsSendmail(); //如果没有sendmail组件就注释掉，否则出现“Could  not execute: /var/qmail/bin/sendmail ”的错误提示
	$mail->AddReplyTo("ask@bad-corp.com","mckee");//回复地址
	$mail->From       = "ask@bad-corp.com";
	$mail->FromName   = "bad-corp.com";
	$to = "good@bad-corp.com";
//	$to = "louyk000911@163.com";
//	$to = "ying.zhang@bad-corp.com";

	$mail->AddAddress($to);
	$mail->Subject  = "FORM 日本接骨院";
	
	
	$mail->Body = "病院名: ".$hospital.";<br> 担当者名: ".$name.";<br>連絡先電話番号 : ".$tel.";<br> メールアドレス（確認用） : ".$e_mail.";<br>その他ご要望 : <br>".$message."<br><br><br> Time:".$_uptime;
	$mail->AltBody    = "Name:"; //当邮件不支持html时备用显示，可以省略
	$mail->WordWrap   = 80; // 设置每行字符串的长度
	//$mail->AddAttachment("f:/test.png");  //可以添加附件
	$mail->IsHTML(true); 



if($hospital==""||$name==""||$e_mail==""||$tel==""||$message==""){
		echo "Sorry, the mail failed! Please check the mailbox for errors.";
		echo "<a href='index.html'>Click here to return</a>";
		return false;
		exit();
	}else{
	
      
	
		if($Cture){
		
				$array = array('flag'=>true);	
		
			}else{
				$array = array('flag'=>false);
				}
	
	echo json_encode($array);
		
		
	$mail->Send();



		
	}





} catch (phpmailerException $e) {
	echo "The mail failed：".$e->errorMessage();
}
?>