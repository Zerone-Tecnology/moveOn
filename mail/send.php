<?


function getMailMessage($arr) {
    $message = '<html><body>';
    
    foreach ($arr as $key => $data) {
        $message .= '<h5>'.$data["title"].'</h5>';
        $message .= '<p>'.$data["text"].'</p>';
    }
    $message .= '</body></html>';
    return $message;
}

function sendArcanaMail($to, $message) {
    $subject = "Заголовок письма";

    $from = "info@moveon.kz";
    $replyTo = "info@moveon.kz";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: <".$from.">\r\n"; 
    $headers .= "Reply-To: ".$from."\r\n"; 
    $res = mail($to, $subject, $message, $headers);
    return $res;
}

sendArcanaMail(
    "a.nauryzbayev@zeronetech.kz",
    [
        ""
    ]
)

?>