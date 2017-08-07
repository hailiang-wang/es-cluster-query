{
    "_shard": "[test_cosmetic][3]",
    "_node": "xKsM7-QSRCWJhZxA0hSnbQ",
    "_index": "test_cosmetic",
    "_type": "pname",
    "_id": "165144",
    "_score": 11.013453,
    "_source": {
    "id": "165144",
        "barcode": "",
        "rating": "9",
        "productName": "两面针沐浴露",
        "aliasName": "",
        "images_uri": "",
        "isTest": "0",
        "brand": ""
},
    "_explanation": {
    "value": 11.013453,
        "description": "sum of:",
        "details": [
        {
            "value": 11.013453,
            "description": "weight(productName:两面针 in 60540) [PerFieldSimilarity], result of:",
            "details": [
                {
                    "value": 11.013453,
                    "description": "score(doc=60540,freq=1.0 = termFreq=1.0\n), product of:",
                    "details": [
                        {
                            "value": 9.98433,
                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                            "details": [
                                {
                                    "value": 4,
                                    "description": "docFreq",
                                    "details": []
                                },
                                {
                                    "value": 97577,
                                    "description": "docCount",
                                    "details": []
                                }
                            ]
                        },
                        {
                            "value": 1.1030737,
                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                            "details": [
                                {
                                    "value": 1,
                                    "description": "termFreq=1.0",
                                    "details": []
                                },
                                {
                                    "value": 1.2,
                                    "description": "parameter k1",
                                    "details": []
                                },
                                {
                                    "value": 0.75,
                                    "description": "parameter b",
                                    "details": []
                                },
                                {
                                    "value": 13.271376,
                                    "description": "avgFieldLength",
                                    "details": []
                                },
                                {
                                    "value": 10.24,
                                    "description": "fieldLength",
                                    "details": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "value": 0,
            "description": "match on required clause, product of:",
            "details": [
                {
                    "value": 0,
                    "description": "# clause",
                    "details": []
                },
                {
                    "value": 1,
                    "description": "*:*, product of:",
                    "details": [
                        {
                            "value": 1,
                            "description": "boost",
                            "details": []
                        },
                        {
                            "value": 1,
                            "description": "queryNorm",
                            "details": []
                        }
                    ]
                }
            ]
        }
    ]
}
},