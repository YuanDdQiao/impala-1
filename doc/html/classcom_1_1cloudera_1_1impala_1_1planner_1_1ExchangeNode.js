var classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode =
[
    [ "ExchangeNode", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a2b85c52bc1a37692aeb15138fa6f72c8", null ],
    [ "addCardinalities", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#afbff17e10aa26de2ff6f19ca7ee2d365", null ],
    [ "addChild", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#af267b195f48348eb032743004d1bced6", null ],
    [ "addConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a733655bcf35923d7ee6ed87cafffb5aa", null ],
    [ "assignConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a3640f028c46f43b8cd5e95e264929c94", null ],
    [ "capAtLimit", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#aa14ba07f8429b799ccbce5714e84400d", null ],
    [ "computeCosts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ab68cab6edffefa1bd0216ed8f9fa179d", null ],
    [ "computeMemLayout", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ae85be815a5423c220a5cadffd73a58b4", null ],
    [ "computeSelectivity", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a22ffb5792713456084d84ca51c5e5a44", null ],
    [ "computeStats", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a0677500e6955b5a73dd6b39e94b67bf6", null ],
    [ "createDefaultSmap", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a17edb3d41d8ce757d6f72987937f31d8", null ],
    [ "debugString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#abb0eea865c806f75688a3efd9a9b9ac2", null ],
    [ "getAssignedConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a4cb8d51777c39b1a1ed1110305b80d06", null ],
    [ "getAvgRowSize", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ad7b43aa5e8503f843359720f674dab3e", null ],
    [ "getCardinality", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a8ce8aa221e9653a7651681aa479ddb14", null ],
    [ "getCombinedChildSmap", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a12b36fc6896a52fccdd24f3c71afe12c", null ],
    [ "getConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ae35949b3a035116f1e2d062b57f35e48", null ],
    [ "getDisplayLabel", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ae96a42b7ee572251e68accc1de1757bc", null ],
    [ "getDisplayLabelDetail", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a6346071f321310cce40205e6fadab51a", null ],
    [ "getExplainString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a074eb8afca29fc9174acdb379d624ef2", null ],
    [ "getExplainString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ab7c8de3737a61e47f4a873575de285fa", null ],
    [ "getExplainString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a1a53cb8b234bd783579af4b76001c358", null ],
    [ "getFragment", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a25b0eadba3191d250d422824ed564b4c", null ],
    [ "getId", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a2fb3a4d72c82c0c0ba79fec2a0d64ede", null ],
    [ "getInputCardinality", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ac458f8ca80a98665073f11e11ca9e76a", null ],
    [ "getLimit", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a1be50a55971fb3841fa76cc78099623a", null ],
    [ "getNodeExplainString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ad3be924cdfb847d5b202cad0030d4919", null ],
    [ "getNullableTupleIds", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a1b1865a6ca7008355738256d740ff63e", null ],
    [ "getNumNodes", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a6113f9a419fbab952ed7063715d9a4fd", null ],
    [ "getOffsetExplainString", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a8204e09d9fa5aed8e1dba291630031f1", null ],
    [ "getOutputSmap", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a2e5d51bc552dd18874c13bd99ca89406", null ],
    [ "getPerHostMemCost", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ab97e3263781c694c4203461f234642a6", null ],
    [ "getTblRefIds", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a90935f2c8ee3437b17562433a702832e", null ],
    [ "getTupleIds", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ac7d0db4439c91a8935884d153887b088", null ],
    [ "hasLimit", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a19118f2d6858b77a68f5ffa507049d72", null ],
    [ "hasValidStats", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a7556734d22fcce9ef8426e15346aaa14", null ],
    [ "init", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a063d9e8f28df083ec5e17e61a64775f9", null ],
    [ "isBlockingNode", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a53b4c15c940cd6c177bc4aa1e0ed7fbb", null ],
    [ "markSlotsMaterialized", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a00f73fa617011bb4ff7008c933d75b2c", null ],
    [ "multiplyCardinalities", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a236d2948b368bb65a2a4b3dfcbef16c6", null ],
    [ "setAssignedConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a945f8e962447598c440b985fe4577264", null ],
    [ "setDisplayName", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a4f30fd795fba9bc42e956e68c36dbcff", null ],
    [ "setFragment", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a4ebe51ee6906553a46950009a2fe3ec0", null ],
    [ "setId", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ab8937017982c4042a93069d1f9ed0eac", null ],
    [ "setLimit", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a34dc79d03806887d7bf252eb058586bc", null ],
    [ "setMergeInfo", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a944d0d1c42577b3ca8ee14d40694344a", null ],
    [ "setOutputSmap", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a0c82079ea7fb36e5d20ec63d998981a0", null ],
    [ "setTblRefIds", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a9234afce118c06082fc65f0a80baeac8", null ],
    [ "toThrift", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a2ece488bacb4a05672e864f67481ff49", null ],
    [ "transferConjuncts", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ad88e34cb1ce67f60fcee9bdfee1f9c99", null ],
    [ "treeToThrift", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ad7f0da6d9c9e2dbe47c7b3254148aba7", null ],
    [ "unsetLimit", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a004400cb0fe28f4afd851e16a5ed386b", null ],
    [ "assignedConjuncts_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ae86c7a4d5ff53fd4c975ed10fd15b3d8", null ],
    [ "avgRowSize_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ae57aa5e0da7ec358ead79fe4e14dd1e6", null ],
    [ "cardinality_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a04bb91215a1a50a038ce703e2dc78414", null ],
    [ "conjuncts_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a61f4bd6892dfde12236a27fffcad70cb", null ],
    [ "DEFAULT_BATCH_SIZE", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#aaeaab6c94f36c6a226df93c39ac39e28", null ],
    [ "displayName_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#ac27ac0a9f2c4e08424efac97a5cb49d9", null ],
    [ "fragment_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a50b40127ddfcbf852d32cba6790e2a5b", null ],
    [ "id_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a13662825f69768f0c4985ffa3b7f5b6d", null ],
    [ "limit_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#af0dd393a996c399aa3f784e72bf5c0d6", null ],
    [ "LOG", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a1fd87ee7aed83639ef7a6f8c3b697dd2", null ],
    [ "mergeInfo_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#aa6321a2d67ca11fb2777ba40ce21256c", null ],
    [ "nullableTupleIds_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a4eb27ae48e941c99be87401820d75a1c", null ],
    [ "numNodes_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a93c6ed48d9fd753d6e066d64858a019f", null ],
    [ "offset_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a0dae73bca6d659b7d627be6c231fb48b", null ],
    [ "outputSmap_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#aba440820bca809d32acb7288bffdac02", null ],
    [ "perHostMemCost_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a37c30672999db94543604ed98471893e", null ],
    [ "tblRefIds_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a03a79009967d5ba63f7d020711ea4458", null ],
    [ "tupleIds_", "classcom_1_1cloudera_1_1impala_1_1planner_1_1ExchangeNode.html#a2d2eee73aedf7868e191a2024e9f3022", null ]
];