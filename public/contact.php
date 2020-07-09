<?php

  $name = ( isset($_POST['Name']) ) ? trim($_POST["Name"]) : '';
  $phone = ( isset($_POST['Phone']) ) ? trim($_POST["Phone"]) : '';
  $email = ( isset($_POST['Email']) ) ? trim($_POST["Email"]) : '';
  $text = ( isset($_POST['Message']) ) ? trim($_POST["Message"]) : '';
  $file = false;

  if ($_FILES['file']['size']) {
    $tmp_file = $_FILES["file"]["tmp_name"];
    $file = './' . basename($_FILES['file']['name']);
    move_uploaded_file($tmp_file, $file);
  }


  $to = "info@amen.team, info@1pls1.com, maksprocode@ukr.net, sales.s2w@gmail.com";
  $sitename = "AMEN";
  $subject = "$sitename Contact feedback from sender $email";

  $message = '
    <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
        <p>Name: '.$name.'</p>
        <p>Phone: '.$phone.'</p>
        <p>Email: '.$email.'</p>
        <p>Help message: '.$text.'</p>';
        if($file){
          $message .= '<p>File: '.basename($_FILES['file']['name']).'</p> ';
        }
  $message .=                              
      '</body>
    </html>';

  $result = sendMailAttachment($to, $email, $subject, $message, $file);
  if($file){
    unlink($file);
  }
  

echo $result ? 'SUCCESS. Email has been sent!' : 'ERROR';

function sendMailAttachment($mailTo, $from, $subject, $message, $file = false){
  $separator = "---";

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: $from\nReply-To: $from\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\"";
  $bodyMail = "--$separator\n";
  $bodyMail .= "Content-Type:text/html; charset=\"utf-8\"\n";
  $bodyMail .= "Content-Transfer-Encoding: 7bit\n\n";
  $bodyMail .= $message."\n";
  if($file){
    $bodyMail .= "--$separator\n";
    $fileRead = fopen($file, "r");
    $contentFile = fread($fileRead, filesize($file));
    fclose($fileRead);
    $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file))."?=\n"; 
    $bodyMail .= "Content-Transfer-Encoding: base64\n";
    $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n";
    $bodyMail .= chunk_split(base64_encode($contentFile))."\n";
    $bodyMail .= "--".$separator ."--\n";
  }
  $result = mail($mailTo, $subject, $bodyMail, $headers);
  return $result;
}


?>