<?
$from = 'a.nauryzbayev@zeronetech.kz';
$to = 'anauryzbayev@yandex.ru';

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: <".$from.">\r\n"; 
$headers .= "Reply-To: ".$from."\r\n"; 

$message = "asdasdasdas";

if (mail($to, $from , $message, $headers)) {
    echo 'success';
} else {
    echo 'nope';
}
?>