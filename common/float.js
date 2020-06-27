
		// /**
		// *小数处理成百分数不能直接用乘法的方式进行小数的处理
		// *因为在js的数据计算中存在很大的计算精度问题0.14*100 = 14.000000002
		// *切记不能用浮点型计算之后用于等于的计算
		// *浮点型数据的最高精度是17位，多的就会被取消掉（字符串都没办法拼接，因为传值的时候就被截去）
		// *如果转化成科学技术法的形式那么将会有多少位，保留多少位（因为转化成科学计数法的形式可用字符串进行拼接）
		// *@param  Number (nums) {0.00023}
		// *@return  String {0.023%}
		// */
		function float(nums){
			if(nums ===1){
				return "100%"
			}else if(nums>1){
				alert("转化的百分数有问题")
				return "转化的百分数有问题"
			}
			let str=''
			if(nums){
			    str = nums.toString();
			}
			const eNum = str.indexOf("e")
			if(eNum !== -1){
				const numEnd = str.substring(eNum+2);
				const numStart = str.substring(0,eNum)
				const strAll = numStart.replace(/\./g,'')
				const strAlls = strAll.padStart(Number(numEnd)+(strAll.length-1),'0')
				str = `0.${strAlls}`
			}
			if(str.indexOf(".") === -1 ){
				return `0%`
			}else{
				const strNum = str.indexOf(".")+1
				let strNM = str.substring(strNum)
				switch(strNM.length){
					case 1:
						strNM = `${strNM}0%` 
					break;
					case 2:
					if(strNM.substr(0,1) === "0"){
						strNM = `${strNM.substring(1)}%` 
					}else{
						strNM = `${strNM}%` 
					}
					break;
					default:
					if(strNM.substr(0,1) === "0"){
						strNM = `${strNM.substr(1,1)}.${strNM.substring(2)}%`
					}else{
						strNM = `${strNM.substr(0,2)}.${strNM.substring(2)}%`
					}
					break;
				}
				return strNM
			}
		}

		