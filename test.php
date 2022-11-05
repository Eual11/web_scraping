<?php
$curl = curl_init();

curl_setopt($curl,CURLOPT_URL,"https://scrapeme.live/shop/");

curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);

curl_setopt($curl,CURLOPT_FOLLOWLOCATION,true);

$html = curl_exec($curl);

curl_close($curl);

?>