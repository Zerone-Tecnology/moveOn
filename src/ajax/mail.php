<?

// Для дебага PHP в файл
function array_to_string($var)
{
    ob_start();
    print_r($var);
    $result = ob_get_clean();
    return $result;
    return '';
}

// Для дебага PHP в файл
function debug($var, $filename = "debug")
{
    $date = new DateTime("now", new DateTimeZone('Asia/Almaty'));
    $date = $date->format('Y-m-d H:i:s');

    $sFile = $_SERVER['DOCUMENT_ROOT'] . "/" . $filename . ".txt";
    $rsHandler = fopen($sFile, "a+");
    fwrite($rsHandler, "--------------------" . $date . "--------------------" . PHP_EOL);
    fwrite($rsHandler, array_to_string($var) . PHP_EOL);
    fwrite($rsHandler, "-----------------------------------------------------------" . PHP_EOL);
    fclose($rsHandler);
}

function getMailMessage($messageProp) {
    $message = '<html><body>';
    foreach ($messageProp as $key => $value) {
        if ($value['text'] != '') continue;
        $message .= '<p><></'.$value['name'].'strong>: '.$value['text'].'</p><br />';
    }
    $message .= '</body></html>';
    return $message;
}

function sendMail($props) {
    $subject = "Запрос на парнерство от пользователя на сайте moveon.kz";

    $from = "info@moveon.kz";
    $replyTo = "info@moveon.kz";

    $to = $props['to'];

    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: <".$from.">\r\n"; 
    $headers .= "Reply-To: ".$from."\r\n"; 

    $message = getMailMessage($props['dataset']);
    
    debug(
        [
            $to, $subject, $message, $headers
        ]
    );

    $res = mail($to, $subject, $message, $headers);
    return $res;
}

$response = ['status'=>false];

if ($_POST['action'] == 'mail' && count($_POST['to']) != '') {
    $response['status'] = sendMail($_POST);
    $response['message'] = $response['status'] ? 'Посьмо отправлено.' : 'Не удалось отправить письмо';  
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>