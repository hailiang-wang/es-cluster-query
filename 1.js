{
    "_shard": "[test_cosmetic][1]",
    "_node": "xKsM7-QSRCWJhZxA0hSnbQ",
    "_index": "test_cosmetic",
    "_type": "pname",
    "_id": "8",
    "_score": 11.6640005,
    "_source": {
    "id": "8",
        "barcode": "",
        "rating": "9",
        "productName": "两面针润肤露",
        "aliasName": "",
        "images_uri": "",
        "isTest": "0",
        "brand": ""
},
    "_explanation": {
    "value": 11.6640005,
        "description": "sum of:",
        "details": [
        {
            "value": 11.6640005,
            "description": "weight(productName:两面针 in 662) [PerFieldSimilarity], result of:",
            "details": [
                {
                    "value": 11.6640005,
                    "description": "score(doc=662,freq=1.0 = termFreq=1.0\n), product of:",
                    "details": [
                        {
                            "value": 10.574461,
                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                            "details": [
                                {
                                    "value": 2,
                                    "description": "docFreq",
                                    "details": []
                                },
                                {
                                    "value": 97806,
                                    "description": "docCount",
                                    "details": []
                                }
                            ]
                        },
                        {
                            "value": 1.103035,
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
                                    "value": 13.270035,
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