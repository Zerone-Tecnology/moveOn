<?
function getMailMessage($messageProp) {
    $message = '<html><body>';
    foreach ($messageProp as $key => $value) {
        if ($value['text'] != '') continue;
        $message .= '<p><strong>'.$value['name'].'</strong>: '.$value['value'].'</p>';
    }
    $message .= '</body></html>';
    return $message;
}

function sendMail($props) {
    $subject = "Запрос на парнерство от пользователя на сайте moveon.kz";

    $from = "info@moveon.kz";
    $replyTo = "info@moveon.kz";

    $to = $props['to'];

    $headers  = "Content-type: text/html; charset=UTF-8\r\n"; 
    $headers .= "From: <".$from.">\r\n"; 
    $headers .= "Reply-To: ".$from."\r\n"; 
    $headers .= "CC: ".$from.",d.rashidinov@zeronetech.kz\r\n";

    $message = getMailMessage($props['dataset']);

    $res = mail($to, $subject, $message, $headers);
    return $res;
}

$response = ['status'=>false];

if ($_POST['action'] == 'mail' && $_POST['to'] != '') {
    $response['status'] = sendMail($_POST);
    $response['message'] = $response['status'] ? 'Посьмо отправлено.' : 'Не удалось отправить письмо';  
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>