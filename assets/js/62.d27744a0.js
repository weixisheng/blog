(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{488:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sass相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sass相关"}},[s._v("#")]),s._v(" sass相关")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("因为网络问题，"),t("code",[s._v("sass-loader")]),s._v(" 和 "),t("code",[s._v("node-sass")]),s._v(" 可能安装失败，这里可以采用淘宝镜像解决一下")]),s._v(" "),t("h3",{attrs:{id:"安装镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装镜像"}},[s._v("#")]),s._v(" 安装镜像")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://developer.aliyun.com/mirror/NPM?from=tnpm",target:"_blank",rel:"noopener noreferrer"}},[s._v("淘宝 NPM 镜像"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g cnpm --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"项目安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目安装依赖"}},[s._v("#")]),s._v(" 项目安装依赖")]),s._v(" "),t("p",[s._v("在镜像安装成功之后，切换到项目，安装依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cnpm i sass-loader node-sass -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"版本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本问题"}},[s._v("#")]),s._v(" 版本问题")]),s._v(" "),t("p",[t("code",[s._v("sass-loader")]),s._v(" 可能由于版本太高，解析出错，可以安装7.x版本，例如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall sass-loader\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i sass-loader@7.3.1 -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"依赖替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖替换"}},[s._v("#")]),s._v(" 依赖替换")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("sass")]),s._v(" 替换 "),t("code",[s._v("node-sass")]),s._v("，即安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i sass@1.35.2 sass-loader@7.3.1 -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"深度选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深度选择器"}},[s._v("#")]),s._v(" 深度选择器")]),s._v(" "),t("p",[s._v("采用"),t("code",[s._v("::v-deep")]),s._v("，例如：")]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".el-table ::v-deep th ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #f8f8f8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("less和stylus的深度选择器为"),t("code",[s._v(">>>")]),s._v("，")]),s._v(" "),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".el-table >>> th")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #f8f8f8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);