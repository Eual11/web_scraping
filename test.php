<?php
//http://books.toscrape.com/

require_once "vendor/autoload.php";
use voku\helper\HtmlDomParser;

$curl = curl_init();

curl_setopt($curl,CURLOPT_URL,"http://books.toscrape.com/");
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_FOLLOWLOCATION,true);
$html = curl_exec($curl);
curl_close($curl);
while(true)
{
    sleep(3);
    if($html)
        $htmldom = HtmlDomParser::str_get_html($html);
        break;
}

$rows = $htmldom->find('p.price_color');
$prices =[];
foreach($rows as $row)
{
    $price = $row->text();
    if(!in_array($price,$prices))
    {
        $prices[] = $price;
    }
}

echo "<pre>";
print_r($prices);
echo "</pre>";

?>     