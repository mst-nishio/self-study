"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recipes_recipes_module_ts"],{

/***/ 3217:
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeItemComponent": () => (/* binding */ RecipeItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_user_myDevelop_self_study_udemy_Ionic_Build_iOS_Android_Web_Apps_with_Ionic_Angular_ionic_angular_course_ionic_angular_course_project_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recipe-item.component.html */ 7572);
/* harmony import */ var _recipe_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-item.component.scss */ 2515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let RecipeItemComponent = class RecipeItemComponent {
    constructor() { }
    ngOnInit() { }
};
RecipeItemComponent.ctorParameters = () => [];
RecipeItemComponent.propDecorators = {
    recipeItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RecipeItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-recipe-item',
        template: _Users_user_myDevelop_self_study_udemy_Ionic_Build_iOS_Android_Web_Apps_with_Ionic_Angular_ionic_angular_course_ionic_angular_course_project_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recipe_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecipeItemComponent);



/***/ }),

/***/ 2385:
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageRoutingModule": () => (/* binding */ RecipesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.page */ 6478);




const routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_0__.RecipesPage
    },
    {
        path: 'recipe-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./recipe-detail/recipe-detail.module */ 7030)).then(m => m.RecipeDetailPageModule)
    }
];
let RecipesPageRoutingModule = class RecipesPageRoutingModule {
};
RecipesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipesPageRoutingModule);



/***/ }),

/***/ 1181:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageModule": () => (/* binding */ RecipesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ 3217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes-routing.module */ 2385);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.page */ 6478);








let RecipesPageModule = class RecipesPageModule {
};
RecipesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _recipes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecipesPageRoutingModule],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_2__.RecipesPage, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_0__.RecipeItemComponent],
    })
], RecipesPageModule);



/***/ }),

/***/ 6478:
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPage": () => (/* binding */ RecipesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_user_myDevelop_self_study_udemy_Ionic_Build_iOS_Android_Web_Apps_with_Ionic_Angular_ionic_angular_course_ionic_angular_course_project_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recipes.page.html */ 501);
/* harmony import */ var _recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page.scss */ 8534);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ 1559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





let RecipesPage = class RecipesPage {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    ngOnInit() {
        this.recipes = this.recipesService.getAllRecipes();
    }
};
RecipesPage.ctorParameters = () => [
    { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService }
];
RecipesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recipes',
        template: _Users_user_myDevelop_self_study_udemy_Ionic_Build_iOS_Android_Web_Apps_with_Ionic_Angular_ionic_angular_course_ionic_angular_course_project_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecipesPage);



/***/ }),

/***/ 7572:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/recipes/recipe-item/recipe-item.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item [routerLink]=\"['/recipes', recipeItem.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label>{{ recipeItem.title }}</ion-label>\n</ion-item>\n");

/***/ }),

/***/ 501:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/recipes/recipes.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item\n      *ngFor=\"let recipe of recipes\"\n      [recipeItem]=\"recipe\"\n    ></app-recipe-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 2515:
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8534:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_recipes_recipes_module_ts.js.map