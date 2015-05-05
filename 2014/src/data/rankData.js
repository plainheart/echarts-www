define({

    timeData : ["2010年7月","2010年8月","2010年9月","2010年10月","2010年11月","2010年12月","2011年1月","2011年2月","2011年3月","2011年4月","2011年5月","2011年6月","2011年7月","2011年8月","2011年9月","2011年10月","2011年11月","2011年12月","2012年1月","2012年2月","2012年3月","2012年4月","2012年5月","2012年6月","2012年7月","2012年8月","2012年9月","2012年10月","2012年11月","2012年12月","2013年1月","2013年2月","2013年3月","2013年4月","2013年5月","2013年6月","2013年7月","2013年8月","2013年9月","2013年10月","2013年11月","2013年12月","2014年1月","2014年2月","2014年3月","2014年4月","2014年5月"],

    rankData : [
                ["巴西","3","3","4","3","3","4","4","4","4","3","3","5","4","6","7","5","6","6","6","7","5","6","6","5","11","13","12","14","13","18","18","18","18","19","19","22","9","9","8","11","10","10","10","9","9","6","4"],
                ["克罗地亚","15","14","11","9","9","10","9","9","8","10","10","8","9","10","9","12","8","8","8","9","10","8","8","8","9","9","9","11","10","10","10","9","9","4","4","4","8","8","10","18","16","16","16","16","16","20","20"],
                ["墨西哥","24","25","28","28","28","27","27","27","27","26","28","9","20","20","20","22","20","21","21","21","22","20","20","19","19","18","21","19","14","15","15","15","15","14","16","17","20","20","21","24","20","21","21","21","20","19","19"],
                ["喀麦隆","40","40","37","38","38","37","38","43","42","48","49","48","50","52","48","47","48","50","56","66","66","64","64","64","59","59","61","71","62","61","67","79","79","60","62","65","71","51","61","59","51","50","50","46","50","50","50"],
                ["西班牙","1","1","1","1","1","1","1","1","1","1","1","1","1","2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                ["智利","10","10","10","14","16","15","15","14","14","14","13","27","11","11","14","16","13","13","12","12","14","13","13","11","15","15","14","17","21","26","30","23","22","23","23","25","21","21","16","12","15","15","15","14","15","14","13"],
                ["荷兰","2","2","2","2","2","2","2","2","2","2","2","2","2","1","2","2","2","2","2","3","2","4","4","4","8","8","8","6","7","8","8","8","8","9","9","5","5","5","9","8","9","9","9","10","11","15","15"],
                ["澳大利亚","20","20","24","21","20","26","26","21","20","20","20","22","22","22","19","20","22","23","21","22","20","21","21","24","23","24","25","34","33","36","36","37","39","46","47","47","40","46","53","57","59","58","56","53","63","59","59"],
                ["哥伦比亚","39","36","40","46","47","48","48","50","50","49","50","54","35","35","32","31","36","36","35","32","31","23","23","20","22","21","22","9","8","5","5","6","6","6","6","7","3","3","5","4","4","4","4","5","5","4","5"],
                ["希腊","12","12","12","12","11","11","11","10","10","12","12","12","13","14","11","8","14","14","14","14","13","14","14","15","12","12","11","10","12","11","11","11","12","13","13","16","11","11","12","15","12","12","12","12","13","10","10"],
                ["日本","32","32","30","30","30","29","29","17","15","13","14","13","14","15","15","17","19","19","19","30","33","30","30","23","20","22","23","23","24","22","21","28","26","29","30","32","37","37","42","44","48","47","48","50","48","47","47"],
                ["科特迪瓦","26","26","23","19","19","21","21","26","25","21","21","14","15","15","16","19","16","16","18","15","15","15","15","16","16","16","16","16","15","14","14","12","13","12","12","13","13","18","19","17","17","17","17","23","24","21","21"],
                ["乌拉圭","6","6","7","7","7","7","7","7","7","7","7","18","5","5","4","4","4","4","4","4","4","3","3","2","3","4","5","7","11","16","16","16","16","17","17","19","12","12","7","6","6","6","6","7","6","5","6"],
                ["哥斯达黎加","49","53","53","66","63","69","69","49","53","55","56","55","56","60","57","62","64","65","62","63","59","59","59","65","57","62","66","72","64","66","66","53","53","47","48","48","39","42","33","31","31","31","32","35","34","34","34"],
                ["英格兰","7","7","6","6","6","6","6","6","6","6","6","4","6","4","8","7","5","5","5","5","6","7","7","6","4","3","3","5","6","6","6","4","4","7","7","9","15","14","17","10","13","13","13","15","12","11","11"],
                ["意大利","11","11","13","16","14","14","14","13","11","9","9","6","8","7","6","6","9","9","9","8","9","12","12","12","6","6","6","8","5","4","4","5","5","8","8","8","6","6","4","8","7","7","7","8","8","9","9"],
                ["瑞士","18","17","21","23","21","22","22","22","23","25","25","29","30","30","18","18","17","17","16","16","18","18","18","21","21","23","20","15","16","12","13","14","14","15","14","14","16","15","14","7","8","8","8","6","7","8","8"],
                ["厄瓜多尔","58","58","72","67","61","53","52","54","49","56","64","68","67","66","69","52","42","42","42","40","39","37","37","36","27","20","17","20","17","13","12","12","11","10","10","10","18","17","20","22","23","23","23","24","23","28","28"],
                ["洪都拉斯","46","46","52","54","57","59","56","39","38","43","43","44","51","50","53","57","54","53","51","59","63","61","62","55","63","65","72","66","56","58","59","51","49","52","50","52","55","43","40","34","41","42","43","40","36","32","30"],
                ["法国","21","21","27","18","21","18","18","19","18","19","19","15","16","15","12","15","15","15","15","17","16","16","16","14","14","14","15","13","18","17","17","17","17","18","18","18","23","23","25","21","19","20","20","18","17","16","16"],
                ["阿根廷","5","5","5","5","5","5","5","5","4","5","5","10","10","9","10","10","10","10","10","11","8","10","9","7","7","7","7","4","3","3","3","3","3","3","3","3","4","4","2","3","3","3","3","3","3","6","7"],
                ["波黑","57","57","59","53","51","44","45","42","56","44","45","39","41","39","22","21","23","20","19","19","21","27","27","29","30","31","30","29","31","27","26","24","23","21","21","15","14","13","18","16","21","19","19","17","21","25","25"],
                ["伊朗","64","65","57","61","64","66","65","44","43","46","47","50","54","53","50","42","45","45","44","47","51","51","52","45","50","48","54","58","44","59","60","58","57","56","57","67","52","52","48","49","45","33","34","38","42","37","37"],
                ["尼日利亚","30","30","34","34","33","32","32","40","39","38","39","41","43","38","43","44","43","43","45","56","57","60","63","60","58","58","58","63","57","52","52","30","30","31","28","31","35","35","36","33","36","37","41","47","47","45","44"],
                ["德国","4","4","3","4","4","3","3","3","3","4","4","3","3","3","3","3","3","3","3","2","3","2","2","3","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","2","2","2","2","2","2","2","2"],
                ["葡萄牙","8","8","8","8","8","8","8","8","9","8","8","7","7","8","5","8","7","7","7","6","7","5","5","10","5","5","4","3","4","7","7","6","7","5","5","6","7","7","11","14","5","5","5","4","4","3","3"],
                ["加纳","23","23","20","17","17","16","16","15","16","15","15","33","36","36","37","33","29","29","26","23","23","22","22","25","33","32","31","31","29","30","26","19","20","22","22","21","24","24","24","23","24","24","24","37","35","38","38"],
                ["美国","13","18","18","25","24","18","18","18","19","22","22","24","30","28","31","34","34","34","33","31","27","29","29","28","36","36","33","32","27","28","28","32","33","28","29","28","22","19","13","13","14","14","14","13","14","13","14"],
                ["比利时","48","48","62","62","62","57","58","58","62","37","37","35","37","37","34","37","41","41","40","39","40","44","44","54","53","53","40","30","20","21","20","20","19","16","15","12","10","10","6","5","11","11","11","11","10","12","12"],
                ["阿尔及利亚","33","33","35","33","34","35","36","55","55","40","41","51","52","46","46","35","30","30","32","36","35","38","38","32","35","34","28","24","19","19","22","34","34","35","35","35","34","34","28","32","26","26","27","26","25","25","25"],
                ["俄罗斯","17","16","25","10","13","13","13","12","13","18","18","16","17","13","13","13","12","12","13","13","12","11","11","13","13","11","13","12","9","9","9","10","10","11","11","11","17","16","15","19","22","22","22","22","19","18","18"],
                ["韩国","44","44","44","40","39","40","38","32","29","31","31","26","28","33","29","29","32","32","30","34","30","31","31","35","28","29","27","25","32","35","34","38","47","42","42","40","43","56","58","56","54","54","53","61","60","56","55"]
            ]
});