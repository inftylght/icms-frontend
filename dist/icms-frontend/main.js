(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/article/article.component */ "./src/app/component/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'article', component: _component_article_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent\" color-on-scroll=\"100\"\r\n     id=\"sectionsNav\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\" href=\"https://demos.creative-tim.com/material-kit/index.html\">\r\n        NL-INSU </a>\r\n      <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\"-->\r\n              <!--aria-label=\"Toggle navigation\">-->\r\n        <!--<span class=\"sr-only\">Toggle navigation</span>-->\r\n        <!--<span class=\"navbar-toggler-icon\"></span>-->\r\n        <!--<span class=\"navbar-toggler-icon\"></span>-->\r\n        <!--<span class=\"navbar-toggler-icon\"></span>-->\r\n      <!--</button>-->\r\n    </div>\r\n    <!--<div class=\"collapse navbar-collapse\">-->\r\n      <!--<ul class=\"navbar-nav ml-auto\">-->\r\n        <!--<li class=\"nav-item\">-->\r\n          <!--<a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.facebook.com/zorzosi\"-->\r\n             <!--target=\"_blank\" data-original-title=\"Like us on Facebook\">-->\r\n            <!--<i class=\"fa fa-facebook-square\"></i>-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n        <!--<li class=\"nav-item\">-->\r\n          <!--<a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\"-->\r\n             <!--href=\"https://www.instagram.com/zorzoary\" target=\"_blank\"-->\r\n             <!--data-original-title=\"Follow us on Instagram\">-->\r\n            <!--<i class=\"fa fa-instagram\"></i>-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n      <!--</ul>-->\r\n    <!--</div>-->\r\n  </div>\r\n</nav>\r\n<div class=\"page-header header-filter clear-filter purple-filter\" data-parallax=\"true\"\r\n     style=\"background-image: url(&quot;./assets/img/bg2.jpg&quot;);\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 ml-auto mr-auto\">\r\n        <div class=\"brand\">\r\n          <h1 style=\"text-align: center;\">ห้องสมุดประกันวินาศภัย</h1>\r\n          <h3 style=\"text-align: center;\">อยากรู้เกี่ยวกับประกันสามารถเรียนรู้ได้ที่นี่</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'icms-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/article/article.component */ "./src/app/component/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _component_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/article/article.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/article/article.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/article/article.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/article/article.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main main-raised\">\n  <div class=\"section section-basic\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h2>หัวข้อ 1</h2>\n      </div>\n      <div class=\"row\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/article/article.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/article/article.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/component/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/component/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main main-raised\">\n  <div class=\"section section-basic\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h2>บทความ</h2>\n      </div>\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\" *ngFor=\"let article of showArticleList\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-info\">\n                {{article.title}}\n              </div>\n              <div class=\"card-body\">\n                {{article.content}}\n              </div>\n              <div class=\"card-footer footer content-right\">\n                <a href=\"/article/{{article.id}}\">อ่านต่อ>></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer content-right\">\n        <a href=\"/articles\">ดูทั้งหมด>></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"main main-raised\" style=\"margin-top: 50px;\">\n  <div class=\"section section-basic\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h2>การคำนวน</h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-info\">\n              ห้วข้อ 1\n            </div>\n            <div class=\"card-body\">\n              ประกันภัยหมายถึง “สัญญาที่จะจ่ายสินไหมทดแทนสำหรับการสูญเสียบางอย่างที่อาจเกิดขึ้นในอนาคต\n              แลกกับการจ่ายเงินเป็นงวดๆ ประกันภัยออกแบบมาเพื่อปกป้องความมั่นคงทางการเงินของบุคคล บริษัท หรือองค์กรใดๆ\n              ก็ตาม ในกรณีที่เกิดเหตุการณ์ไม่คาดฝัน”\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-info\">\n              ห้วข้อ 2\n            </div>\n            <div class=\"card-body\">\n              ประกันภัยหมายถึง “สัญญาที่จะจ่ายสินไหมทดแทนสำหรับการสูญเสียบางอย่างที่อาจเกิดขึ้นในอนาคต\n              แลกกับการจ่ายเงินเป็นงวดๆ ประกันภัยออกแบบมาเพื่อปกป้องความมั่นคงทางการเงินของบุคคล บริษัท หรือองค์กรใดๆ\n              ก็ตาม ในกรณีที่เกิดเหตุการณ์ไม่คาดฝัน”\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-info\">\n              ห้วข้อ 3\n            </div>\n            <div class=\"card-body\">\n              ประกันภัยหมายถึง “สัญญาที่จะจ่ายสินไหมทดแทนสำหรับการสูญเสียบางอย่างที่อาจเกิดขึ้นในอนาคต\n              แลกกับการจ่ายเงินเป็นงวดๆ ประกันภัยออกแบบมาเพื่อปกป้องความมั่นคงทางการเงินของบุคคล บริษัท หรือองค์กรใดๆ\n              ก็ตาม ในกรณีที่เกิดเหตุการณ์ไม่คาดฝัน”\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/article.service */ "./src/app/service/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(articleService) {
        this.articleService = articleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var articleList = this.articleService.list();
        this.showArticleList = articleList.map(function (article) {
            return {
                id: article.id,
                title: article.title,
                content: article.content
            };
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/article.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/article.service.ts ***!
  \********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleService = /** @class */ (function () {
    function ArticleService() {
        var articleList = [
            {
                id: 1,
                title: "หัวข้อ 1",
                content: []
            },
            {
                id: 2,
                title: "หัวข้อ 2",
                content: []
            },
            {
                id: 3,
                title: "หัวข้อ 3",
                content: []
            }
        ];
        this.get = function (id) {
            return articleList.find(function (article) {
                return article.id === id;
            });
        };
        this.list = function () {
            console.log(articleList);
            return articleList;
        };
    }
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\ZORZO\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map