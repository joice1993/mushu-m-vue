import wx from 'weixin-js-sdk';

// 本地存储函数
function getStorage(storage_var) {
  // return JSON.parse(window.localStorage.getItem(storage_var).substring(1, window.localStorage.getItem(storage_var).length - 1) || []);
  return window.localStorage.getItem(storage_var).substring(1, window.localStorage.getItem(storage_var).length - 1) || [];

}
function saveStorage(storage_var,storage_val) {
  window.localStorage.setItem(storage_var, JSON.stringify(storage_val));
}
function delStorage(storage_var,del_all) {
  var del_all = false;
  if (del_all) {
    window.localStorage.clear();
  } else {
    localStorage.removeItem(storage_var);
  }
}

function shareSdk (shareData) {
    wx.config({
      debug: false,
      appId: 'wxfdb8e91c504b82de',
      timestamp: '1533112460',
      nonceStr: '2s7dtg0nxexyqa5iqkvj8uctxby58nh9',
      signature: '1cdd474a3cb2825b34fe5f07c5a1ef411ee81639',
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
    })
    wx.ready(function() {
      wx.onMenuShareAppMessage(shareData);
      wx.onMenuShareTimeline(shareData);
      wx.onMenuShareQQ(shareData);
      wx.onMenuShareWeibo(shareData);
    });
    wx.error(p => {
      console.log(p)
    })
}

export {
  getStorage,
  saveStorage,
  delStorage,
  shareSdk
}
