var flashvars = {};
flashvars.id = 'air_badge';
flashvars.airversion = '1.1';
flashvars.appname = 'SPYR';
flashvars.appurl = 'http://dl.dropbox.com/u/33644235/SPYR.air';
flashvars.imageurl = 'images/Spyr256.png';
flashvars.appid = 'com.yourSite.yourApp';
flashvars.pubid = '';
flashvars.appversion = '1.0';
flashvars.installarg = 'null';
flashvars.launcharg = 'null';
flashvars.helpurl = 'help.html';
flashvars.hidehelp = 'true';
flashvars.skiptransition = 'false';
flashvars.titlecolor = '#aaff';
flashvars.buttonlabelcolor = '#aaff';
flashvars.appnamecolor = '#aaff';


var params = {};
params.wmode = 'window';
params.menu = 'false';
params.quality = 'high';

var attributes = {};

swfobject.embedSWF('install_swf/AIRInstallBadge.swf', 'badge_div', '215', '180', '9.0.115', 'install_swf/expressInstall.swf', flashvars, params, attributes);