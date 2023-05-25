(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{390:function(s,a,n){s.exports=n.p+"assets/img/linux-1.e1807b61.png"},472:function(s,a,n){"use strict";n.r(a);var e=n(28),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux安装node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux安装node"}},[s._v("#")]),s._v(" Linux安装Node")]),s._v(" "),e("h2",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),e("ol",[e("li",[s._v("到 "),e("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("node 官网"),e("OutboundLink")],1),s._v("获取 "),e("code",[s._v("Linux")]),s._v(" 版本的下载链接\n"),e("img",{attrs:{src:n(390),alt:"Linux 二进制文件 (x64)"}})])]),s._v(" "),e("p",[s._v("采用LTS版本，获取的链接为 "),e("base-tag",{attrs:{text:"https://npm.taobao.org/mirrors/node/v14.17.5/node-v14.17.5-linux-x64.tar.xz"}})],1),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("进入 "),e("code",[s._v("Linux")]),s._v(" 的 "),e("code",[s._v("/usr/local")]),s._v(" 目录创建一个 "),e("code",[s._v("nodejs")]),s._v(" 目录，如果权限不足，使用 "),e("code",[s._v("sudo")]),s._v(" 命令。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" nodejs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("进入 "),e("code",[s._v("nodejs")]),s._v(" 目录，执行下载命令")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://npm.taobao.org/mirrors/node/v14.17.5/node-v14.17.5-linux-x64.tar.xz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),e("ol",[e("li",[s._v("在当前目录（"),e("code",[s._v("nodejs")]),s._v("） "),e("code",[s._v("xz")]),s._v(" 解压，生成 "),e("code",[s._v("node-v14.17.5-linux-x64.tar")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("xz -d node-v14.17.5-linux-x64.tar.xz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("再执行 "),e("code",[s._v("tar")]),s._v(" 解压，生成 "),e("code",[s._v("node-v14.17.5-linux-x64")]),s._v(" 目录")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf node-v14.17.5-linux-x64.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("此时我们可以删掉 "),e("code",[s._v("nodejs")]),s._v(" 目录下的 "),e("code",[s._v("node-v14.17.5-linux-x64.tar")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf node-v14.17.5-linux-x64.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("然后把 "),e("code",[s._v("node-v14.17.5-linux-x64")]),s._v(" 目录下的所有内容移到 "),e("code",[s._v("nodejs")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v14.17.5-linux-x64/* /usr/local/nodejs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("最后顺便把空目录 "),e("code",[s._v("node-v14.17.5-linux-x64")]),s._v(" 删掉")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf node-v14.17.5-linux-x64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("p",[s._v("此时 "),e("code",[s._v("nodejs/bin")]),s._v(" 目录下已经存在 "),e("code",[s._v("node")]),s._v(" 和 "),e("code",[s._v("npm")]),s._v("，但是为了全局能使用，配置下软链接")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nodejs/bin/node /usr/local/bin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nodejs/bin/npm /usr/local/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("测试下安装结果")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v14.17.5")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.14.14 ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("完成！")])])}),[],!1,null,null,null);a.default=t.exports}}]);