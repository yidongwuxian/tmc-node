/**
 * Created by xyz on 15/11/10.
 */

/**
 * 通过隐藏iframe的方式，加载一个url，Native的WebView拦截url，并执行相应方法
 * @param url
 */
function callNative(url) {
    var iFrame;
    iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", url);
    iFrame.setAttribute("style", "display:none;");
    iFrame.setAttribute("height", "0px");
    iFrame.setAttribute("width", "0px");
    iFrame.setAttribute("frameborder", "0");
    document.body.appendChild(iFrame);
    // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
    iFrame.parentNode.removeChild(iFrame);
    iFrame = null;
}

var isSupportKoalajs = false;

/**
 * 当前版本App是否支持Koalajs，如果支持会回调此方法，否则此回调不执行
 */
function isSupportCallback(){
    isSupportKoalajs = true;
}

/**
 * 导航条右上角显示文字
 */
function showActionButton(text){
    var url = "koalajs://showActionButton?text=" + text;
    callNative(url);
}

/**
 * 点击 导航条右上角显示文字 调用方法
 */
// function onActionButtonPressed(){
//   //点了右上角按钮
// }

/**
 * 隐藏 导航条右上角文字
 */
function hideActionButton(){
    var url = "koalajs://hideActionButton";
    callNative(url);
}

/**
 * 设置导航条右标题
 */
function setTitle(text){
    var url = "koalajs://setTitle?title=" + text;
    callNative(url);
}

/**
 * 隐藏 导航条左上角返回按钮
 */
function hideBackButton(){
    var url = "koalajs://hideBackButton";
    callNative(url);
}

/**
 * 显示 导航条左上角返回按钮
 */
function showBackButton(){
    var url = "koalajs://showBackButton";
    callNative(url);
}

/**
 * 分享内容，参数格式如下
    json = {
        content: 分享的标题
        url：分享的URL
        imgUrl: 分享图标URL
    };
 */
function showShare(json){
    var data = {
        QQ: {
            printScreen : false,
            snsTitle : json.content,
            snsURL : json.url,
            snsImageUrl : json.imgUrl
        },
        Wechat: {
            printScreen : false,
            snsTitle : json.content,
            snsURL : json.url,
            snsImageUrl : json.imgUrl
        },
        WechatMoments: {
            printScreen : false,
            snsTitle : json.content,
            snsURL : json.url,
            snsImageUrl : json.imgUrl
        },
        SinaWeibo:{
            printScreen : false,
            snsText : json.content + json.url,
            snsImageUrl : json.imgUrl
        },
        Clipboard:{
            content: json.content + json.url
        }
    };

    var url = "koalajs://showShare?data="+encodeURIComponent(JSON.stringify(data));
    callNative(url);
}

/**
 * 分享回调
  json = {
    mobile:'13812341234',
    status:'0'  //'0':点某项分享 '1':分享失败 '2':分享成功
  }
 */
// function onShareResult(json){
//
// }

/**
 * 关闭当前WebView窗口
 */
function closeWindows(){
    var url = "koalajs://closeWindows";
    callNative(url);
}

/**
 * 在第三方浏览器中打开url
 */
function openurl(url){
    var url = "koalajs://openurl?url="+encodeURIComponent(url);
    callNative(url);
}

/**
 * 打开“拉卡拉”中的业务
 */
function openbus(tag){
    var url = "koalajs://openbus?tag="+tag;
    callNative(url);
}

/**
 * For第三方跳Safari支付返回时，当前页面此方法会被调用
 * 1. koala://third?JTdCaGVsbG8lM0ElMjdraXR0eSUyNyU3RA==
 * 2. json={data:'JTdCaGVsbG8lM0ElMjdraXR0eSUyNyU3RA=='}
 */
// function onViewControllerResult(json){
//
// }

/**
 * 申请当前客户端用户手机号
 */
function applymobile(){
  callNative("koalajs://mobile");
}

/**
 * 申请当前客户端用户手机号回调
  json = {
    mobile:'13812341234'
  }
 */
// function onApplyMobile(json){
//
// }
