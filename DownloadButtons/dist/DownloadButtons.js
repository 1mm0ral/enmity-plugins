<<<<<<< HEAD
(()=>{function s(o){window.enmity.plugins.registerPlugin(o)}function r(...o){return window.enmity.modules.getByProps(...o)}var R=window.enmity.modules.common;var z=window.enmity.modules.common.Constants,E=window.enmity.modules.common.Clipboard,F=window.enmity.modules.common.Assets,G=window.enmity.modules.common.Messages,K=window.enmity.modules.common.Clyde,V=window.enmity.modules.common.Avatars,O=window.enmity.modules.common.Native,d=window.enmity.modules.common.React,j=window.enmity.modules.common.Dispatcher,q=window.enmity.modules.common.Storage,H=window.enmity.modules.common.Toasts,J=window.enmity.modules.common.Dialog,Q=window.enmity.modules.common.Token,W=window.enmity.modules.common.REST,X=window.enmity.modules.common.Settings,Y=window.enmity.modules.common.Users,Z=window.enmity.modules.common.Navigation,$=window.enmity.modules.common.NavigationNative,oo=window.enmity.modules.common.NavigationStack,eo=window.enmity.modules.common.Theme,no=window.enmity.modules.common.Linking,to=window.enmity.modules.common.StyleSheet,io=window.enmity.modules.common.ColorMap,mo=window.enmity.modules.common.Components,so=window.enmity.modules.common.Locale,ro=window.enmity.modules.common.Profiles,lo=window.enmity.modules.common.Lodash,co=window.enmity.modules.common.Logger,uo=window.enmity.modules.common.Flux,wo=window.enmity.modules.common.SVG,po=window.enmity.modules.common.Scenes,ao=window.enmity.modules.common.Moment;function l(o){return window.enmity.patcher.create(o)}function c(o){return window.enmity.assets.getIDByName(o)}var b="DownloadButtons",D="1.0.0",T="Adds buttons to download themes and plugins from the chat.",v=[{name:"immoral",id:"997268848988397639"}],u={name:b,version:D,description:T,authors:v};var C=window.enmity.plugins.installPlugin,k=window.enmity.themer.installTheme,L=l("download-buttons"),w=r("openLazy"),M="961782195767365732",A="961782176062509117",_={...u,patches:[],onStart(){L.before(w,"openLazy",(o,[p,a])=>{a==="MessageLongPressActionSheet"&&p.then(i=>{let y=i.default;return i.default=function({message:e,user:g,channel:x,canAddNewReactions:f},h){let n=y({message:e,user:g,channel:x,canAddNewReactions:f},h);if(n.props.children.props.children.props.children[1][1].key=="420")return n;let N=n.props.children.props.children.props.children[1][1].type,B=d.createElement(N,{key:"420",onPressRow:I=>{if(w.hideActionSheet(),e.channel_id===M){let m=e.content.split("Download: ")[1].split(`
=======
(()=>{function s(o){window.enmity.plugins.registerPlugin(o)}function r(...o){return window.enmity.modules.getByProps(...o)}var R=window.enmity.modules.common;var z=window.enmity.modules.common.Constants,E=window.enmity.modules.common.Clipboard,F=window.enmity.modules.common.Assets,G=window.enmity.modules.common.Messages,K=window.enmity.modules.common.Clyde,V=window.enmity.modules.common.Avatars,O=window.enmity.modules.common.Native,d=window.enmity.modules.common.React,j=window.enmity.modules.common.Dispatcher,q=window.enmity.modules.common.Storage,H=window.enmity.modules.common.Toasts,J=window.enmity.modules.common.Dialog,Q=window.enmity.modules.common.Token,W=window.enmity.modules.common.REST,X=window.enmity.modules.common.Settings,Y=window.enmity.modules.common.Users,Z=window.enmity.modules.common.Navigation,$=window.enmity.modules.common.NavigationNative,oo=window.enmity.modules.common.NavigationStack,eo=window.enmity.modules.common.Theme,no=window.enmity.modules.common.Linking,to=window.enmity.modules.common.StyleSheet,io=window.enmity.modules.common.ColorMap,mo=window.enmity.modules.common.Components,so=window.enmity.modules.common.Locale,ro=window.enmity.modules.common.Profiles,lo=window.enmity.modules.common.Lodash,co=window.enmity.modules.common.Logger,uo=window.enmity.modules.common.Flux,wo=window.enmity.modules.common.SVG,po=window.enmity.modules.common.Scenes,ao=window.enmity.modules.common.Moment;function l(o){return window.enmity.patcher.create(o)}function c(o){return window.enmity.assets.getIDByName(o)}var b="DownloadButtons",D="1.0.0",T="Adds buttons to download themes and plugins from the chat.",v=[{name:"immoral",id:"997268848988397639"}],u={name:b,version:D,description:T,authors:v};var C=window.enmity.plugins.installPlugin,k=window.enmity.themer.installTheme,L=l("download-buttons"),w=r("openLazy"),M="961782195767365732",A="961782176062509117",_={...u,patches:[],onStart(){L.before(w,"openLazy",(o,[p,a])=>{a==="MessageLongPressActionSheet"&&p.then(i=>{let y=i.default;return i.default=function({message:e,user:g,channel:x,canAddNewReactions:f},h){let n=y({message:e,user:g,channel:x,canAddNewReactions:f},h);if(n.props.children.props.children.props.children[1][2].key=="420")return n;let N=n.props.children.props.children.props.children[1][2].type,B=d.createElement(N,{key:"420",onPressRow:I=>{if(w.hideActionSheet(),e.channel_id===M){let m=e.content.split("Download: ")[1].split(`
>>>>>>> 4e9555a (new plugin)
`)[0];C(m)}if(e.channel_id===A){let m=e.content.split("Download: ")[1].split(`
`)[0];k(m)}},message:"Download Plugin/Theme",iconSource:c("ic_folder_add_24px")});return n.props.children.props.children.props.children[1].unshift(B),n},i})})},onStop(){}};s(_);})();
