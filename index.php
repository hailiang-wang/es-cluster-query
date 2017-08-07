<?php
/**
 * Created by PhpStorm.
 * User: zllword
 * Date: 2017/4/17
 * Time: 14:06
 */

date_default_timezone_set('Asia/Shanghai');

require 'vendor/autoload.php';
require 'db.class.php';
require 'config.php';
//不使用use 时，会提示没有找到es
use Elasticsearch\ClientBuilder;

$t1 = microtime(true);

try {
    $client = ClientBuilder::create()->setHosts(ES_HOST)->build();

    $deleteParams = ['index' => ES_INDEX];

    $paramsCreateIndex = [
        'index' => ES_INDEX,
        'body' => [
            "settings" => [
                "analysis" => [
                    "analyzer" => [
                        "ik_max_word" => [
                            "tokenizer" => "ik_max_word"
                        ],
                        "ik_smart" => [
                            "tokenizer" => "ik_smart"
                        ],
                        "ik_syno_max_word" => [
                            "type" => "custom",
                            "tokenizer" => "ik_max_word",
                            "filter" => ["my_synonym_filter"],
                            "use_smart" => true
                        ],
                        "ik_syno_smart" => [
                            "type" => "custom",
                            "tokenizer" => "ik_smart",
                            "filter" => ["my_synonym_filter"],
                            "use_smart" => true
                        ]
                    ],
                    "filter" => [
                        "my_synonym_filter" => [
                            "type" => "synonym",
                            "synonyms_path" => "analysis/synonym.txt"
                        ]
                    ]
                ]
            ],
            "mappings" => [
                ES_TYPE => [
                    "dynamic" => true,
                    "_all" => [
                        "analyzer" => "ik_max_word",
                        "search_analyzer" => "ik_max_word",
                        "term_vector" => "no",
                        "store" => "false"
                    ],
                    "properties" => [
                        "productName" => [
                            "type" => "string",
                            "analyzer" => "ik_syno_max_word",
                            "search_analyzer" => "ik_syno_smart"
                        ],
                        "rating" => [
                            "type" => "integer"
                        ],
                        "is_hot" => [
                            "type" => "integer"
                        ]
                    ]
                ]
            ]

        ]
    ];

    $responseStats = $client->indices()->exists($deleteParams);
    $responseIndex = '';

    if ($responseStats) {
        $responseDEl = $client->indices()->delete($deleteParams);

        if ($responseDEl['acknowledged']) {
            $responseIndex = $client->indices()->create($paramsCreateIndex);
        } else {
            echo " delete  es index failed \r\n";
        }
    } else {
        $responseIndex = $client->indices()->create($paramsCreateIndex);
    }
    if ($responseIndex['acknowledged']) {
        echo "create  es  index success \r\n";
    } else {
        echo "create  es  index failed \r\n";
        return;
    }
} catch (Exception $e) {
    echo "\nERROR: " . ($e) . ': ' . $e->getMessage() . "\n" . $e->getTraceAsString() . "\r\n";
}

$t2 = microtime(true);
echo 'es 程序耗时 create es index ' . round($t2 - $t1, 3) . "秒   \r\n";


//处理数据入库问题es
$t3 = microtime(true);

$db = new mysql();
$totalCount = $db->fetchAll('SELECT count(id) as count from products order by id DESC');
$totalCount = intval($totalCount[0]['count']);
for ($j=0; $j<= $totalCount; $j+=20000) {
    $sql = 'SELECT id, rank as rating, product_name as productName, is_test as isTest, brand, enterprise_name as enterpriseName, is_hot from products order by id DESC LIMIT '. $j . ', 20000';
    echo $sql."\n";
    $rows = $db->fetchAll($sql);
    // $db->close();
    // html_entity_decode

    $params = ['body' => []];
    $num = count($rows);

    for ($i = 0; $i < $num; $i++) {

        $params['body'][] = [
            'index' => [
                '_index' => ES_INDEX,
                '_type' => ES_TYPE,
                '_id' => $rows[$i]['id'],
            ]
        ];

        //print_r($rows[$i]);
        $params['body'][] = $rows[$i];
        if ($i % 5000 == 0) {

            $responses = $client->bulk($params);
            //print_r($responses);
            $params = ['body' => []];

            unset($responses);
        }
    }

    if (!empty($params['body'])) {
        $responses = $client->bulk($params);
    }
}
$db->close();

$t4 = microtime(true);
echo 'es 程序耗时 setElasticsearch ' . round($t4 - $t3, 3) . "秒   \r\n";


