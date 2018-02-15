define(['angularAMD'], function(ng) {
    'use strict';

    var config = angular.module('config', [])
        .constant('ENV', {
          baseURL: "http://192.168.56.101:", // IP of controller, in this case, ODL controller is running in a Virtual machine with IP 192.168.101
          // PORT IS 8080 FOR BERYLLIUM ODL VERSION. FOR NEXTS VERSION (CARBON, NITROGEN...) IS 8181
          adSalPort: "8080",  // Port of ODL controller is 8080
          mdSalPort : "8080", // Port of ODL controller
          ofmPort : "8080",	  // Port of ODL controller
          configEnv : "ENV_DEV",
          odlUserName: 'admin',  	// ODL UserName
          odlUserPassword: 'admin', 	// ODL UserPassword
          getBaseURL : function(salType){
              if(salType!==undefined){
                  var urlPrefix = "";
                  if(this.configEnv==="ENV_DEV"){
                      urlPrefix = this.baseURL;
                  }else{
                      urlPrefix = window.location.protocol+"//"+window.location.hostname+":";
                  }

                  if(salType==="AD_SAL"){
                      return urlPrefix + this.adSalPort;
                  }else if(salType==="MD_SAL"){
                      return  urlPrefix + this.mdSalPort;
                  }else if(salType==="CONTROLLER"){
                      return  urlPrefix + this.ofmPort;
                  }
              }
              //default behavior
              return "";


//                aaaUrl: "/aaa",
//                appUrl: "/APP",
////                controllerUrl: "/controller",
//                controllerUrl: "",
//                configEnv : "ENV_DEV",
//                odlUserName: 'admin',
//                odlUserPassword: 'admin',
//
//                getBaseURL : function(serviceType){
//                    if(serviceType!==undefined) {
//                        var urlPrefix = window.location.protocol + "//" + window.location.hostname;
//                        var removeHttp = "://";
//                        var urlParts = urlPrefix.split(removeHttp);
//                        var host = urlParts[1];
//                        var baseUrl = window.location.protocol + "//" + host + ':8181';
//
//                        if (serviceType === null) {
//                            return baseUrl;
//                        }else if (serviceType === "AAA") {
//                            return baseUrl + this.aaaUrl;
//                        }else if (serviceType === "APP") {
//                            return baseUrl + this.appUrl;
//                        }else if (serviceType === "AUTH") {
//                            return baseUrl + "/controller-auth";
//                        }else if (serviceType === "CONTROLLER") {
//                            return baseUrl + this.controllerUrl;
//                        }else if (serviceType === "LOGS") {
//                            return baseUrl + "/log-aggregator";
//                        }else if (serviceType === "METRICS") {
//                            return baseUrl + "/metrics-aggregator/";
//                        }else if (serviceType === "PATHMAN") {
//                          return baseUrl + "/pathman";
//                        }else {
//                            return baseUrl;
//                        }
//                    }
//                    return window.location.protocol + "//" + window.location.hostname + ':8181';
                }
            });

    return config;
});