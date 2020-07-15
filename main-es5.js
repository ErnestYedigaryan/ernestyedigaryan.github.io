(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-1\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n        <a class=\"navbar-brand ml-md-3\" [routerLink]=\"['/']\">    \n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"d-block mx-auto\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line></svg>\n        </a> \n        <!-- <h4 class=\"date\">{{ date | date: 'fullDate' }}</h4> -->\n        <button (click)=\"toggle=!toggle; break;\" class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample01\" aria-controls=\"navbarsExample01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    \n        <div *ngIf=\"toggle\" class=\"navbar-collapse\" id=\"navbarsExample01\" >\n            <ul class=\"navbar-nav mr-auto\">\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li routerLinkActive=\"active\" class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/cars']\">Cars</a>\n            </li>\n            <li routerLinkActive=\"active\" class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n            </li>\n            </ul>\n        </div>\n    </nav>\n    \n    <div>\n      <router-outlet></router-outlet>\n    </div>\n    \n<footer class=\"page-footer font-small bg-dark pt-4\">\n    <div class=\"container text-center text-md-left color\">\n      <div class=\"row text-center text-md-left mt-3 pb-3\">\n        <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">About This Site</h6>\n          <p>This web page is created for selling cars. This is an example of car shop.</p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Links</h6>\n          <p>\n            <a [routerLink]=\"['/']\">Home</a>\n          </p>\n          <p>\n            <a [routerLink]=\"['/cars']\">Car Shop</a>\n          </p>\n          <p>\n            <a  [routerLink]=\"['/about']\">About</a>\n          </p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Useful links</h6>\n          <p>\n            <a href=\"https://www.bmw.com/en/index.html\">BMW</a>\n          </p>\n          <p>\n            <a href=\"https://www.mercedes-benz.com/en/\">Mercedes</a>\n          </p>\n          <p>\n            <a href=\"https://www.porsche.com\">Porsche</a>\n          </p>\n          <p>\n            <a href=\"https://www.lexus.com/\">Lexus</a>\n          </p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h6>\n          <p>\n            <svg height=\"32\" class=\"octicon octicon-home\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z\"></path></svg> YSU, Yerevan, Armenia</p>\n          <p>\n            <svg height=\"32\" class=\"octicon octicon-comment-discussion\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z\"></path></svg> ernestyedigaryan@gmail.com  </p>\n          <p>\n            <svg height=\"32\" class=\"octicon octicon-device-mobile\" viewBox=\"0 0 10 16\" version=\"1.1\" width=\"20\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z\"></path></svg>    +374 99 77 11 49</p>\n          \n        </div>\n      </div>\n      <hr>\n      <div class=\"row d-flex align-items-center\">\n        <div class=\"col-md-7 col-lg-8\">\n          <p class=\"text-center text-md-left\">© 2019 Copyright:\n            <a [routerLink]=\"['/']\">\n              <strong>Car Shop</strong>\n            </a>\n          </p>\n  \n        </div>\n      </div>\n    </div>\n  </footer>\n\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"overlay\"></div>\n    <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\n      <source src=\"../../../assets/video/1.webm\" type=\"video/mp4\">\n    </video>\n    <div class=\"container h-100\">\n      <div class=\"d-flex h-100 text-center align-items-center\">\n        <div class=\"w-100 text-white\">\n          <h1 class=\"display-3\">About Project and Contacts</h1>\n          \n        </div>\n      </div>\n    </div>\n</header>\n<div class=\"container rounded mt-md-3\">\n  <h2>About project</h2>\n  <br>\n  <p>This project helps you to find and buy cars.</p>\n  \n  <p>This website is created in October 2019 for course work and might be helpfull for car lovers.</p>\n  \n  <p>This website is created with Angular and Bootstrap.</p>\n  \n  <p>Angular is a JavaScript-based open-source front-end web framework mainly maintained by Google and \n    by a community of individuals and corporations to address many of the challenges encountered in \n    developing single-page applications.</p>\n  \n  <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. \n    It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, \n    navigation and other interface components.</p>  \n  <br>\n  <h2>Contact</h2>  \n  <br>\n  <p>You can contact us for questions and suggestions.</p>\n  <p><strong>Address.</strong> YSU, Yerevan, Armenia</p>\n  <p><strong>Email.</strong> ernestyedigaryan@gmail.com</p>\n  <p><strong>Number.</strong> +374 99 77 11 49</p>\n</div>\n<br>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/car/car.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/car/car.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col col-md-10 container\" style=\"margin-bottom: 100px\">\n    <div class=\"row justify-content-between\">\n        <table class=\"table\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">\n                  <div class=\"row ml-2 mr-2\">\n                      <button class=\"btn\" [routerLink]=\"['/cars']\">\n                        <svg height=\"32\" class=\"octicon octicon-chevron-left\" viewBox=\"0 0 8 16\" version=\"1.1\" width=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z\"></path></svg> \n                      </button>\n                      <h2 class=\"heading\"> {{car.year}}  {{car.mark}}  {{car.model}} </h2>\n                  </div>\n              </th>\n              <th><h2>{{car.price}}</h2></th>\n            </tr>\n          </thead>\n        </table>\n    </div>\n\n    \n    <div class=\"row justify-content-between\">\n        <div class=\"col col-md-7\">\n            <div class=\"card bg-dark \">\n                <div class=\"m-3\">\n                    <div class=\"img-box\">\n                        <!-- <img src=\"{{car.images[0]}}\"> -->\n                        <ngb-carousel >\n                          <ng-template ngbSlide>\n                            <div class=\"picsum-img-wrapper\">\n                              <img src={{car.images[0]}} class=\"card-img-top\">\n                            </div>\n                          </ng-template>\n                          <ng-template ngbSlide>\n                            <div class=\"picsum-img-wrapper\">\n                              <img src={{car.images[1]}} class=\"card-img-top\">\n                            </div>\n                          </ng-template>\n                          <ng-template ngbSlide>\n                            <div class=\"picsum-img-wrapper\">\n                              <img src={{car.images[2]}} class=\"card-img-top\">\n                            </div>\n                          </ng-template>\n                          <ng-template ngbSlide>\n                            <div class=\"picsum-img-wrapper\">\n                              <img src={{car.images[3]}} class=\"card-img-top\">\n                            </div>\n                          </ng-template>\n                        </ngb-carousel>\n                    </div>\n                    \n                    <div class=\"row col-12 mt-3\">\n                        <div class=\"col-3\">\n                            <img src=\"{{car.images[0]}}\" class=\"card-img-top\">\n                        </div>\n                        <div class=\"col-3\">\n                            <img src=\"{{car.images[1]}}\" class=\"card-img-top\">\n                        </div>\n                        <div class=\"col-3\">\n                            <img src=\"{{car.images[2]}}\" class=\"card-img-top\">\n                        </div>\n                        <div class=\"col-3\">\n                            <img src=\"{{car.images[3]}}\" class=\"card-img-top\">\n                        </div>    \n                    </div>\n                </div> \n            </div>\n            <br>\n            <div class=\"card\">\n                <h5 class=\"card-header\">Options</h5>\n                <div class=\"card-body\">          \n                  <p class=\"card-text\">{{car.options}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-md-5\">\n            <table class=\"table table-hover table-dark\">\n                <tbody>\n                  <tr>\n                    <td scope=\"row\">Place</td>\n                    <td>{{car.place}}</td>\n                    </tr>\n                  <tr>\n                    <td scope=\"row\">Mileage</td>\n                    <td>{{car.milage}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Body Style</td>\n                    <td>{{car.bodyStyle}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Engine</td>\n                    <td>{{car.engine}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Engine Volume</td>\n                    <td>{{car.engineVolume}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Gearbox</td>\n                    <td>{{car.gearbox}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Color</td>\n                    <td>{{car.color}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Interior Color</td>\n                    <td>{{car.interiorColor}}</td>\n                  </tr>\n                  <tr>\n                    <td scope=\"row\">Horsepower</td>\n                    <td>{{car.horsepower}}</td>\n                </tr>\n                </tbody>\n            </table>\n            \n            <br>\n            <div class=\"card alert-info\">\n              <h5 class=\"card-header\">Description</h5>\n              <div class=\"card-body\">          \n                <p class=\"card-text\">{{car.description}}</p>\n              </div>\n          </div>\n        </div>\n    </div>\n    \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cars/cars.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cars/cars.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-sm-8\">\n        <div class=\"alert alert-light\">\n            <button (click)=\"searchCars = !searchCars\" class=\"btn\"><svg height=\"32\" class=\"octicon octicon-search\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z\"></path></svg></button>\n            <form *ngIf=\"searchCars\" class=\"form-group shadow p-3 mb-5 bg-white rounded\">\n                <div  class=\"row justify-content-around\">\n                    <div class=\"block\">\n                        <label class=\"ml-sm-2\">Mark</label>\n                        <input type=\"text\" class=\"form-control col\" [(ngModel)]=\"search\" name=\"search\">\n                        \n                    </div>\n                    <div class=\"block\">\n                        <label class=\"ml-sm-2\">Model</label>\n                        <input type=\"text\" class=\"form-control col\" [(ngModel)]=\"search_two\" name=\"search_two\">\n                    </div>\n                    <div class=\"block\">\n                        <label class=\"ml-sm-2\">Year</label>\n                        <input type=\"text\" class=\"form-control col\" [(ngModel)]=\"search_year\" name=\"search_year\">\n                    </div>\n                </div>\n                <br>\n            </form>\n            <hr>\n            <h2>All Posts</h2>\n            <form class=\"alert alert-secondary bg-white mb-3\" *ngFor=\"let car of carsService.cars | filter:search | filterTwo:search_two | filterYear:search_year \">\n                <div class=\"row\">\n                    <div class=\"row col-md-10\">\n                        <div class=\"col-md-5\">\n                            <img class=\"img-fluid\" src={{car.images[0]}} />\n                        </div>\n                        \n                        <div class=\"col-md-7\">\n                            <div [routerLink]=\"['/cars', car.id]\" class=\"row ml-3\">\n                                <h4> {{car.mark}} {{car.model}} <small> {{car.year}} </small> </h4>\n                            </div>\n                            <br>\n                            <div>\n                               <p class=\"ml-3\">Mileage: <strong> {{car.milage}} </strong> </p>\n                            </div>\n    \n                            <div class=\"\">\n                                <p class=\"ml-3\"> {{ car.options }} </p>\n                            </div>\n\n                            <div class=\"row ml-3\"> \n                                <svg class=\"octicon octicon-location\" viewBox=\"0 0 12 16\" version=\"1.1\" width=\"12\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"></path></svg>    \n                                <p > {{ car.place }} </p>\n                            </div>\n                        </div>    \n                    </div>\n                    \n                    <div class=\"col-sm-2 price\">\n                        <h4> {{ car.price }} </h4>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/container.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/container.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block1 position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n    <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n        <h1 class=\"display-4 font-weight-normal font1\">Website For Cars</h1>\n        <br>\n        <!-- <p class=\"lead font-weight-normal font1\">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p> -->\n        <a class=\"btn btn-secondary btn-lg active\" [routerLink]=\"['/cars']\">Cars for Sale</a>\n    </div>\n    <div class=\"product-device box-shadow d-none d-md-block\"></div>\n    <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\n</div>\n<div class=\"col col-md-12 text-center\">\n    \n    <p class=\"font\"> NEWEST CARS </p>\n</div>\n<div class=\"row\">\n    <div class=\"container\" >\n        <ngb-carousel [showNavigationIndicators]=\"false\">\n            <ng-template ngbSlide>\n            <div class=\"picsum-img-wrapper mt-md-3\">\n                <img [src]=\"images[0]\" class=\"card-img-top\">\n            </div>\n            <div class=\"carousel\">\n                <br>\n                <h3 class=\"ml-md-3\">{{marks[0]}} {{models[0]}}</h3>\n                <p class=\"ml-md-3\"><strong>Release Date: {{years[0]}}</strong></p>\n                \n                <p class=\"heigth\">{{descriptions[0]}}</p>\n            </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper mt-md-3\">\n                    <img [src]=\"images[1]\" class=\"card-img-top\">\n                </div>\n                <div class=\"carousel\">\n                    <br>\n                    <h3 class=\"ml-md-3\">{{marks[1]}} {{models[1]}}</h3>\n                    <p class=\"ml-md-3\"><strong>Release Date: {{years[1]}}</strong></p>\n                    \n                    <p class=\"heigth\">{{descriptions[1]}}</p>\n                </div>\n            </ng-template> \n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper mt-md-3\">\n                    <img [src]=\"images[2]\" class=\"card-img-top\">\n                </div>\n                <div class=\"carousel\">\n                    <br>\n                    <h3 class=\"ml-md-3\">{{marks[2]}} {{models[2]}}</h3>\n                    <p class=\"ml-md-3\"><strong>Release Date: {{years[2]}}</strong></p>\n                    \n                    <p class=\"heigth\">{{descriptions[2]}}</p>\n                </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper mt-md-3\">\n                    <img [src]=\"images[3]\" class=\"card-img-top\">\n                </div>\n                <div class=\"carousel\">\n                    <br>\n                    <h3 class=\"ml-md-3\">{{marks[3]}} {{models[3]}}</h3>\n                    <p class=\"ml-md-3\"><strong>Release Date: {{years[3]}}</strong></p>\n                    \n                    <p class=\"heigth\">{{descriptions[3]}}</p>\n                </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper mt-md-3\">\n                    <img [src]=\"images[4]\" class=\"card-img-top\">\n                </div>\n                <div class=\"carousel\">\n                    <br>\n                    <h3 class=\"ml-md-3\">{{marks[4]}} {{models[4]}}</h3>\n                    <p class=\"ml-md-3\"><strong>Release Date: {{years[4]}}</strong></p>\n                    \n                    <p class=\"heigth\">{{descriptions[4]}}</p>\n                </div>\n            </ng-template>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper mt-md-3\">\n                    <img [src]=\"images[5]\" class=\"card-img-top\">\n                </div>\n                \n                <div class=\"carousel\">\n                    <br>\n                    <h3 class=\"ml-md-3\">{{marks[5]}} {{models[5]}}</h3>\n                    <p class=\"ml-md-3\"><strong>Release Date: {{years[5]}}</strong></p>\n                    \n                    <p class=\"heigth\">{{descriptions[5]}}</p>\n                </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n</div>\n<br>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_car_car_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/car/car.component */ "./src/app/components/car/car.component.ts");
            /* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cars/cars.component */ "./src/app/components/cars/cars.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                { path: '', component: _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"] },
                { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
                { path: 'cars', component: _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_2__["CarsComponent"] },
                { path: 'cars/:id', component: _components_car_car_component__WEBPACK_IMPORTED_MODULE_1__["CarComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sectiond-1 {\n    \n    height: auto;\n}\n\n.date {\n    margin-left: 1100px;\n    font-family: 'Open Sans', sans-serif;\n    margin-top: 6px;    \n}\n\n.color {\n    color: rgb(240, 240, 240);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb25kLTEge1xuICAgIFxuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmRhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDZweDsgICAgXG59XG4uY29sb3Ige1xuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'MyFirstWebPage';
                    this.date = new Date();
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
            /* harmony import */ var _pipes_filter_two_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/filter-two.pipe */ "./src/app/pipes/filter-two.pipe.ts");
            /* harmony import */ var _pipes_filter_year_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/filter-year.pipe */ "./src/app/pipes/filter-year.pipe.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
            /* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cars/cars.component */ "./src/app/components/cars/cars.component.ts");
            /* harmony import */ var _components_car_car_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/car/car.component */ "./src/app/components/car/car.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _components_container_container_component__WEBPACK_IMPORTED_MODULE_10__["ContainerComponent"],
                        _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_11__["CarsComponent"],
                        _components_car_car_component__WEBPACK_IMPORTED_MODULE_12__["CarComponent"],
                        _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
                        _pipes_filter_two_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterTwoPipe"],
                        _pipes_filter_year_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterYearPipe"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cars.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/cars.service.ts ***!
          \*********************************/
        /*! exports provided: CarsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsService", function () { return CarsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarsService = /** @class */ (function () {
                function CarsService() {
                    this.cars = [
                        {
                            id: 11,
                            images: [
                                '../assets/img/bmw/x5/1.jpg',
                                '../assets/img/bmw/x5/2.jpg',
                                '../assets/img/bmw/x5/3.jpg',
                                '../assets/img/bmw/x5/4.jpg'
                            ],
                            description: 'The 2012 BMW X5 is a midsize luxury crossover SUV that seats five. An optional third-row bench adds two more seats, though they are quite small.',
                            mark: 'BMW',
                            model: 'X5',
                            year: '2012',
                            milage: '54000km',
                            price: '$17800',
                            place: 'Russia',
                            horsepower: '242 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.4l',
                            gearbox: 'Automatic',
                            options: 'ABS, EBD, ESP, CD/MP3, DVD, iDrive',
                            color: 'White',
                            interiorColor: 'Black',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 13,
                            images: [
                                '../assets/img/porsche/panamera/1.jpg',
                                '../assets/img/porsche/panamera/2.jpg',
                                '../assets/img/porsche/panamera/3.jpg',
                                '../assets/img/porsche/panamera/4.jpg',
                            ],
                            description: 'Standard features in the 2016 Panamera include dual-zone automatic climate control, Bluetooth, navigation, satellite radio, HD Radio',
                            mark: 'Porsche',
                            model: 'Panamera',
                            year: '2016',
                            milage: '35000km',
                            price: '$54000',
                            place: 'United Kingdom',
                            horsepower: '451 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.8l',
                            gearbox: 'Automatic',
                            options: 'ESP, CD/MP3, Rain Sensor, Climate Control',
                            color: 'Grey',
                            interiorColor: 'Black/White',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 14,
                            images: [
                                '../assets/img/lexus/lx/1.jpg',
                                '../assets/img/lexus/lx/2.jpg',
                                '../assets/img/lexus/lx/3.jpg',
                                '../assets/img/lexus/lx/4.jpg',
                            ],
                            description: 'The 2017 Lexus LX 570 is equipped with a 5.7-liter V8 engine that produces 383 hp and 403 pound-feet of torque.',
                            mark: 'Lexus',
                            model: 'LX 570',
                            year: '2017',
                            milage: '42000km',
                            price: '$105000',
                            place: 'United Arabian Emirates',
                            horsepower: '383   HP',
                            engine: 'Gasoline',
                            engineVolume: '5.7l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, 4x4, ESP',
                            color: 'Silver',
                            interiorColor: 'Beige',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 16,
                            images: [
                                '../assets/img/bmw/x6/1.jpg',
                                '../assets/img/bmw/x6/2.jpg',
                                '../assets/img/bmw/x6/3.jpg',
                                '../assets/img/bmw/x6/4.jpg'
                            ],
                            description: 'The 2016 BMW X6 is a midsize crossover styled to resemble a coupe, although it has four doors and seating for five as standard.',
                            mark: 'BMW',
                            model: 'X6',
                            year: '2016',
                            milage: '94000km',
                            price: '$38400',
                            place: 'Italy',
                            horsepower: '306 HP',
                            engine: 'Diesel',
                            engineVolume: '3.0l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, ESP, CD/MP3, DVD, xDrive',
                            color: 'White',
                            interiorColor: 'Brown',
                            bodyStyle: 'Crossover'
                        },
                        {
                            id: 17,
                            images: [
                                '../assets/img/lexus/rx/1.jpg',
                                '../assets/img/lexus/rx/2.jpg',
                                '../assets/img/lexus/rx/3.jpg',
                                '../assets/img/lexus/rx/4.jpg'
                            ],
                            description: 'The 2011 Lexus RX 350 is powered by a 3.5-liter V6 that produces 275 hp and 257 pound-feet of torque.',
                            mark: 'Lexus',
                            model: 'RX 350',
                            year: '2011',
                            milage: '165000km',
                            price: '$17400',
                            place: 'Russia',
                            horsepower: '275 HP',
                            engine: 'Gasoline',
                            engineVolume: '3.5l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP,Climate Control',
                            color: 'White',
                            interiorColor: 'White',
                            bodyStyle: 'Crossover'
                        },
                        {
                            id: 19,
                            images: [
                                '../assets/img/merc/gls63/1.jpg',
                                '../assets/img/merc/gls63/2.jpg',
                                '../assets/img/merc/gls63/3.jpg',
                                '../assets/img/merc/gls63/4.jpg'
                            ],
                            description: 'Last, but certainly not least, is the GL 63 AMG, which features a 5.5-liter twin-turbo V8 rated at 550 hp and 560 lb-ft of torque. ',
                            mark: 'Mercedes-Benz',
                            model: 'GLS 63',
                            year: '2015',
                            milage: '64000km',
                            price: '$78900',
                            place: 'Spain',
                            horsepower: '550 HP',
                            engine: 'Diesel',
                            engineVolume: '5.5l',
                            gearbox: 'Automatic',
                            options: 'Navigation, Rain Sensor, Climate Control',
                            color: 'White',
                            interiorColor: 'Brown',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 21,
                            images: [
                                '../assets/img/bmw/m550i/1.jpg',
                                '../assets/img/bmw/m550i/2.jpg',
                                '../assets/img/bmw/m550i/3.jpg',
                                '../assets/img/bmw/m550i/4.jpg'
                            ],
                            description: 'The M550i gets BMW twin-turbocharged 4.4-liter V8 engine with 456 horsepower and 480 pound-feet of torque.',
                            mark: 'BMW',
                            model: 'M550i',
                            year: '2017',
                            milage: '37000km',
                            price: '$56100',
                            place: 'Germany',
                            horsepower: '456 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.4l',
                            gearbox: 'SNG',
                            options: 'ABS, iDrive, Climate Control',
                            color: 'Blue',
                            interiorColor: 'Brown',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 22,
                            images: [
                                '../assets/img/lexus/gx/1.jpg',
                                '../assets/img/lexus/gx/2.jpg',
                                '../assets/img/lexus/gx/3.jpg',
                                '../assets/img/lexus/gx/4.jpg',
                            ],
                            description: 'The 2016 Lexus GX 460 is a seven-passenger luxury SUV offered in two main trim levels: Base and Luxury.',
                            mark: 'Lexus',
                            model: 'GX 460',
                            year: '2016',
                            milage: '52000km',
                            price: '$875000',
                            place: 'United States',
                            horsepower: '250 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.6l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, 4x4, ESP, CD/MP3, Navigation',
                            color: 'Grey',
                            interiorColor: 'Beige',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 25,
                            images: [
                                '../assets/img/bmw/m850i/1.jpg',
                                '../assets/img/bmw/m850i/2.jpg',
                                '../assets/img/bmw/m850i/3.jpg',
                                '../assets/img/bmw/m850i/4.jpg'
                            ],
                            description: 'The 8 Series also features a 10.25-inch display with iDrive 7.0 and a 12.3-inch digital instrument cluster. ',
                            mark: 'BMW',
                            model: 'M850i',
                            year: '2018',
                            milage: '5600km',
                            price: '$68000',
                            place: 'Canada',
                            horsepower: '460 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.4l',
                            gearbox: 'SNG',
                            options: 'DVD, Navigation, Rain Sensor, Climate Control',
                            color: 'Red',
                            interiorColor: 'Black',
                            bodyStyle: 'Coupe'
                        },
                        {
                            id: 26,
                            images: [
                                '../assets/img/merc/s63/1.jpg',
                                '../assets/img/merc/s63/2.jpg',
                                '../assets/img/merc/s63/3.jpg',
                                '../assets/img/merc/s63/4.jpg'
                            ],
                            description: 'The S63 AMG coupe comes with a twin-turbocharged, 5.5-liter V-8 making 577 horsepower and 664 pounds-feet of torque.',
                            mark: 'Mercedes-Benz',
                            model: 'S 63',
                            year: '2017',
                            milage: '24000km',
                            price: '$89900',
                            place: 'Belgium',
                            horsepower: '520 HP',
                            engine: 'Gasoline',
                            engineVolume: '6.3l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP, Navigation, Rain Sensor',
                            color: 'White',
                            interiorColor: 'White',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 28,
                            images: [
                                '../assets/img/merc/e400/1.jpg',
                                '../assets/img/merc/e400/2.jpg',
                                '../assets/img/merc/e400/3.jpg',
                                '../assets/img/merc/e400/4.jpg'
                            ],
                            description: 'The 2016 Mercedes-Benz E-Class is available as a midsize sedan, coupe, convertible (Cabriolet) or wagon. ',
                            mark: 'Mercedes-Benz',
                            model: 'E 400',
                            year: '2016',
                            milage: '57000km',
                            price: '$39500',
                            place: 'France',
                            horsepower: '290 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.0l',
                            gearbox: 'Automatic',
                            options: 'ABS,ESP, CD/MP3, Climate Control, Navigation',
                            color: 'Grey',
                            interiorColor: 'Brown',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 29,
                            images: [
                                '../assets/img/lexus/is/1.jpg',
                                '../assets/img/lexus/is/2.jpg',
                                '../assets/img/lexus/is/3.jpg',
                                '../assets/img/lexus/is/4.jpg',
                            ],
                            description: 'The 2015 IS 350 comes equipped with a 306-horsepower, 3.5-liter V-6 engine paired with an eight-speed automatic transmission and rear-wheel drive.',
                            mark: 'Lexus',
                            model: 'IS 300',
                            year: '2015',
                            milage: '84000km',
                            price: '$27900',
                            place: 'United States',
                            horsepower: '306 HP',
                            engine: 'Hybrid',
                            engineVolume: '3.5l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP, Cruise Control',
                            color: 'White',
                            interiorColor: 'Red',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 30,
                            images: [
                                '../assets/img/merc/ml350/1.jpg',
                                '../assets/img/merc/ml350/2.jpg',
                                '../assets/img/merc/ml350/3.jpg',
                                '../assets/img/merc/ml350/4.jpg'
                            ],
                            description: 'The ML350 is available with rear-wheel drive or all-wheel drive (4Matic) and is powered by a 3.5-liter V6 that produces 268 horsepower and 258 pound-feet of torque.',
                            mark: 'Mercedes-Benz',
                            model: 'ML 350',
                            year: '2011',
                            milage: '123400km',
                            price: '$23500',
                            place: 'Portugal',
                            horsepower: '270 HP',
                            engine: 'Gasoline',
                            engineVolume: '3.5l',
                            gearbox: 'Automatic',
                            options: 'ABS,ESP, CD/MP3, DVD, Navigation, Climate Control',
                            color: 'white',
                            interiorColor: 'Beige',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 31,
                            images: [
                                '../assets/img/porsche/cayenneturbo/1.jpg',
                                '../assets/img/porsche/cayenneturbo/2.jpg',
                                '../assets/img/porsche/cayenneturbo/3.jpg',
                                '../assets/img/porsche/cayenneturbo/4.jpg',
                            ],
                            description: 'The S is powered by a twin-turbocharged 4.5 L V8 that produces 521 PS (383 kW; 514 hp) and 720 N⋅m (530 lb⋅ft) of torque.',
                            mark: 'Porsche',
                            model: 'Cayenne Turbo',
                            year: '2017',
                            milage: '46000km',
                            price: '$73000',
                            place: 'Hungary',
                            horsepower: '451 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.8l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, CD/MP3, DVD, Rain Sensor, Climate Control',
                            color: 'White',
                            interiorColor: 'Black',
                            bodyStyle: 'Crossover'
                        },
                        {
                            id: 32,
                            images: [
                                '../assets/img/bmw/630d/1.jpg',
                                '../assets/img/bmw/630d/2.jpg',
                                '../assets/img/bmw/630d/3.jpg',
                                '../assets/img/bmw/630d/4.jpg'
                            ],
                            description: 'All specifications, performance and fuel economy data of BMW 630d Gran Turismo ... 2017 BMW 630d Gran Turismo Detailed Accelerations, Performance Review.',
                            mark: 'BMW',
                            model: '630d',
                            year: '2017',
                            milage: '12000km',
                            price: '$46000',
                            place: 'Canada',
                            horsepower: '270 HP',
                            engine: 'Diesel',
                            engineVolume: '3.0l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP, xDrive, Climate Control',
                            color: 'Burgundy',
                            interiorColor: 'Burgundy',
                            bodyStyle: 'Gran Coupe'
                        },
                        {
                            id: 33,
                            images: [
                                '../assets/img/porsche/911/1.jpg',
                                '../assets/img/porsche/911/2.jpg',
                                '../assets/img/porsche/911/3.jpg',
                                '../assets/img/porsche/911/4.jpg',
                            ],
                            description: 'The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door, 2+2 high performance rear-engined sports car',
                            mark: 'Porsche',
                            model: '911 Carrera',
                            year: '2019',
                            milage: '5000km',
                            price: '$86000',
                            place: 'Ukraine',
                            horsepower: '350 HP',
                            engine: 'Gasoline',
                            engineVolume: '4.8l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP, Rain Sensor, Climate Control',
                            color: 'Blue',
                            interiorColor: 'Black/White',
                            bodyStyle: 'Cabriolet'
                        },
                        {
                            id: 34,
                            images: [
                                '../assets/img/merc/g63/1.jpg',
                                '../assets/img/merc/g63/2.jpg',
                                '../assets/img/merc/g63/3.jpg',
                                '../assets/img/merc/g63/4.jpg'
                            ],
                            description: ' It combines the engine from the G63, a twin-turbo V-8, with 6x6 portal axles, a pick-up version of the G-Class body, and a luxury interior.',
                            mark: 'Mercedes-Benz',
                            model: 'G 63 AMG',
                            year: '2013',
                            milage: '53400km',
                            price: '$123500',
                            place: 'United States',
                            horsepower: '500 HP',
                            engine: 'Diesel',
                            engineVolume: '6.3l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, ESP, CD/MP3, Navigation, 6x6',
                            color: 'white',
                            interiorColor: 'Beige',
                            bodyStyle: 'SUV'
                        },
                        {
                            id: 37,
                            images: [
                                '../assets/img/bmw/745le/1.jpg',
                                '../assets/img/bmw/745le/2.jpg',
                                '../assets/img/bmw/745le/3.jpg',
                                '../assets/img/bmw/745le/4.jpg'
                            ],
                            description: 'The model displayed features the M Sport Package which brings a more aggressive styling at the front, M Sport Brakes and a sportier interior design.',
                            mark: 'BMW',
                            model: '745Le M',
                            year: '2019',
                            milage: '6700km',
                            price: '$120000',
                            place: 'Canada',
                            horsepower: '270 HP',
                            engine: 'Hybrid',
                            engineVolume: '4.5l',
                            gearbox: 'Automatic',
                            options: 'ABS, xDrive, Climate Control',
                            color: 'Silver',
                            interiorColor: 'Burgundy',
                            bodyStyle: 'Sedan'
                        },
                        {
                            id: 38,
                            images: [
                                '../assets/img/porsche/cayennes/1.jpg',
                                '../assets/img/porsche/cayennes/2.jpg',
                                '../assets/img/porsche/cayennes/3.jpg',
                                '../assets/img/porsche/cayennes/4.jpg',
                            ],
                            description: 'The 2010 Porsche Cayenne is on the heavy side (it weighs between 4,762 and 5,191 pounds), but even its base engine is powerful enough to move it with ease.',
                            mark: 'Porsche',
                            model: 'Porsche Cayenne S',
                            year: '2010',
                            milage: '53000km',
                            price: '$22600',
                            place: 'France',
                            horsepower: '350 HP',
                            engine: 'Hybrid',
                            engineVolume: '4.8l',
                            gearbox: 'Automatic',
                            options: 'ABS, TRC, EBD, ESP, CD/MP3, DVD',
                            color: 'White',
                            interiorColor: 'Beige',
                            bodyStyle: 'SUV'
                        }
                    ];
                }
                CarsService.prototype.getById = function (id) {
                    return this.cars.find(function (p) { return p.id === id; });
                };
                return CarsService;
            }());
            CarsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CarsService);
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/about/about.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p {\n    font-size: 20px\n}\nheader {\n    position: relative;\n    background-color: black;\n    height: 75vh;\n    min-height: 25rem;\n    width: 100%;\n    overflow: hidden;\n  }\nheader video {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: 0;\n    transform: translateX(-50%) translateY(-50%);\n  }\nheader .container {\n    position: relative;\n    z-index: 2;\n  }\nheader .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 0.5;\n    z-index: 1;\n  }\n@media (pointer: coarse) and (hover: none) {\n    header {\n      background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\n    }\n    header video {\n      display: none;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBSVYsNENBQTRDO0VBQzlDO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBRUE7SUFDRTtNQUNFLHdHQUF3RztJQUMxRztJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXNpemU6IDIwcHhcbn1cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBtaW4taGVpZ2h0OiAyNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBoZWFkZXIgdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IDA7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgaGVhZGVyIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICBoZWFkZXIgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1hUNU9JbmFFbE13LzE2MDB4OTAwJykgYmxhY2sgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICAgIH1cbiAgICBoZWFkZXIgdmlkZW8ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/about/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/car/car.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/components/car/car.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* img {\n    height: 380px;\n    width: 600px;\n} */\n/* .card-img {\n    width: 135px;\n    height: 90px;\n} */\n.octicon-chevron-left {\n    margin: 6px;\n    margin-right: 20px\n}\n.heading {\n    margin-top: 7px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXIvY2FyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0g7OztHQUdHO0FBQ0g7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyL2Nhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1nIHtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbn0gKi9cbi8qIC5jYXJkLWltZyB7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogOTBweDtcbn0gKi9cbi5vY3RpY29uLWNoZXZyb24tbGVmdCB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4XG59XG4uaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogN3B4XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/car/car.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/car/car.component.ts ***!
          \*************************************************/
        /*! exports provided: CarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function () { return CarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../cars.service */ "./src/app/cars.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarComponent = /** @class */ (function () {
                function CarComponent(route, CarsService) {
                    this.route = route;
                    this.CarsService = CarsService;
                }
                CarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        console.log('Params', params);
                        _this.car = _this.CarsService.getById(+params.id);
                    });
                };
                return CarComponent;
            }());
            CarComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"] }
            ]; };
            CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-car',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/car/car.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car.component.css */ "./src/app/components/car/car.component.css")).default]
                })
            ], CarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/cars/cars.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/cars/cars.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-secondary {\n    \n    margin-bottom: 20px;\n    height: 45px;\n    width: 100px;\n}\n/* .img {\n    min-height: 150px;\n    min-width: 250px;\n} */\n.img {\n    height: 200px;\n    width: 300px;\n    \n    /* border-right: 1px solid  */\n}\n.price {\n    border-left: 1px solid rgba(128, 128, 128, 0.322)\n}\n.block {\n    width: 250px;\n}\n.header {\n    height: 60px;\n    width: 100%;\n    background-color: #fff;\n}\nselect {\n    display: block;\n    width: 100%;\n    padding: 0.4rem;\n    font-size: 1.2rem;\n    border: 1px solid #ccc;\n    margin-bottom: 1rem;\n}\n.font{\n    color: rgb(39, 39, 39)\n}\n.card {\n    border: none;\n}\n.card-img {\n    border-radius: 0;\n}\n.card-img-body {\n    flex: 1;\n    overflow: hidden;\n    position: relative;\n    \n  }\n.card-img {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    \n    \n  }\n.card-body {\n    flex: 2;\n    padding: 0 0 0 1.25rem;\n    \n    \n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJzL2NhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLGFBQWE7SUFDYixZQUFZOztJQUVaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtBQUNKO0FBR0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsa0JBQWtCOztFQUVwQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjs7O0VBRzdCO0FBRUE7SUFDRSxPQUFPO0lBQ1Asc0JBQXNCOzs7RUFHeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnMvY2Fycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zZWNvbmRhcnkge1xuICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbi8qIC5pbWcge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59ICovXG4uaW1nIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBcbiAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAgKi9cbn1cbi5wcmljZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzIyKVxufVxuLmJsb2NrIHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmZvbnR7XG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KVxufVxuXG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY2FyZC1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2FyZC1pbWctYm9keSB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgfVxuICBcbiAgLmNhcmQtaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIFxuICAgIFxuICB9XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgZmxleDogMjtcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICAgIFxuICAgIFxuICB9XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/cars/cars.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/cars/cars.component.ts ***!
          \***************************************************/
        /*! exports provided: CarsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function () { return CarsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cars.service */ "./src/app/cars.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarsComponent = /** @class */ (function () {
                function CarsComponent(carsService) {
                    this.carsService = carsService;
                    this.hover = false;
                    this.searchCars = false;
                    this.search = '';
                    this.search_two = '';
                    this.search_year = '';
                }
                CarsComponent.prototype.ngOnInit = function () {
                };
                return CarsComponent;
            }());
            CarsComponent.ctorParameters = function () { return [
                { type: _cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"] }
            ]; };
            CarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-cars',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cars/cars.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cars.component.css */ "./src/app/components/cars/cars.component.css")).default]
                })
            ], CarsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/container/container.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/container/container.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".font {\n    font-size: 80px\n}\n.block1 {\n    background-image: url('2.jpg');\n}\n.font1 {\n    color: #e0e0e0\n}\n.heigth {\n    height: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSw4QkFBNEM7QUFDaEQ7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250IHtcbiAgICBmb250LXNpemU6IDgwcHhcbn1cbi5ibG9jazEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWcvMi5qcGcpO1xufVxuLmZvbnQxIHtcbiAgICBjb2xvcjogI2UwZTBlMFxufVxuLmhlaWd0aCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/container/container.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/container/container.component.ts ***!
          \*************************************************************/
        /*! exports provided: ContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () { return ContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ContainerComponent = /** @class */ (function () {
                function ContainerComponent(router) {
                    this.router = router;
                    this.images = [
                        '../assets/img/new/1.jpg',
                        '../assets/img/new/2.jpg',
                        '../assets/img/new/3.jpg',
                        '../assets/img/new/4.jpg',
                        '../assets/img/new/5.jpg',
                        '../assets/img/new/6.jpg'
                    ];
                    this.years = [
                        '2020',
                        '2020',
                        '2020',
                        '2020',
                        '2020',
                        '2020',
                    ];
                    this.marks = [
                        'Alpina',
                        'Jeep',
                        'Cadillac',
                        'Porsche',
                        'Maybach',
                        'Porsche'
                    ];
                    this.models = [
                        'BX7',
                        'Wrangler-Unlimited',
                        'Escalade',
                        '911 Carrera',
                        'GLS',
                        'Taycan'
                    ];
                    this.descriptions = [
                        'The Alpina XB7 will likely be the second Alpina model available in the U.S. (alongside the B7 sedan). We have seen multiple spy photos of the upcoming hot SUV, as well as a few renders, but it should show up officially sometime next year.',
                        'Two years following the redesigned 2018 Jeep Wrangler, it will be joined in showrooms and on trails by a new plug-in hybrid model. There are few details about this radical new Wrangler, but plenty of speculation, namely that it’s likely to borrow powertrain components from the Chrysler Pacifica Hybrid. If that’s the case, we can expect about 33 miles of pure electric range. An EcoDiesel model is also in the works. Stay tuned for more details about pricing and availability in the coming months.',
                        'A fully redesigned Escalade is long overdue (current model above), but Cadillac has been making the most of that time. A new 4.0-liter V8 engine is on the way, and a plug-in hybrid model will probably be an option. Rumors abound that Cadillac is abandoning the solid rear axle in the next-gen Escalade, to be replaced with an independent rear suspension or perhaps an air suspension system. In terms of design, the Escalade will probably incorporate some exterior styling cues from the popular Escala concept, with an interior designed to attract BMW and Mercedes cross-shoppers.',
                        'The next generation of the Porsche 911 is here, complete with upgrades in the tech and performance department, above all else. But Porsche is still relatively quiet on the upcoming powertrain lineup. Rumors suggest a plug-in 911 is coming, and like most 911s before it, there will probably be turbos involved.',
                        'The three-row Mercedes GLS is getting a Maybach makeover. Destined to top $200,000, making it the most expensive new car built in the U.S. at Benz’s Alabama facility, the Maybach SUV should show up sometime later this year or early in 2020. Power will come from a twin-turbo V8 pumping out well over 500 horsepower (373 kilowatts).',
                        'The Porsche Taycan has been one of the most talked-about EVs in recent memory. And for good reason. The sleek sedan produces 670 horsepower and is the fastest four-door EV around the Nurburgring (for now). But next year will spawn a high-riding variant dubbed the Taycan Cross Turismo. It likely won’t have the same oomph, but it will be a plenty-powerful electric SUV.'
                    ];
                }
                ContainerComponent.prototype.ngOnInit = function () {
                };
                return ContainerComponent;
            }());
            ContainerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container.component.css */ "./src/app/components/container/container.component.css")).default]
                })
            ], ContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/pipes/filter-two.pipe.ts": 
        /*!******************************************!*\
          !*** ./src/app/pipes/filter-two.pipe.ts ***!
          \******************************************/
        /*! exports provided: FilterTwoPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTwoPipe", function () { return FilterTwoPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterTwoPipe = /** @class */ (function () {
                function FilterTwoPipe() {
                }
                FilterTwoPipe.prototype.transform = function (cars, search_two) {
                    if (search_two === void 0) { search_two = ''; }
                    if (!search_two.trim()) {
                        return cars;
                    }
                    return cars.filter(function (car) {
                        return car.model.toLowerCase().includes(search_two.toLowerCase());
                    });
                };
                return FilterTwoPipe;
            }());
            FilterTwoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'filterTwo'
                })
            ], FilterTwoPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/filter-year.pipe.ts": 
        /*!*******************************************!*\
          !*** ./src/app/pipes/filter-year.pipe.ts ***!
          \*******************************************/
        /*! exports provided: FilterYearPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterYearPipe", function () { return FilterYearPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterYearPipe = /** @class */ (function () {
                function FilterYearPipe() {
                }
                FilterYearPipe.prototype.transform = function (cars, search_year) {
                    if (!search_year.trim()) {
                        return cars;
                    }
                    return cars.filter(function (car) {
                        return car.year.toLowerCase().includes(search_year.toLowerCase());
                    });
                };
                return FilterYearPipe;
            }());
            FilterYearPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'filterYear'
                })
            ], FilterYearPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/filter.pipe.ts": 
        /*!**************************************!*\
          !*** ./src/app/pipes/filter.pipe.ts ***!
          \**************************************/
        /*! exports provided: FilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function () { return FilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterPipe = /** @class */ (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (cars, search) {
                    if (search === void 0) { search = ''; }
                    if (!search.trim()) {
                        return cars;
                    }
                    return cars.filter(function (car) {
                        return car.mark.toLowerCase().includes(search.toLowerCase());
                    });
                };
                return FilterPipe;
            }());
            FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'filter'
                })
            ], FilterPipe);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Ernest\Angular\MyFirstWebPage-master\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map