<?php
	$name = strip_tags($_POST['name']);
	$tel = strip_tags($_POST['tel']);
	$email = strip_tags($_POST['email']);
	if($name != "") {
		$mailcontentDesc .= "<p><b>Имя:</b> $name<br>";
	}
	if($tel != "") {
		$mailcontentDesc .= "<p><b>Телефон:</b> $tel<br>";
	}
	if($email != "") {
		$mailcontentDesc .= "<p><b>Email:</b> $goodname<br>";
	}

	// -------------------------------------
	// Сюда вписывается адреса электронной почты на который должны приходить заявки. Можно один адрес, а можно и несколько через запятую. К примеру так :
	// $toaddress = "test1@gmail.com, test2@gmail.com, , test2@gmail.com";
	$toaddress = "denis.postolenko@gmail.com";
	// -------------------------------------

	$mailcontent = "<h2 style='color: #52b948;'>Сообщение с сайта Progame</h2><br />
					<div style='border-bottom: 1px solid #ededed'></div>
					$mailcontentDesc";
	$subject = "Progame";
	$from_name = "ProgameS";

	// -------------------------------------
	// Сюда вписывается адрес электронной почты который будет отображаться в письме. Это адрес с которого было отправлено письмо.
	$from_email = "denis.postolenko@gmail.com";
	// -------------------------------------
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "From: =?utf-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";
	$headers .= "Content-type: text/html; charset=\"utf-8\"";
	mail( $toaddress, "=?utf-8?B?".base64_encode($subject)."?=", $mailcontent, $headers );
	echo "<span>Спасибо! Ваша заявка отправлена. В ближайшее время мы с Вами свяжемся.</span>";	
?>