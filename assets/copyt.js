function setClipboardText(event){
    event.preventDefault();//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
    var node = document.createElement('div');
    //对documentfragment不熟，不知道怎么获取里面的内容，用了一个比较笨的方式
    node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
    //getRangeAt(0)返回对基于零的数字索引与传递参数匹配的选择对象中的范围的引用。对于连续选择，参数应为零。
    var htmlData = '<div>'
        + node.innerHTML
        + '<br /><br />————————————————<br />'
        + '版权声明：本文为博主「nowfitness」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。<br />'
        + '原文链接：'+location.href
        + '</div>';
    var textData = window.getSelection().getRangeAt(0)
        + '\n\n————————————————\n'
        + '版权声明：本文为博主「nowfitness」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。\n'
        + '原文链接: '+location.href;
    if(event.clipboardData){
        event.clipboardData.setData("text/html", htmlData);
        //setData(剪贴板格式, 数据) 给剪贴板赋予指定格式的数据。返回 true 表示操作成功。
        event.clipboardData.setData("text/plain",textData);
    }
    else if(window.clipboardData){ //window.clipboardData的作用是在页面上将需要的东西复制到剪贴板上，提供了对于预定义的剪贴板格式的访问，以便在编辑操作中使用。
        return window.clipboardData.setData("text", textData);
    }
};

document.addEventListener('copy',function(e){
    setClipboardText(e);
});
