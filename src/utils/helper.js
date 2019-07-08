/**
 * 处理后台返回的日期字符串"2018-01-03"，整理为UI稿的"01/03"
 *
 * @param String dateStr 日期字符串 eg."2018-01-03"
 * @returns String 格式化后的日期字符串 eg. "01/03"
 */
export const formateEchartDate = (dateStr) => {
    try {
        const dateStrList = dateStr.split('-');
        return `${dateStrList[1]}/${dateStrList[2]}`;
    } catch (e) {
        return dateStr
    }
}
/**
 * 
 */
export const fileIsOfType = (file, fileTypes) => {
    const fileExtension = '.'+file.name.split('.').pop();
    if (fileTypes && fileTypes.length && (fileTypes.indexOf(file.type) < 0 && fileTypes.indexOf(fileExtension) < 0)) {
        return false
    }
    return true
}
/**参数说明：
    * 根据长度截取先使用字符串，超长部分追加…
    * str 对象字符串
    * len 目标字节长度
    * 返回值： 处理结果字符串
    */
export const cutString = (str, len) => {
    //length属性读出来的汉字长度为1

    if (str.length * 2 <= len) {
        return str;
    }

    var strlen = 0;
    var s = "";

    for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i);

        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;

            if (strlen >= len) {
                return s.substring(0, s.length - 1) + "...";
            }
        } else {
            strlen = strlen + 1;

            if (strlen >= len) {
                return s.substring(0, s.length - 2) + "...";
            }
        }
    }

    return s;
}
/**
 * 查询url参数
 * @param {*} 
 * @returns {String}
 */
export const getQueryString = (name) => {
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(&|$)");
    let regData = location.href.match(reg);
    return regData && regData[2] || '';
}
/** 判断数字是否符合要求
 * 仅支持两位小数，不能输入非数字，不能小数点后没有数字
 * val 对象字符串 eg： "2.134"
 * 返回值：合法则true，否则为false
*/
export const checkNumberTwoDecimals = (val) => {
    const isNum = /^((?!0)\d+(.\d{1,2})?)$/;
    if (!isNum.test(val)) {
        return false;
    }
    return true;
}

export const checkNumberOneDecimal = (val) => {
  const isNum = /^((?!0)\d+(.\d)?)$/;
  if (!isNum.test(val)) {
      return false;
  }
  return true;
}
/**
 * 打点日志上报
 */
export const log = (action_code) => {
    window.$vue.$http.post(`${window.$vue.$CONST.baseUrl}/log`, {
        action_code: action_code,
        customer_id: window.$vue.$store.state.userInfo.uid
    }).catch(() => {
        console.log('日志上报发生错误')
    });
}

