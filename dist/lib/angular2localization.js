System.register("angular2localization/src/services/locale.service", ["angular2/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var LocaleService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      LocaleService = (function() {
        function LocaleService() {
          this.languageCodes = [];
          this.languageCode = "";
        }
        LocaleService.prototype.addLanguage = function(language) {
          this.languageCodes.push(language);
        };
        LocaleService.prototype.definePreferredLanguage = function(defaultLanguage, expiry) {
          this.expiry = expiry;
          this.languageCode = this.getCookie("locale");
          if (this.languageCode == "") {
            var browserLanguage = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
            browserLanguage = browserLanguage.substring(0, 2);
            if (this.languageCodes.indexOf(browserLanguage) != -1) {
              this.languageCode = browserLanguage;
            } else {
              this.languageCode = defaultLanguage;
            }
            this.setCookie("locale", this.languageCode, this.expiry);
          }
        };
        LocaleService.prototype.getCurrentLanguage = function() {
          return this.languageCode;
        };
        LocaleService.prototype.setCurrentLanguage = function(language) {
          if (this.languageCode != language) {
            this.languageCode = language;
            this.setCookie("locale", language, this.expiry);
          }
        };
        LocaleService.prototype.setCookie = function(name, value, days) {
          if (days != null) {
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + expirationDate.toUTCString();
          } else {
            var expires = "";
          }
          document.cookie = name + "=" + value + expires + "; path=/";
        };
        LocaleService.prototype.getCookie = function(name) {
          name += "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };
        LocaleService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], LocaleService);
        return LocaleService;
      }());
      exports_1("LocaleService", LocaleService);
    }
  };
});

System.register("angular2localization/src/services/localization.service", ["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/add/operator/map", "./locale.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      http_1,
      Observable_1,
      locale_service_1;
  var LocalizationService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(http_1_1) {
      http_1 = http_1_1;
    }, function(Observable_1_1) {
      Observable_1 = Observable_1_1;
    }, function(_1) {}, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }],
    execute: function() {
      LocalizationService = (function() {
        function LocalizationService(http, locale) {
          this.http = http;
          this.locale = locale;
          this.translationsData = {};
          this.prefix = "";
          this.languageCode = "";
          this.isReady = false;
        }
        LocalizationService.prototype.addTranslation = function(language, translation) {
          this.translationsData[language] = translation;
          this.isReady = true;
        };
        LocalizationService.prototype.translationProvider = function(prefix) {
          this.prefix = prefix;
        };
        LocalizationService.prototype.getTranslation = function() {
          var _this = this;
          this.translationsData = {};
          this.isReady = false;
          var url = this.prefix + this.languageCode + '.json';
          this.http.get(url).map(function(res) {
            return res.json();
          }).subscribe(function(res) {
            _this.translationsData[_this.languageCode] = res;
          }, function(error) {
            console.error("Localization service:", error);
          }, function() {
            _this.isReady = true;
            console.log("Localization service:", "Http get method completed.");
          });
        };
        LocalizationService.prototype.translate = function(key) {
          var _this = this;
          return new Observable_1.Observable(function(observer) {
            var value;
            if (_this.translationsData[_this.languageCode] != null) {
              var translation = _this.translationsData[_this.languageCode];
              value = translation[key];
            }
            if (value == null || value == "") {
              value = key;
            }
            observer.next(value);
            observer.complete();
          });
        };
        LocalizationService.prototype.updateTranslation = function() {
          this.languageCode = this.locale.getCurrentLanguage();
          if (this.prefix != "") {
            this.getTranslation();
          }
        };
        LocalizationService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [http_1.Http, locale_service_1.LocaleService])], LocalizationService);
        return LocalizationService;
      }());
      exports_1("LocalizationService", LocalizationService);
    }
  };
});

System.register("angular2localization/src/pipes/translate.pipe", ["angular2/core", "../services/locale.service", "../services/localization.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      core_2,
      locale_service_1,
      localization_service_1;
  var TranslatePipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
      core_2 = core_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(localization_service_1_1) {
      localization_service_1 = localization_service_1_1;
    }],
    execute: function() {
      TranslatePipe = (function() {
        function TranslatePipe(locale, localization) {
          this.locale = locale;
          this.localization = localization;
        }
        TranslatePipe.prototype.transform = function(key) {
          var _this = this;
          if (this.locale.getCurrentLanguage() != "" && this.locale.getCurrentLanguage() != this.localization.languageCode) {
            this.localization.updateTranslation();
          }
          if (this.localization.isReady) {
            if (this.key != key || this.value == "" || this.languageCode != this.localization.languageCode) {
              var formatKey = key.replace(/^\d+\b/, '');
              formatKey = formatKey.trim();
              this.localization.translate(formatKey).forEach(function(value) {
                _this.value = key.replace(formatKey, value);
              }, null).then(function() {
                _this.languageCode = _this.localization.languageCode;
                _this.key = key;
                return _this.value;
              });
            } else {
              return this.value;
            }
          } else {
            return this.value;
          }
        };
        TranslatePipe = __decorate([core_2.Pipe({
          name: 'translate',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService, localization_service_1.LocalizationService])], TranslatePipe);
        return TranslatePipe;
      }());
      exports_1("TranslatePipe", TranslatePipe);
    }
  };
});

System.register("angular2localization/angular2localization", ["./src/services/localization.service", "./src/services/locale.service", "./src/pipes/translate.pipe"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(localization_service_1_1) {
      exportStar_1(localization_service_1_1);
    }, function(locale_service_1_1) {
      exportStar_1(locale_service_1_1);
    }, function(translate_pipe_1_1) {
      exportStar_1(translate_pipe_1_1);
    }],
    execute: function() {}
  };
});
