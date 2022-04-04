(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ "./src/Router.jsx");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _components_common_Copyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/Copyright */ "./src/components/common/Copyright.jsx");
/* harmony import */ var _components_common_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/Sidebar */ "./src/components/common/Sidebar.jsx");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/Header */ "./src/components/common/Header.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();













const App = () => {
  _s();

  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const location = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useLocation"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: location.pathname.includes('login') ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Router__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_common_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        toggleDrawer: toggleDrawer,
        open: open
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_common_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggleDrawer: toggleDrawer,
        open: open
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
        component: "main",
        sx: {
          backgroundColor: '#fff',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          width: 1
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
          maxWidth: false,
          sx: {
            mt: 12,
            mb: 4,
            maxWidth: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Router__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_common_Copyright__WEBPACK_IMPORTED_MODULE_5__["default"], {
            sx: {
              pt: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, undefined)
  }, void 0, false);
};

_s(App, "UkukS3qEDuuJ0wvVHvHSx+nF1cQ=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useLocation"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Router.jsx":
/*!************************!*\
  !*** ./src/Router.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios */ "./src/axios/index.js");
/* harmony import */ var _components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/routes/PrivateRoute */ "./src/components/routes/PrivateRoute.jsx");
/* harmony import */ var _components_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/routes/PublicRoute */ "./src/components/routes/PublicRoute.jsx");
/* harmony import */ var _containers_Application_AddUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Application/AddUpdate */ "./src/containers/Application/AddUpdate.jsx");
/* harmony import */ var _containers_Application_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Application/List */ "./src/containers/Application/List.jsx");
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home.jsx");
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/Login */ "./src/containers/Login.jsx");
/* harmony import */ var _reducks_users_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducks/users/actions */ "./src/reducks/users/actions.js");
/* harmony import */ var _reducks_users_operations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducks/users/operations */ "./src/reducks/users/operations.js");
/* harmony import */ var _requests_auth_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./requests/auth-request */ "./src/requests/auth-request.js");
/* harmony import */ var _containers_Admins_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/Admins/List */ "./src/containers/Admins/List.jsx");
/* harmony import */ var _containers_Profile_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/Profile/List */ "./src/containers/Profile/List.jsx");
/* harmony import */ var _containers_Admins_AddUpdate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/Admins/AddUpdate */ "./src/containers/Admins/AddUpdate.jsx");
/* harmony import */ var _containers_Races_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/Races/List */ "./src/containers/Races/List.jsx");
/* harmony import */ var _containers_Races_AddUpdate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/Races/AddUpdate */ "./src/containers/Races/AddUpdate.jsx");
/* harmony import */ var _containers_Races_Review__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/Races/Review */ "./src/containers/Races/Review.jsx");
/* harmony import */ var _containers_Races_Results__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/Races/Results */ "./src/containers/Races/Results.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/Router.jsx",
    _s = __webpack_require__.$Refresh$.signature();























const Router = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    pathname
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const token = localStorage.getItem(_axios__WEBPACK_IMPORTED_MODULE_3__["LOGIN_USER_TOKEN"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_reducks_users_operations__WEBPACK_IMPORTED_MODULE_11__["fetchUserFromLocalStorage"])());

    if (token) {
      _requests_auth_request__WEBPACK_IMPORTED_MODULE_12__["default"].checkLogin().then(response => {
        dispatch(Object(_reducks_users_actions__WEBPACK_IMPORTED_MODULE_10__["checkLoginAction"])(response));
      });
    } // eslint-disable-next-line

  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      from: "/:url*(/+)",
      to: pathname.slice(0, -1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_5__["PublicRoute"], {
      token: token,
      component: _containers_Login__WEBPACK_IMPORTED_MODULE_9__["default"],
      path: '/login',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Home__WEBPACK_IMPORTED_MODULE_8__["default"],
      path: '/',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Application_List__WEBPACK_IMPORTED_MODULE_7__["default"],
      path: '/applications',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Application_AddUpdate__WEBPACK_IMPORTED_MODULE_6__["default"],
      path: '/applications/:action/:id?',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Races_List__WEBPACK_IMPORTED_MODULE_16__["default"],
      path: '/races',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Races_AddUpdate__WEBPACK_IMPORTED_MODULE_17__["default"],
      path: '/races/:action/:id?',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Races_Results__WEBPACK_IMPORTED_MODULE_19__["default"],
      path: '/races/results:id?',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Races_Review__WEBPACK_IMPORTED_MODULE_18__["default"],
      path: '/races/:action/review/:id?',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Admins_List__WEBPACK_IMPORTED_MODULE_13__["default"],
      path: '/admins',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Admins_AddUpdate__WEBPACK_IMPORTED_MODULE_15__["default"],
      path: '/admins/:action/:id?',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Profile_List__WEBPACK_IMPORTED_MODULE_14__["default"],
      path: '/profile',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["PrivateRoute"], {
      token: token,
      component: _containers_Profile_List__WEBPACK_IMPORTED_MODULE_14__["default"],
      path: '/profile/:action/:id',
      exact: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, undefined);
};

_s(Router, "wx8cHBeuBSiYY3Y1Hf1tVdu/cUY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

_c = Router;
/* harmony default export */ __webpack_exports__["default"] = (Router);

var _c;

__webpack_require__.$Refresh$.register(_c, "Router");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/img/time-trial.png":
/*!***************************************!*\
  !*** ./src/assets/img/time-trial.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABmCAYAAAAecWWKAAAABHNCSVQICAgIfAhkiAAAHP9JREFUeF7tXQl4VEXyr35vZnIgART1z+WtoOC6iwKyuyqXohwGcAkJEAETgsoCOVhAlDAJyp0D8SIHKhASwsoZYGEFAfdAQdcLlVUUl0MRRRKuXO/1/9eTmTiZzEzemzPh431fviQzr4/qX1d1dVV1NaNG/Aw2806kUB+VURd0sxN+blCJIiSi5vi7Ej8/cvHD6Ucm0TFSaU8LmXYVmtlPjZisgHSNBaQVHY0MM/OuFZzGEaehAKydjqI1rzLiAP4j/P47GSivZBb7Sncdl0CBRgEs55xFptFQVaXnVE6/s40rY/QD/t6JTu4HR34hy3SYyXTGUEln8bnpAtE1Ifipxk+VQp3wXl+UuQ8TIsyCMQMPc9rAjbRwayp77xLASzMJQQd2gJnfj+F/EQDcZQXjFERvQQijNzeY2UeaKbG+OOlFHvLNT/R7iOgRIG4MQA61cvKeEIn+vN7MPtNbZ1N8P2jAjjLziDOcFmHgxwNUBu4qA7e+cMvVtGTpZFbhi8GMNfNrTqs0GXU9jXZaQTxXyJyeu1umTLOZYbm+dJ+gAIt1tH2FSlsx2HcCUAUDnn8lo1krzexHfwz1cDO/4oJKC9HeU1apsNco0RhIhCP+aK8x1BlwYCPT+Z1V1bQVXNoeoB40GChmYyr71NVgDDXz2zAJItHR30G8tsXvtvgdsTWd/Z/eARyYyvuDTZczTm0xmX4KNdCAdalsv956msL7AQV2UCrvC1DWgXMiAOo7FeE09O0ZrNRxoB4187ZQpP6Md4VmLLY5dR6UPb8lnV3hyQAPnMdb0UUqRL39Uc85DMCQknS205O6GnOZgAELcWi6qNInWEc7ShKtDmM0bq2Zib1o7WNdd6eDm5Nsmq3gLABQAgVrp2Sko5zRiTCFvkfZc54OrFCwDv9Em9HOg6j/gkmi3hDL73taX2MsFzBgBfHDXuBtKsspZnM6ZUFbAkP++oCbRylES/DpVWIvim+KSaJXmt1B/1wbxfCVb5/hmTzswi9Y54l6oT1h4Oi5xcy+8W0rwastoMA6I9Ns5tIBleaDk/9i/X4XyTR9q5kd8PewxC7izU6fpb9BOvwR4H7cTKLujlLE333wV/26gR2Qymd70hkoO2mO5Z5YwJufPEdF4JoBELeV4NaJJXNYnif1e1rG0ofz9CHAvQV9WIC1e4andTWmcmzALJDk5AGRX4HI2xy/cvV+Q0RtnYMa7Z7hxVy+8BltsSoxp/DtsJI09o+G6vHH99h+3QvNW7TNQgx076WgKQeNYx+ZzbNgIkiECDwpG6nn5lnsW3+AprVObIXmY5JNR3/2QLr00lqusb6nG1hfEAJFaRzW1OXCEiQZqHdJKvu33noHzeG3ygoZr21DX+VMYFV6yzu+LzTyX1Q6DLWtNWzSgzebWYm3dQazvE+AdbXuOltXY8y8dRkG0LqXHQtx/6YnAwAOO4I6rqcQumHrc+w7T+pwLIMJNwUTLhvLwl706wFf1BmsOuoAO9DM+8kqNESNz6Z0Zhavulp3HddV8e6g2XwJjA+T4VorgaI0WGNT9V7zB7BW0+NxMemMMnXeaGafe9q/YJerAywGfQEGfZrWTtmA08qxmDg3wdDwBeqXDRL9xpuB8wewlkk6m7+MPj4Np272tjSWpHUsGtt79TiWq/QHrZ10JmrdlQUYrwhDPERdPkRdvNZ2nL3nN2DTeQ+qon1Y/w+Dvlu86WMwy/pkjdVCgHCmD5hNx4QB3iDTXZvM7BMt5Vy94y9ghcHkfZVOCiVKMtFtTTUCQzewUDD+6mqww7rQCFfmvwFWTgC3fgtuvckbUEVZfwFrrXs1JEuMxCgBDoJcb/sajPK6gXVnoGjfnkyuth6YEHOhcT4DYLMAbLK3xPoT2MGz+FQYpxfBWfEijCZTvO1rMMrrBzaVP+aqo1vSaJ2jcd/2LhSsHcKbIjMasDmdbfOWWL8Cm8ofUTh8xkS7oCD29bavwSivG1hPOwkgPoN466wYqcv2VHbQ03ps5fwJrDB+qJX036asQAUS2NMi7oiF05VbnmG/NGZgH5nLr2YX4cpjdArLxjXe9jUY5QMC7FgzD/1RoYsYqHIMlCU01JvH6m77FhPlal9anmx9sjjiT1G5MHliy2OJcoyNn3oj50rHasZvhmZ/k8LYdTJJLVXOW8J93IIzFo7fWJrhO+a8GvF55xAUcFIidhJRlyeZqnylGgwHTaYrDhYsNZd5Q7+Wsj4FVoSd8At0GgD+AgCvtHXAl8AOnsNvVKtoowiEE9EUt7SmmzyNauw3n7cwnaczAPAMAGxl66+I9jivUIVwJYIOhC4TRcclb+fEH3IyqLBlsHOIpTpPxGXoGAYAi2BIaoZ3ZRcgHMHAv0sS2y0Z+O7Vr2b53MHvU2CxBzS8r2B7z6gaA2W0JwproteiGEc++lSrVCyiLDDoXyKkJRJxwv/VMoOdvTN0Dr+9opI+R3+/QH/vsL0zdC6/quIi/YSJ8/O2dNZafD4qLmkMOK8TZ/I3Rl59WJKM31XJ8ukhvbuWRUVF1YvwMJvN0uEfzrVWVeVaBLS3YaqM2C2lMzi6M5TI32KSCOCtD/tYlWhFCx5akJc396Sn9NiX8ymwomJov+fR8fBmMjW3j0vyVnnCNmsyAMhA3bBGUgnO6IwqMDOvRJoIrsMW7G1Mkp3gzH62gUEw3S3VCn3lqz23I1AA3fDVsbJ7FCY9oHLlIXB8LxhwQJYIxWXbJcbfDGnXYtMbZnO5pyD7HFgbgDhW0XVbKvuPrWOebncskf0/02swdY4VdSE2aW43xCD7IuDb5j6EIWIlDBGP2wH7MIDd5gi4p4PcULnHn0xqV6nIo5mqPo4zKTWSg7FSA2cFkmxYsDJnwf8aqsPxe98DO4u/hfVlmIEoZtMcVmRr0Gag0GNcF8FvFRW0HutpDxFNiM4KN99avUS6eh+T0GJhwvdTsF990fYeDBSJkK1ZIphuaxqb6Kv2tNQTOyHpniqVjYFkigYXt8bkEr7m1ytDpLnrXs7Q7J70B7CpADYNHcoFCAm1HKvTpChMkLwaBo+a4O4jCFkZsj6VfaxlcLS8k7CMG48fp1MAtoWjZg3psgkDOxiDM2HLHJajpT5fvzNp0oshP5Z/G0eqiMHiHYSGzri0KEJuPi8nx4zzaO4f3wObzu/jVbRXnJQrSUPkvjXMVI8TAOvpWBDyGgYXZ7Nod4RMw3195hWK2EOKQtvRz48wAWtP+CWYefhxFYoTTuw1BicA1mPTF8dL4+FKNAPKq9Hf/6mSNKU4J2ODO2h9DqzYKuCcjNCAmyHA+/f2YS9a3HaDzLyXqtA71vX0JaynSVhPoVj69gFXlmDiDMQAzAZXpttqj0zlQ6s4rcPEOgpN+Trftup5bSOfmtFKraqaw7n6JGoR26ktRmZ8siBv4TFntfocWNHIwNl8JZSd0Y7hnFod7ZgAQvy9B07K93woXJccnM4fUKpoN/pXagqlm9fPZD/b3kbbb2BSjoFNOwM27an+aN+bOkcnJHatUqTlEM93YfJNW5OXtShgwNrEnFgb27ej2+w9Pr4KjfFmcMCt74Fbu6N/M8GV82x1WY6YqCRiqVr5wmfsTR/dlR0RlzwcwBYzSZ5RlLt4QcCAFc7q/TinI4z+4IrJ4Lyltsbtg9mwcRuDuKcV/hoAZ/U+MotPg5hagH4dD29Jt65NhlXY+kDSvABJM1McGEOf+wSyX3raikpIGcIUdT22frOKcrOeDxiwoqFHU/lAGExLhCH92mZ08/LpTKQXsDwDZ/EnsEbkexN+qmcgbO9CkgxCTNdG8T98rZH2IabihB+sWiJfRRiOV/ZozEHj0QmJA7nCSiRJSi/MzXB6MsMva6xtICHydkPkPQBT0fOb0tgsezACHTA+NJ3fVVEN+yyn5phsM8CRdUQYgthyoXnGY7KtgXiO9mTiBKrMiISkh2Cj2s4lPq84N3tmQDlWNDbEzLtXKvSeMC5AQ/6tffxQII94CE5VVFptAVWiVVvSWKz9YIh+Vqn0L3ymGo10+4ZZ7HCgQPKknaiE5N5M4bsYyYuL8hfbDrPVqcqvHCtagsVpBeyxsTDbHSoPpx72B50DcSgLWu50dGMu1ntJgHrTVRRv7w0SIhig7heGEPRxEUyLmsNvPQHFF2WGJ6T8UVLUd6GjLCnMz0oMOMeKBsWG/wQOPIk0PxCB28O70ED7gDeLosVpAZQW29ZiF/xC07aksg+8GQTLlqaaFgrtF+2KRCIzHcWvxZ2o0l68003YhbtJ9LA/9sze0OGsbGzC1B6VirLPQNIrBfkZTk2efudY0bHI53mHqkrajwG81pWtGArVaLjFsm0Hn+EyW4PBflXPwWdhJvzhOPWCNWOKMD6ItoX2C6foBJxa2OI4SDZbMd75OlyiHvBGnfY1CP6or2Yvyz5gxHKL8jNrzbb2bQUEWItITuc91WpYlISZUCKnFiXh+A69QNOhMSe6S1XQKpROqOdJPitTGxga2oozPABHOMEHWGy/NYCWop4FzVpStv2WRnxnOc1+hvKFAwDvlZmMdO/6WUycUGgSz6iEpDvhffoEERtvFOVnjwuKKLZvNNLM/4QtxUoMaKgQfeCSKGdcYkkuwmkS3hviLLmI29HHyXRw/TpTGL1sb1GylRn0PG/HK5GtjdM9AlRse4Zi27OrSSBq7eRjCSmdDIr6BZSGgsK8jNFBB1Z0wKIpq7QBnNtGiEBshSLdneER6YDKFRoCxQZRBzXpgFCN+FHw9/f47AT+PoG/96sm2uDu5J0laL2a1tvaBqc+2pQ41QbgmIS/3FyuVH/NmFRclJcxolEAKzphNQYIcIXSUom19ZXQEHreGYf5gpOsXJqGusaCU2EGprcpnKJ8ES3pi/7prSM2Yfp1lUrldwigW1+clzms0QArOiI00lOclgDceMtWRIhFaMdtZMrOMbMG/Y1aBsOyZl+kGah/ilizxSTCT/Y9jJ5tCtqvKxqhPLWB8nQCLtGSorxMp0dRA6Y8iU4mJSWFZWVl1dpmxWcQtV2Q/2G+nRZ7Ch9vgCa78UqJdr5hZrrifkRoaul56g/T4RDscQaj3pYivZDQsiHOn70UUv7EJKS0VhX1lIiPWpOX+XDQOFY42UeOTxmFgZ4Pr8REuJos9lr7R2RBRU4Kke+wh+1zcNd5zLy/YR3dAyXnEMp/HU50plUbOhtSQdKxc3QF0tleCfParQCyI8r1xft9hXJmV8dO5C2e7u2+WIuECNQ7CQnTW5QqlWcwWXcV52U5PYLid461bqaXgGjELbFqA1efLcjPXuhqEIal824XqykWHfuTUHI8GSxMiO/ws8aIILVLMY1tQoI5vFSBXGLsXXDs/QHlWEvkXTVDJhY+Cg1jnGlblSwlv5WT8aVWsETcb3Ul9VYkZElFqj5w7o2oJwLlRep4GKvoLMxqpZgA36CBQ/j9kcFE7zR2W69W+l29l5CwzFiqfAl9ge3DGtszIMCK2VSmnoFhmk2DSAxH419Ce0tek5vh9Qk7bwfkUikvlrbo+GQV7PIBOPYe3cDGTp3aDJK8P1IKS9hv/nNVTvb3rgZHNDY6PvnxasZegKrSDoD+AkDTbm/X/GUEZPk8ZulSAclTOkbEJyMslX8OfcWSmd3xcbnGWvdKe1DgBlEIoq6KOFuJgynzVuVnfW1fUdSElPvhRsoEoHdb3iP2ajPO0/Lzs5qE7dXTwQ1mOQCLLSE/AmBrj6bY98clsNFxSSuwpsXCuvEyUD2Kg2Qi/bqI2rMcQ8Bv4b/EToIeAbfWJCRh0uYQxqeuyM30+DxNMAerKbUNfEqBw49YY2/VxbGQ4eIEWEsUtJyaEwt2GT8UC3CRT5jXybEIsbvfSOqMlXnZTcrm2pSAdOwrgMXdQuwcvDsWiapZFANYYYMlACvssnWekXFJ3WGoRaAa41h7/7NqWabPIvSb8mAHsu+IVIS+o6pr8rOd3k3kWhS7ATaQBFxuy/kIAFgc1OKha/KznJ64vwxsE505OIh9GGdsrwSwtQe27Um5DGwTBTYmLulLpENojzXW6aUXl4FtosBCFIsrbW5bk59pSaXgE+WpiY7FJdVtAPsh1tjfQhSLk/CXgb1U0MWu5T3YD7o/1r+nwVkOjMuiuIkiDWD/IQxDYR1ahDnLVXEZ2CYK7Ij4JBHx2avZVcaI5QsX1p6LspFzGdgmCmxUfOIOxtmDJtl0vbPkI26BhfmQIQquNt1AEx2DS7LbMfGJz6ucPQuz4seSzPoV5mTUub7cjRMg+Qg2wNej4FHG1Hw5rGVWIFLFXZIo+IGo4uJief2O995UuYpABvaZySj1Xfna4tprWl0CO2p88iCkdhURhI9ArTaJ+3EQYzO6ODfrbT/083KVHoyAyP725bGzy5GXYozILhdmMvR545VF4vpz4XVz/4x7OrlDZQWbgeSQCViskbCExxbmZhU3VO7y94EZgRpwy3KgIcdhQ3soLMzYZ/lLC0UAvbZndFzSw9XERNp42cgMXVfmLWwyZ120Udh037JEgSYkvaqqbAI8bl/LZOitGVhBNhJFjkSMSwEK/bsoP+v3zoZi5FNJN6mVUiQxfg/WaLj8mNXtxzGL2AlEYRyQTOpGf2T8DBY0jYFmAW7M+KlLIZYnQg7v1gWsGLiY+JS/Y8HuZ5T53YiBglkLK7AlbnhqtApnO8T1b+oMMG5VtvzPqa6xmtEnEknzV+cuLnKVbj5YQGlptzHSbI1evAhgD+oGFhaPESCqCByZvSYvO2n4hKk9cbp6qYh3woAgUpTt5UzaoMj87eYt5KO2zfMT06Y1P1uqdJAV1o9xFVH6XMTDyiLSTpWlSWuXLdZ9v50WAPzxjqBZVtSXMA5dGxPNj49Pxn32/BCU3L/qBvbpp81X/FxRehanJv4BUJDsir0itGZw3UYjGZ7RuvbGxk+7vYqq52FwIiGucaW3OhHRAAG9O9YT0EfEJeIiKMSBNUKao8cnxnIV6ZUYe043sGIwLGEZjF8hxCsqKJMlNqogN9Oj2xst2yqVFyBwLsJdFhRPQPB1majxiXOZyp5prDTD+Z4PveYJSMD7PAQ2MQNcJu7OOWJixgFaudTVQAvureRV4jqUG8AJ4xsj59ZwquVypUZL84j4RIQFS21vbx+Bewp0PpY1tVqF1sXLkaTxXm9BtTVvEc28ah+smKGqQerVmNbcmjVV2QMJdbGx0jwqflr7al51FDuPnYiq6KcL2BqVOuWAUBoMEhvsSvzGxif2qWLSUAyEOH5wLaxX5xFIjhyFfHt4eOia15fOE0cl6z1CLFerfLNQqIpyM3AoGid2gvxooXncpGeuvnChfAT62x+03gBaRb7/k9BODxi5ut5dWK6vaI4enzyWq/x1DFlqUV72HF3AYqsTg63OaqEoISx1iOOYi6QXyAG8DGjUHhSyHPUgHi6Siljex/YHhC/o1K7FXFhNRJqeOg+0buSH4JHIrzAS+RUKg4yr2N65pNli9TleOrMm1tq6nRMJo4ldAA2/Bpkx9i+DxJ8syMkS4Sz1Hl/QjDr+jTbvNRnlO2Ez/kwXsPABfgwCOmNdvdNRBNcoQVQkbqcAmO+TpKa3acZ22Q46j5zwl1u5qo7GxBCDEIJzPX8Lbx8x1NFJbF1vPxV7MVfnUgIJtiuax5rNoReOla1nnD8MIHFHj7QAXpaC1csWiXyMCLDH4TQ60xtG2FQR6YB3zssSRTuTct7SPGJ8SjeEGL9vf15WM7DCuqJU0mHsU98pzM+skxl0ZHzK3TBO7AWnyipjMzu3i8h2xo2C4NFPTetYXVWNbRK/F2JjDcRGvbyFMXHJu7DP7S2b6OZgWqjc0Rwdn1iElUmI330Go2HsqlcXHnI24QRXHzxelihxPheDjX2+dP/qvIx6ycm8oTkmLqUQ4x9tlFjkqtzMTTWCUeMTHZeSBB9AJmPylKK8xbUXI9Qc6UtBR/nvJCYnFeYtzm6oSnEiu0ytFGlvr0MPhjiecI+OnzoZt1ItYSQlF+VnZDVUn7++d0UzuDgSUmcDlpT/RUim3+TkLChtqA8x8VMTcRULaGH/gY8bh9fq6g+e0mzNq7gTDoD/duzQ4g4bQ2kHNj4ZN17wGGisndcuy6i9uzwqLklcirBJaGNYEx/UqvCMjp/Rq4pX7IKi9KHjGc/hE1LugOZ9kElsB1eldQ0Nmj++f6x/97x1O/YhJ1V9mnHS7QAsbV2NLKTPqrz5u7W0b1HCYI7FUtXXmeJZSzOWMVzBgwziGh5JkRFFMRt1X42zNr2Kl2XstZXSDKyrGJvouMTXsUUZi8u/+hTnZFpy+Wt9IH72CNNiVah0g/3VI8L8eP7nqjKRlx+c0UFrfb58r20EhZ84i6tGHeKKhk1Mud5Yrh4RplMsSQ/oafPXrKX1M6rV0qynQuu7ONo63TH9gw5gk7GG8LYQmyJNQO0DK9R+iKSundpHhOg94Azxkw6RO4vJfFBRTnadXIeYSGehMp+Wmew0g3Y9+rnaBTN3Mo59lkAKWNYZb55hD3Zf/taOfZBMdWm2JYHGkjQHS1KqnjbEDVnwnVZgCfoQgd7dHMuOiEsSDpNzSAlfJ7ezuzbEkiWiXCD1RHKV2scHwCZ9i4GMQMVX6SFSvBszPnESfIgv4vKlsQX5WW/WmTAAFh0+4dhhV23YLEPI0/gU0qm/prcvzt6HyK03mcUdd3BdvoGAg8mFudm1KfG1toc6f4YYL0Og9431gNVJs51k2w2G6+0hsM7DHf3Bse467GoAYThJU1U11V4z1DrYLieLkxBPf3GsJzTbrcurYVcQSVz0cyw2wAUQdSMdlSd/rLHuOuwahOR/ghN6hhipw4rXso57C6oo74xmf62xntDsTpPWLIpdqf7+0Iqx4Z6CDXe21u1OfPzMa89RuTio/QFmbndfgGoB1sUWz6YV42rQ3mtzs/Zoaa8hrdiT7Y67va9mYF1t1v2xj9W7WY8en/Qckj7NgeL0LPaIc7UMtJZ3XNHsj32sXpobslZpBlYMhCvzmi8tTw112BEQYYAvv1BxGNsmBbE3N/s6U40rmmstT4j/MpiM47yxPOml2bpMuLWp6wLWnUHcV7ZivQbx2uw2bm6N0sKdLpUyF06AhmzFIiHo9+d5Hy22Yt00W+/dgTHoQ9y7g4Ta9b1guoBtyIXlrXfH5sJy12F7AGxroIiEbxvBuztmVvUGUFtZdzT7wrujl2ab3xrGmzBFlh9w5bfWBawgVouj3ZU/FkdFdoSGhhU588dq7bBtwOF/fAL+xxwQcMbI5G4r8xZ/6wsgndXRkKPdshyUX8RFvtJDevyxemnWE2miG1jLWhvEMBGL9eZ46UIoS0kw652FsXTgqrysd/0Fqq3eYNJsWVMhfpEsf7WIDUPe5fmFeVnPuKPZI2BFhcEI7Ioan/yYpPJ5IO5WOB2+CZH4o2/mZh30N6i2+oNBc83FDhw3ZvIhlnSGTJ6IGyhF7JXbx2Ngf+VcH4RiIgungfO8kDBT+nWtw38Qriextj0xeWbrcxWVHaEaDIZDe4jICIf1FyZkttIUYkpZ8fK82ntfGyLUV9/7LPwUuZtBVzEm59yI0Bu/Xrp0coXoowjvPVt5oUM1q+yncDYE7whHgyz0Dqyrk4pyMy2pDht6vALWtuZqCZ4WHT6lnL3OScD4pwCsC+qy9MUCHOe/4L8IrFfGXwkQsce01SDzVFchJg0R66vvtQaMu6JZgAT3HZwyv56aECGtkEKC+DpOFnz0KSb9/FV5mYVaXaKWcfQFsd4cd+jYvvlbn58o+4Osqkj5zroiZOYazNLWnHFciMRO4AKIo+jlTjksYltjOp/rDc3iWEvUk1NvN6hKX2yH7sMtJu0AxDVYYvAnidTBJ5DS8IDRwDd4GkHiE2DtJ4fdAaVumJVI/V7nUNb3OJS1/xI+lNVoaP5/PV45/swsNwkAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: LOGIN_USER_TOKEN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_TOKEN", function() { return LOGIN_USER_TOKEN; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _responses_base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../responses/base-response */ "./src/responses/base-response.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const LOGIN_USER_TOKEN = 'LOGIN_USER_TOKEN';
var baseURL;

if (Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_ENVIRONMENT && Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_ENVIRONMENT === 'PRODUCTION') {
  baseURL = Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_API_BASE_URL;
} else {
  baseURL = 'http://127.0.0.1:8000';
}

const http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
http.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.getItem(LOGIN_USER_TOKEN);
  return config;
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem(LOGIN_USER_TOKEN);
  }

  return Promise.reject(error);
}); // response interceptor

http.interceptors.response.use(httpResponse => {
  const response = new _responses_base_response__WEBPACK_IMPORTED_MODULE_2__["default"]({
    data: httpResponse.data,
    statusCode: httpResponse.status
  });
  return Promise.resolve(response.getData());
}, error => {
  const response = new _responses_base_response__WEBPACK_IMPORTED_MODULE_2__["default"]({
    data: error.response.data,
    statusCode: error.response.status
  });

  if (response.statusUnprocessableEntity()) {
    return Promise.reject(response.getData());
  } else if (response.statusUnauthorize()) {
    localStorage.removeItem(LOGIN_USER_TOKEN);
    ___WEBPACK_IMPORTED_MODULE_1__["history"].push('/login');
    return Promise.reject(response.getData());
  } else if (response.statusForbidden()) {
    localStorage.removeItem(LOGIN_USER_TOKEN);
    ___WEBPACK_IMPORTED_MODULE_1__["history"].push('/login');
    return Promise.reject(response.getData());
  } else if (response.statusNotFound()) {
    return Promise.reject(response.getData());
  } else if (response.statusInternalServerError()) {
    return Promise.reject(response.getData());
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (http);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/admins/AdminsFilter.jsx":
/*!************************************************!*\
  !*** ./src/components/admins/AdminsFilter.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _form_CustomButton1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/CustomButton1 */ "./src/components/form/CustomButton1.jsx");
/* harmony import */ var _form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/admins/AdminsFilter.jsx",
    _s = __webpack_require__.$Refresh$.signature();










const AdminsFilter = () => {
  _s();

  const {
    clearSearch,
    onChangeHandler,
    queries,
    submitSearch,
    isLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["FormContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    component: "form",
    sx: {
      p: 4,
      width: '100%'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "user_name",
          label: "Name",
          value: queries.user_name,
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        sx: {
          mt: 2
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
          spacing: 2,
          direction: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: submitSearch,
            loading: isLoading,
            startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 36
            }, undefined),
            variant: "contained",
            text: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_form_CustomButton1__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: clearSearch,
            text: "Clear",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

_s(AdminsFilter, "YrK+F2b+sIpaJl1q4urq9LnMG28=");

_c = AdminsFilter;
/* harmony default export */ __webpack_exports__["default"] = (AdminsFilter);

var _c;

__webpack_require__.$Refresh$.register(_c, "AdminsFilter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/admins/AdminsTable.jsx":
/*!***********************************************!*\
  !*** ./src/components/admins/AdminsTable.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminsTable; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/index.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _common_StyledTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/StyledTable */ "./src/components/common/StyledTable.jsx");
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _form_CustomPagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../form/CustomPagination */ "./src/components/form/CustomPagination.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/admins/AdminsTable.jsx",
    _s = __webpack_require__.$Refresh$.signature();



















function AdminsTable(props) {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_15__["getUser"])(selector);
  const {
    admins,
    page,
    handlePageChange,
    isLoading
  } = props;
  const totalPage = admins ? admins.total_pages : 0;
  const perPage = admins ? admins.per_page : 0;
  const count = admins ? admins.count : 0;
  const hasAdmins = admins && admins.results && !!admins.results.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      sx: {
        display: 'flex',
        margin: '18px',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this) : hasAdmins ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        mt: 3
      },
      component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "aria-label": "customized table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              children: "No."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 37
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: admins.results.map((user, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableRow"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              component: "th",
              scope: "row",
              children: perPage * (page - 1) + (1 + index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: user.user_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["getValueOption"])(_constants__WEBPACK_IMPORTED_MODULE_10__["adminRoleOptions"], user.role)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 37
            }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
                text: "Edit",
                variant: "outlined",
                onClick: () => history.push(`/admins/edit/${user.id}`, {
                  id: user.id
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 41
            }, this) : null]
          }, user.id, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_form_CustomPagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
        page: page,
        handlePageChange: handlePageChange,
        totalPage: totalPage,
        count: count,
        perPage: perPage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("h3", {
      children: "NO DATA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(AdminsTable, "TyHvpVpbXUJhwxw3dI7LAlod+CQ=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = AdminsTable;

var _c;

__webpack_require__.$Refresh$.register(_c, "AdminsTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/applications/ApplicationFilter.jsx":
/*!***********************************************************!*\
  !*** ./src/components/applications/ApplicationFilter.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _form_CustomDateRangePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/CustomDateRangePicker */ "./src/components/form/CustomDateRangePicker.jsx");
/* harmony import */ var _form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/CustomSearchSelect */ "./src/components/form/CustomSearchSelect.jsx");
/* harmony import */ var _form_CustomSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/CustomSelect */ "./src/components/form/CustomSelect.jsx");
/* harmony import */ var _form_CustomTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/applications/ApplicationFilter.jsx",
    _s = __webpack_require__.$Refresh$.signature();














const ApplicationFilter = () => {
  _s();

  const {
    clearSearch,
    isLoading,
    onChangeDateRange,
    onChangeHandler,
    onChangeSearchSelect,
    queries,
    queryDateRange,
    querySelect,
    submitSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_4__["FormContext"]); // setTrackOptions , setUserOptions

  const [trackOptions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const [userOptions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    component: "form",
    sx: {
      p: 4,
      width: '100%'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "track name",
          label: "track_name",
          availableOptions: trackOptions,
          selectedValue: querySelect.student,
          onChange: onChangeSearchSelect,
          onTextChange: e => {
            /*handle change*/
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "user",
          label: "Applied Admin",
          availableOptions: userOptions,
          selectedValue: querySelect.user,
          onChange: onChangeSearchSelect,
          onTextChange: null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "status",
          label: "Status",
          selectedValue: queries.status,
          options: _constants__WEBPACK_IMPORTED_MODULE_3__["statusOptions"],
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "created_by",
          label: "User",
          selectedValue: queries.applied_by,
          options: userOptions,
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomTextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "race_description",
          label: "race Description Keyword",
          value: queries.race_description,
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomDateRangePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "created_at",
          startText: "Created Date From",
          endText: "Created Date To",
          value: [queryDateRange.start_date, queryDateRange.end_date],
          onChange: onChangeDateRange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      sx: {
        mt: 2
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        spacing: 2,
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClick: submitSearch,
          loading: isLoading,
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 36
          }, undefined),
          variant: "contained",
          text: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: clearSearch,
          text: "Clear",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

_s(ApplicationFilter, "VvYf7kkUI65FtKYmOcgwCRxAz8w=");

_c = ApplicationFilter;
/* harmony default export */ __webpack_exports__["default"] = (ApplicationFilter);

var _c;

__webpack_require__.$Refresh$.register(_c, "ApplicationFilter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/applications/ApplicationTable.jsx":
/*!**********************************************************!*\
  !*** ./src/components/applications/ApplicationTable.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationTable; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/index.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _common_StyledTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/StyledTable */ "./src/components/common/StyledTable.jsx");
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _form_CustomPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/CustomPagination */ "./src/components/form/CustomPagination.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/applications/ApplicationTable.jsx",
    _s = __webpack_require__.$Refresh$.signature();

















function ApplicationTable(props) {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const {
    applications,
    page,
    handlePageChange,
    isLoading
  } = props;
  const totalPage = applications ? applications.total_pages : 0;
  const count = applications ? applications.count : 0;
  const perPage = applications ? applications.per_page : 0;
  const hasApplications = applications && applications.results && !!applications.results.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      sx: {
        display: 'flex',
        margin: '18px',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, this) : hasApplications ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        mt: 3
      },
      component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "aria-label": "customized table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              children: "No."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: "Race Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: "Format"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: applications.results.map((application, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableRow"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              component: "th",
              scope: "row",
              children: perPage * (page - 1) + (1 + index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: application.track.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: application.user ? application.user.user_name : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              style: {
                color: Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["getStatusColor"])(_constants__WEBPACK_IMPORTED_MODULE_9__["statusColorOptions"], application.status)
              },
              children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["getValueOption"])(_constants__WEBPACK_IMPORTED_MODULE_9__["statusOptions"], application.status)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: application.company_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["truncateString"])(application.position, 20)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
                href: application.race_url,
                rel: "noreferrer",
                target: "_blank",
                children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["truncateString"])(application.race_url, 20)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: application.state
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_10__["getDateFormat"])({
                date: application.created_at
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                onClick: () => history.push({
                  pathname: `/interviews/add/`,
                  state: {
                    application: {
                      key: application.id,
                      value: `${application.id} - ${application.company_name} | ${application.position}`
                    },
                    student: {
                      key: application.student.id,
                      value: `${application.student.name}`
                    }
                  }
                }),
                text: "Add",
                variant: "outlined"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_11__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                onClick: () => history.push(`/applications/edit/${application.id}`, {
                  id: application.id
                }),
                text: "Edit",
                variant: "outlined"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 37
            }, this)]
          }, application.id, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 33
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_form_CustomPagination__WEBPACK_IMPORTED_MODULE_13__["default"], {
        page: page,
        handlePageChange: handlePageChange,
        totalPage: totalPage,
        count: count,
        perPage: perPage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("h3", {
      children: "NO DATA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(ApplicationTable, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"]];
});

_c = ApplicationTable;

var _c;

__webpack_require__.$Refresh$.register(_c, "ApplicationTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/common/ConfirmationDialog.jsx":
/*!******************************************************!*\
  !*** ./src/components/common/ConfirmationDialog.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDialog; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/index.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/common/ConfirmationDialog.jsx",
    _s = __webpack_require__.$Refresh$.signature();







function CustomDialog(props) {
  _s();

  const {
    onClose,
    onConfirm,
    isOpen,
    text
  } = props;
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: handleClose,
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '24px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Yes",
        variant: "contained",
        onClick: onConfirm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "No",
        variant: "contained",
        onClick: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(CustomDialog, "g/Vm/BcwnvHIv17KEc29PKVCue0=");

_c = CustomDialog;
CustomDialog.propTypes = {
  // onClose: PropTypes.func.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
};

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomDialog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/common/Copyright.jsx":
/*!*********************************************!*\
  !*** ./src/components/common/Copyright.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/common/Copyright.jsx";





const Copyright = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    ...props,
    children: ['Copyright © ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit",
      href: "#",
      children: "DeepRacer-Racing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

_c = Copyright;
/* harmony default export */ __webpack_exports__["default"] = (Copyright);

var _c;

__webpack_require__.$Refresh$.register(_c, "Copyright");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/common/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducks_users_operations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducks/users/operations */ "./src/reducks/users/operations.js");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConfirmationDialog */ "./src/components/common/ConfirmationDialog.jsx");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/common/Header.jsx",
    _s = __webpack_require__.$Refresh$.signature();
















const drawerWidth = 240;
const AppBar = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(({
  theme,
  open
}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Header = ({
  toggleDrawer,
  open
}) => {
  _s();

  const location = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useLocation"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state);
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const user = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_11__["getUser"])(selector);
  const [openDialog, setOpenDialog] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (location.pathname.includes('profile')) {
      setTitle('Profile');
    } else if (location.pathname.includes('races')) {
      setTitle('Races');
    } else if (location.pathname.includes('users')) {
      setTitle('Users');
    } else {
      setTitle('DeepRacer-Racing');
    }
  }, [location]); // console.log(user);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(AppBar, {
    position: "absolute",
    open: open,
    sx: {
      backgroundColor: '#F4F7FE',
      color: '#000'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
      text: "Are you sure to logout?",
      isOpen: openDialog,
      onClose: () => setOpenDialog(false),
      onConfirm: () => dispatch(Object(_reducks_users_operations__WEBPACK_IMPORTED_MODULE_10__["signOut"])())
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        pr: '24px' // keep right padding when drawer closed

      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": "open drawer",
        onClick: toggleDrawer,
        sx: {
          marginRight: '36px',
          ...(open && {
            display: 'none'
          })
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        component: "h1",
        variant: "h6",
        color: "inherit",
        noWrap: true,
        sx: {
          flexGrow: 1
        },
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        component: "h3",
        variant: "h6",
        color: "inherit",
        noWrap: true,
        children: user.user_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        alt: "racer",
        src: user.image,
        sx: {
          marginLeft: 2,
          width: 30,
          height: 30
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        component: "h3",
        variant: "h6",
        color: "inherit",
        noWrap: true,
        sx: {
          ml: 3,
          cursor: 'pointer'
        },
        onClick: () => setOpenDialog(true),
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

_s(Header, "LbLxElYbO/+SNQ6WZbCJ+Oqo96g=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useLocation"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/common/Sidebar.jsx":
/*!*******************************************!*\
  !*** ./src/components/common/Sidebar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "./node_modules/@mui/icons-material/AccountCircle.js");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/AllInclusive */ "./node_modules/@mui/icons-material/AllInclusive.js");
/* harmony import */ var _mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ManageAccounts */ "./node_modules/@mui/icons-material/ManageAccounts.js");
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/index.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/index.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/index.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/common/Sidebar.jsx",
    _s = __webpack_require__.$Refresh$.signature();

















const drawerWidth = 240;
const Drawer = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["styled"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(({
  theme,
  open
}) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#2D62ED',
    color: '#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const Sidebar = ({
  toggleDrawer,
  open
}) => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_14__["useHistory"])();
  const {
    pathname
  } = history.location;

  const activeClass = path => pathname === path ? {
    backgroundColor: '#fff !important',
    color: '#000'
  } : {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(Drawer, {
    variant: "permanent",
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1]
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: toggleDrawer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: activeClass('/'),
        button: true,
        onClick: () => history.push('/'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_0___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
          primary: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: activeClass('/races'),
        button: true,
        onClick: () => history.push('/races'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
          primary: "Races"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: activeClass('/admins'),
        button: true,
        onClick: () => history.push('/admins'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
          primary: "Admins"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: activeClass('/profile'),
        button: true,
        onClick: () => history.push('/profile'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
          primary: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, undefined);
};

_s(Sidebar, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_14__["useHistory"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/common/StyledTable.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/StyledTable.jsx ***!
  \***********************************************/
/*! exports provided: StyledTableCell, StyledTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTableCell", function() { return StyledTableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTableRow", function() { return StyledTableRow; });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/index.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const StyledTableCell = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["styled"])(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  theme
}) => ({
  [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__["tableCellClasses"].head}`]: {
    backgroundColor: '#F5F5F5',
    color: '000'
  },
  [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__["tableCellClasses"].body}`]: {
    fontSize: 14
  }
}));
const StyledTableRow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["styled"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"])(({
  theme
}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'fff'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomButton.jsx":
/*!**********************************************!*\
  !*** ./src/components/form/CustomButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomButton.jsx";





const CustomButton = props => {
  const {
    text,
    variant,
    onClick
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: variant,
    onClick: () => onClick(),
    sx: {
      backgroundColor: '#FCA744',
      color: '#fff',
      border: 'none'
    },
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

_c = CustomButton;
CustomButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CustomButton);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomButton");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomButton1.jsx":
/*!***********************************************!*\
  !*** ./src/components/form/CustomButton1.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomButton1.jsx";





const CustomButton1 = props => {
  const {
    text,
    variant,
    onClick
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: variant,
    onClick: () => onClick(),
    sx: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid black'
    },
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

_c = CustomButton1;
CustomButton1.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CustomButton1);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomButton1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomButton2.jsx":
/*!***********************************************!*\
  !*** ./src/components/form/CustomButton2.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomButton2.jsx";





const CustomButton2 = props => {
  const {
    text,
    variant,
    onClick
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: variant,
    onClick: () => onClick(),
    sx: {
      backgroundColor: '#FCA744',
      color: '#fff',
      border: 'none'
    },
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

_c = CustomButton2;
CustomButton2.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CustomButton2);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomButton2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomDateRangePicker.jsx":
/*!*******************************************************!*\
  !*** ./src/components/form/CustomDateRangePicker.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/lab/AdapterDateFns */ "./node_modules/@mui/lab/AdapterDateFns/index.js");
/* harmony import */ var _mui_lab_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/lab/DateRangePicker */ "./node_modules/@mui/lab/DateRangePicker/index.js");
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/lab/LocalizationProvider */ "./node_modules/@mui/lab/LocalizationProvider/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomDateRangePicker.jsx";











const CustomDateRangePicker = props => {
  const {
    endText,
    onChange,
    startText,
    value
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateAdapter: _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_0__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_lab_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
      startText: startText,
      endText: endText,
      value: value,
      onChange: newValue => {
        const startDate = newValue[0] && Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__["getDateFormat"])({
          date: newValue[0],
          isDateTime: false
        });
        const endDate = newValue[1] && Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__["getDateFormat"])({
          date: newValue[1],
          isDateTime: false
        });
        onChange(startDate, endDate);
      },
      renderInput: (startProps, endProps) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], { ...startProps
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
          sx: {
            mx: 2
          },
          children: " to "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], { ...endProps
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_c = CustomDateRangePicker;
CustomDateRangePicker.prototype = {
  startText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  endText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CustomDateRangePicker);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomDateRangePicker");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomDateTimePicker.jsx":
/*!******************************************************!*\
  !*** ./src/components/form/CustomDateTimePicker.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/lab/AdapterDateFns */ "./node_modules/@mui/lab/AdapterDateFns/index.js");
/* harmony import */ var _mui_lab_DateTimePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/lab/DateTimePicker */ "./node_modules/@mui/lab/DateTimePicker/index.js");
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/lab/LocalizationProvider */ "./node_modules/@mui/lab/LocalizationProvider/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomDateTimePicker.jsx";








const CustomDateTimePicker = props => {
  const {
    value,
    onChange,
    name,
    label
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateAdapter: _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_0__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_lab_DateTimePicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
      renderInput: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], { ...props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 39
      }, undefined),
      label: label,
      value: value,
      onChange: date => {
        onChange(new Date(date).toISOString(), name);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

_c = CustomDateTimePicker;
CustomDateTimePicker.prototype = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CustomDateTimePicker);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomDateTimePicker");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomLoadingButton.jsx":
/*!*****************************************************!*\
  !*** ./src/components/form/CustomLoadingButton.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/index.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomLoadingButton.jsx";






const CustomLoadingButton = props => {
  const {
    text,
    variant,
    onClick,
    loading,
    startIcon,
    fullWidth,
    type
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: fullWidth,
    loading: loading,
    loadingPosition: "start",
    startIcon: startIcon,
    variant: variant,
    onClick: onClick,
    sx: {
      backgroundColor: '#ffc107'
    },
    type: type,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

_c = CustomLoadingButton;
CustomLoadingButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
CustomLoadingButton.defaultProps = {
  type: 'button',
  startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 16
  }, undefined),
  fullWidth: false
};
/* harmony default export */ __webpack_exports__["default"] = (CustomLoadingButton);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomLoadingButton");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomPagination.jsx":
/*!**************************************************!*\
  !*** ./src/components/form/CustomPagination.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomPagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomPagination.jsx";



function CustomPagination(props) {
  const {
    page,
    handlePageChange,
    totalPage,
    count,
    perPage
  } = props;
  const startPageNum = 1 + perPage * (page - 1);
  const endPageNum = perPage * page < count ? perPage * page : count;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    mt: 3,
    mb: 3,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      spacing: 2,
      direction: "row",
      alignItems: 'center',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: `${startPageNum}-${endPageNum} of ${count}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
        count: totalPage,
        page: page,
        onChange: handlePageChange,
        size: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = CustomPagination;

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomPagination");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomSearchSelect.jsx":
/*!****************************************************!*\
  !*** ./src/components/form/CustomSearchSelect.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/Autocomplete/index.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useStateCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useStateCallback */ "./src/hooks/useStateCallback.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomSearchSelect.jsx",
    _s = __webpack_require__.$Refresh$.signature();









const CustomSearchSelect = props => {
  _s();

  const {
    label,
    onChange,
    name,
    availableOptions,
    selectedValue,
    onTextChange,
    helperText,
    error
  } = props;
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const [loading, setLoading] = Object(_hooks_useStateCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setOptions(availableOptions); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableOptions]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (open && !availableOptions.length) {
      setLoading(true, () => {
        if (onTextChange) {
          onTextChange().then(() => {
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [open]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"], {
    id: "asynchronous-demo",
    name: name,
    open: open,
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      setOpen(false);
    },
    value: selectedValue,
    isOptionEqualToValue: (option, value) => option.key === value.key,
    getOptionLabel: option => option.value,
    options: options,
    loading: loading,
    onChange: (e, data) => {
      onChange(data ? data : {
        value: '',
        key: ''
      }, name);
    },
    renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { ...params,
      label: label,
      name: name,
      helperText: helperText,
      error: error,
      onChange: e => {
        setLoading(true, () => {
          if (onTextChange) {
            onTextChange(e).then(() => {
              setLoading(false);
            });
          } else {
            setLoading(false);
          }
        });
      },
      InputProps: { ...params.InputProps,
        endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
          children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
            color: "inherit",
            size: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 44
          }, undefined) : null, params.InputProps.endAdornment]
        }, void 0, true)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

_s(CustomSearchSelect, "Qd61SBPGXCO/vBMUUgkyNRN6nq4=", false, function () {
  return [_hooks_useStateCallback__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = CustomSearchSelect;
/* harmony default export */ __webpack_exports__["default"] = (CustomSearchSelect);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomSearchSelect");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomSelect.jsx":
/*!**********************************************!*\
  !*** ./src/components/form/CustomSelect.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomSelect.jsx";





const CustomSelect = props => {
  const {
    options,
    label,
    name,
    onChange,
    selectedValue,
    error,
    helperText
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    fullWidth: true,
    error: error,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["InputLabel"], {
      id: "simple-select",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Select"], {
      labelId: "simple-select-label",
      value: selectedValue,
      name: name,
      label: label,
      onChange: onChange,
      children: options.map(o => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
        value: o.key,
        children: o.value
      }, o.key, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["FormHelperText"], {
      children: helperText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

_c = CustomSelect;
CustomSelect.prototype = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
CustomSelect.defaultProps = {
  options: []
};
/* harmony default export */ __webpack_exports__["default"] = (CustomSelect);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomSelect");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomTextArea.jsx":
/*!************************************************!*\
  !*** ./src/components/form/CustomTextArea.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomTextarea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextareaAutosize */ "./node_modules/@mui/material/TextareaAutosize/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomTextArea.jsx";




function CustomTextarea(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: props.name,
    minRows: 15,
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
    style: {
      width: "100%",
      padding: "16.5px 14px",
      borderRadius: "4px"
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = CustomTextarea;
CustomTextarea.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
CustomTextarea.defaultProps = {
  placeholder: 'Describe here...'
};

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomTextarea");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/form/CustomTextField.jsx":
/*!*************************************************!*\
  !*** ./src/components/form/CustomTextField.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/form/CustomTextField.jsx";


 // import PropTypes from 'prop-types';



const CustomTextField = props => {
  const {
    label,
    name,
    onChange,
    value,
    helperText,
    error,
    type = 'text'
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    name: name,
    value: value,
    onChange: onChange,
    label: label,
    variant: "outlined",
    fullWidth: true,
    type: type,
    helperText: helperText,
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_c = CustomTextField;
CustomTextField.prototype = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CustomTextField);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomTextField");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/profile/AdminsTable.jsx":
/*!************************************************!*\
  !*** ./src/components/profile/AdminsTable.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminsTable; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/index.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _common_StyledTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/StyledTable */ "./src/components/common/StyledTable.jsx");
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/profile/AdminsTable.jsx",
    _s = __webpack_require__.$Refresh$.signature();


















function AdminsTable(props) {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_14__["getUser"])(selector);
  const {
    admins,
    page,
    handlePageChange,
    isLoading
  } = props;
  const totalPage = admins ? admins.total_pages : 0;
  const perPage = admins ? admins.per_page : 0;
  const count = admins ? admins.count : 0;
  const hasAdmins = admins && admins.results && !!admins.results.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      sx: {
        display: 'flex',
        margin: '18px',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this) : hasAdmins ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        mt: 3
      },
      component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "aria-label": "customized table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
              align: "center",
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
            align: "center",
            children: currentUser.user_name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
            align: "center",
            children: currentUser.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
            align: "center",
            children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["getValueOption"])(_constants__WEBPACK_IMPORTED_MODULE_10__["adminRoleOptions"], currentUser.role)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_12__["StyledTableCell"], {
            align: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
              text: "Edit",
              variant: "outlined",
              onClick: () => history.push(`/admins/edit/${currentUser.id}`, {
                id: currentUser.id
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("h3", {
      children: "NO DATA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(AdminsTable, "TyHvpVpbXUJhwxw3dI7LAlod+CQ=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = AdminsTable;

var _c;

__webpack_require__.$Refresh$.register(_c, "AdminsTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/races/RacesFilter.jsx":
/*!**********************************************!*\
  !*** ./src/components/races/RacesFilter.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _form_CustomButton1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/CustomButton1 */ "./src/components/form/CustomButton1.jsx");
/* harmony import */ var _form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _form_CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/CustomSelect */ "./src/components/form/CustomSelect.jsx");
/* harmony import */ var _form_CustomTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/races/RacesFilter.jsx",
    _s = __webpack_require__.$Refresh$.signature();






 // eslint-disable-next-line





const RacesFilter = () => {
  _s();

  const {
    clearSearch,
    onChangeHandler,
    queries,
    submitSearch,
    isLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["FormContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    component: "form",
    sx: {
      p: 4,
      width: '100%'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_form_CustomTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: "race_name",
          label: "Race Name",
          value: queries.race_name,
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      sx: {
        mt: 2
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        spacing: 2,
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: submitSearch,
          loading: isLoading,
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_0___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 36
          }, undefined),
          variant: "contained",
          text: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_form_CustomButton1__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: clearSearch,
          text: "Clear",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_s(RacesFilter, "YrK+F2b+sIpaJl1q4urq9LnMG28=");

_c = RacesFilter;
/* harmony default export */ __webpack_exports__["default"] = (RacesFilter);

var _c;

__webpack_require__.$Refresh$.register(_c, "RacesFilter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/races/RacesTable.jsx":
/*!*********************************************!*\
  !*** ./src/components/races/RacesTable.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RacesTable; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/index.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_StyledTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/StyledTable */ "./src/components/common/StyledTable.jsx");
/* harmony import */ var _form_CustomButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _form_CustomPagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form/CustomPagination */ "./src/components/form/CustomPagination.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/races/RacesTable.jsx",
    _s = __webpack_require__.$Refresh$.signature();


















function RacesTable(props) {
  _s();

  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_13__["getUser"])(selector);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const {
    races,
    page,
    handlePageChange,
    isLoading
  } = props;
  const totalPage = races ? races.total_pages : 0;
  const perPage = races ? races.per_page : 0;
  const count = races ? races.count : 0;
  const hasRaces = races && races.results && !!races.results.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      sx: {
        display: 'flex',
        margin: '18px',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this) : hasRaces ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        mt: 3
      },
      component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "aria-label": "customized table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "No."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "Race Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "Track Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "Start Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: races.results.map((race, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableRow"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              component: "th",
              scope: "row",
              children: perPage * (page - 1) + (1 + index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                href: "#",
                children: race.race_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: race.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: race.track.track_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: race.start_date_time && Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["getDateFormat"])({
                date: race.start_date_time
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: race.end_date_time && Object(_utils_common__WEBPACK_IMPORTED_MODULE_14__["getDateFormat"])({
                date: race.end_date_time
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, this), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_common_StyledTable__WEBPACK_IMPORTED_MODULE_10__["StyledTableCell"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_form_CustomButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                text: "Edit",
                variant: "outlined",
                onClick: () => history.push(`/races/edit/${race.id}`, {
                  id: race.id
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 41
            }, this) : null]
          }, race.id, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_form_CustomPagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
        page: page,
        handlePageChange: handlePageChange,
        totalPage: totalPage,
        count: count,
        perPage: perPage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("h3", {
      children: "NO DATA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(RacesTable, "kcaY6slBas8tSZteabYSpPpVh/o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"]];
});

_c = RacesTable;

var _c;

__webpack_require__.$Refresh$.register(_c, "RacesTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/PrivateRoute.jsx":
/*!************************************************!*\
  !*** ./src/components/routes/PrivateRoute.jsx ***!
  \************************************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/routes/PrivateRoute.jsx";


const PrivateRoute = ({
  component: Component,
  token,
  ...rest
}) => {
  return (
    /*#__PURE__*/
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_0__["Route"], { ...rest,
      render: props => token ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, { ...props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 52
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
        to: "/login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 79
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)
  );
};
_c = PrivateRoute;

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivateRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/PublicRoute.jsx":
/*!***********************************************!*\
  !*** ./src/components/routes/PublicRoute.jsx ***!
  \***********************************************/
/*! exports provided: PublicRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRoute", function() { return PublicRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/components/routes/PublicRoute.jsx";


const PublicRoute = ({
  component: Component,
  token,
  ...rest
}) => {
  // Redirect user to dashboard when user is logged in
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_0__["Route"], { ...rest,
    render: props => token ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
      to: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 55
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, { ...props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 77
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, undefined);
};
_c = PublicRoute;

var _c;

__webpack_require__.$Refresh$.register(_c, "PublicRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: statusOptions, raceStatus, raceFormat, raceType, raceRanking, adminRoleOptions, adminStatusOptions, colorCode, statusColorOptions, interviewStatusColorOptions, studentsStatusColorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusOptions", function() { return statusOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceStatus", function() { return raceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceFormat", function() { return raceFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceType", function() { return raceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceRanking", function() { return raceRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRoleOptions", function() { return adminRoleOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminStatusOptions", function() { return adminStatusOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorCode", function() { return colorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusColorOptions", function() { return statusColorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interviewStatusColorOptions", function() { return interviewStatusColorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentsStatusColorOptions", function() { return studentsStatusColorOptions; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// Race Status
const statusOptions = [{
  key: 'closed',
  value: 'Closed'
}, {
  key: 'open',
  value: 'Open'
}]; // Race options

const raceStatus = [{
  key: 'coming_soon',
  value: 'Coming soon'
}, {
  key: 'open',
  value: 'Open'
}, {
  key: 'completed',
  value: 'Completed'
}, {
  key: 'deleted',
  value: 'Deleted'
}];
const raceFormat = [{
  key: 'classic_race',
  value: 'Classic Race'
}, {
  key: 'live_race',
  value: 'Live Race'
}];
const raceType = [{
  key: 'time_trial',
  value: 'Time Trial'
}, {
  key: 'object_avoid',
  value: 'Object Avoidance'
}, {
  key: 'time_trial',
  value: 'Time Trial'
}];
const raceRanking = [{
  key: 'total_time',
  value: ' Total time'
}, {
  key: 'lap_time',
  value: ' Lap time'
}]; // Admin

const adminRoleOptions = [{
  key: 'admin',
  value: 'Admin'
}, {
  key: 'racer',
  value: 'Racer'
}];
const adminStatusOptions = [{
  key: 'active',
  value: 'Active'
}, {
  key: 'deleted',
  value: 'Deleted'
}];
const colorCode = {
  grey: '#566573',
  orange: '#ff4f00',
  brown: '#C28416',
  red: '#FF0E03',
  green: '#008000',
  blue: '#2616C2',
  default: '#000000'
};
const statusColorOptions = [{
  key: 'applied',
  value: colorCode.orange
}, {
  key: 'offered',
  value: colorCode.green
}, {
  key: 'deleted',
  value: colorCode.default
}];
const interviewStatusColorOptions = [{
  key: 'scheduling',
  value: colorCode.default
}, {
  key: 'scheduled',
  value: colorCode.orange
}, {
  key: 'working',
  value: colorCode.brown
}, {
  key: 'done',
  value: colorCode.green
}, {
  key: 'sent_reminder',
  value: colorCode.green
}, {
  key: 'canceled',
  value: colorCode.red
}, {
  key: 'missed',
  value: colorCode.blue
}, {
  key: 'rejected',
  value: colorCode.red
}, {
  key: 'passed',
  value: colorCode.green
}, {
  key: 'offered',
  value: colorCode.green
}, {
  key: 'deleted',
  value: colorCode.default
}];
const studentsStatusColorOptions = [{
  key: 'graduated',
  value: colorCode.orange
}, {
  key: 'started_application',
  value: colorCode.green
}, {
  key: 'pause_application',
  value: colorCode.brown
}, {
  key: 'got_offer',
  value: colorCode.blue
}, {
  key: 'failed',
  value: colorCode.red
}, {
  key: 'deleted',
  value: colorCode.default
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Admins/AddUpdate.jsx":
/*!*********************************************!*\
  !*** ./src/containers/Admins/AddUpdate.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomSelect */ "./src/components/form/CustomSelect.jsx");
/* harmony import */ var _components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _requests_user_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../requests/user-request */ "./src/requests/user-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Admins/AddUpdate.jsx",
    _s = __webpack_require__.$Refresh$.signature();













const AddUpdate = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  let {
    id
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!id);
  const [admin, setAdmin] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    user_name: '',
    email: '',
    status: '',
    role: '',
    password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (id) {
      _requests_user_request__WEBPACK_IMPORTED_MODULE_8__["default"].find(id).then(res => {
        setAdmin(prev => ({ ...prev,
          ...res
        }));
        setIsLoading(false);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const handleOnchange = e => {
    const {
      name,
      value
    } = e.target;
    setAdmin(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onSubmit = () => {
    setIsLoading(true);

    if (admin.password !== admin.confirm_password) {
      setErrors(prev => ({ ...prev,
        confirm_password: ['Your password and confirmation password do not match.']
      }));
      setIsLoading(false);
      return;
    }

    if (id) {
      _requests_user_request__WEBPACK_IMPORTED_MODULE_8__["default"].update(id, admin).then(() => history.goBack()).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    } else {
      _requests_user_request__WEBPACK_IMPORTED_MODULE_8__["default"].store(admin).then(() => history.goBack()).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h5",
      gutterBottom: true,
      component: "div",
      my: 2,
      children: [id ? 'Update' : 'Add', " User"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "user_name",
          error: !!errors.user_name,
          helperText: errors.user_name,
          value: admin.user_name,
          onChange: handleOnchange,
          label: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "email",
          error: !!errors.email,
          helperText: errors.email,
          value: admin.email,
          onChange: handleOnchange,
          label: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Status",
          name: "status",
          error: !!errors.status,
          helperText: errors.status,
          selectedValue: admin.status,
          onChange: handleOnchange,
          options: _constants__WEBPACK_IMPORTED_MODULE_7__["adminStatusOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Role",
          name: "role",
          error: !!errors.role,
          helperText: errors.role,
          selectedValue: admin.role,
          onChange: handleOnchange,
          options: _constants__WEBPACK_IMPORTED_MODULE_7__["adminRoleOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "password",
          error: !!errors.password,
          helperText: errors.password,
          value: admin.password,
          type: "password",
          onChange: handleOnchange,
          label: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "confirm_password",
          error: !!errors.confirm_password,
          helperText: errors.confirm_password,
          value: admin.confirm_password,
          type: "password",
          onChange: handleOnchange,
          label: "Confirm Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
      spacing: 2,
      direction: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: onSubmit,
        loading: isLoading,
        variant: "contained",
        text: id ? 'Update' : 'Add'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Cancel",
        variant: "outlined",
        onClick: () => history.goBack()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(AddUpdate, "nL/n7d+IJ8vXfGx6qB4QbkSQ8Dc=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = AddUpdate;
/* harmony default export */ __webpack_exports__["default"] = (AddUpdate);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddUpdate");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Admins/List.jsx":
/*!****************************************!*\
  !*** ./src/containers/Admins/List.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_admins_AdminsFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/admins/AdminsFilter */ "./src/components/admins/AdminsFilter.jsx");
/* harmony import */ var _components_admins_AdminsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admins/AdminsTable */ "./src/components/admins/AdminsTable.jsx");
/* harmony import */ var _components_form_CustomButton2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/CustomButton2 */ "./src/components/form/CustomButton2.jsx");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _requests_user_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../requests/user-request */ "./src/requests/user-request.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useQuery */ "./src/hooks/useQuery.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Admins/List.jsx",
    _s = __webpack_require__.$Refresh$.signature();
















const List = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_3__["getUser"])(selector);
  const searchQuery = Object(_hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__["useQuery"])();
  const [admins, setAdmins] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [queries, setQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    user_name: searchQuery.get('user_name') || '',
    email: searchQuery.get('email') || '',
    role: searchQuery.get('role') || '',
    permission: searchQuery.get('permission') || ''
  });
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(+searchQuery.get('page') || 1);

  const handleQueryString = ({
    page = 1
  }) => {
    const queriesObject = { ...queries,
      page
    };
    history.replace({
      pathname: 'admins',
      search: query_string__WEBPACK_IMPORTED_MODULE_11___default.a.stringify(queriesObject, {
        skipEmptyString: true,
        skipNull: true
      })
    });
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index(queriesObject).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
    return queriesObject;
  };

  const handlePageChange = (e, value) => {
    handleQueryString({
      page: value
    });
    setPage(value);
  };

  const onChangeHandler = e => {
    const {
      value,
      name
    } = e.target;
    setQueries({ ...queries,
      [name]: value
    });
  };

  const submitSearch = () => {
    setIsLoading(true);
    setPage(1);
    const queriesObject = handleQueryString({
      page: 1
    });
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index(queriesObject).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    setPage(1);
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index({
      page
    }).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
    setQueries({
      user_name: '',
      email: '',
      role: '',
      permission: ''
    });
    history.replace('/admins');
  }; // not working - display permissions


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let isSubscribed = true;
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index({ ...queries,
      page
    }).then(response => {
      if (isSubscribed) {
        setAdmins(response);
        setIsLoading(false);
      }
    });
    return () => isSubscribed = false; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_8__["FormContext"].Provider, {
      value: {
        clearSearch,
        onChangeHandler,
        queries,
        isLoading,
        submitSearch
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_admins_AdminsFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      mt: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_form_CustomButton2__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Add User",
        variant: "contained",
        role: "user.role",
        onClick: () => history.push('/admins/create')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_admins_AdminsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isLoading: isLoading,
      admins: admins,
      page: page,
      handlePageChange: handlePageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(List, "718zp72y1ExveWshwvDMwGVjQbw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
});

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

__webpack_require__.$Refresh$.register(_c, "List");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Application/AddUpdate.jsx":
/*!**************************************************!*\
  !*** ./src/containers/Application/AddUpdate.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _components_form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomSearchSelect */ "./src/components/form/CustomSearchSelect.jsx");
/* harmony import */ var _components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form/CustomSelect */ "./src/components/form/CustomSelect.jsx");
/* harmony import */ var _components_form_CustomTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/CustomTextArea */ "./src/components/form/CustomTextArea.jsx");
/* harmony import */ var _components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _requests_application_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../requests/application-request */ "./src/requests/application-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Application/AddUpdate.jsx",
    _s = __webpack_require__.$Refresh$.signature();















const AddUpdate = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  let {
    id
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!id);
  const [trackOptions, setTrackOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [userOptions, setUserOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [application, setApplication] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    track_name: {
      key: '',
      value: ''
    },
    status: '',
    user: {
      key: '',
      value: ''
    },
    race_description: '',
    note: ''
  });
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (id) {
      _requests_application_request__WEBPACK_IMPORTED_MODULE_10__["default"].find(id).then(res => {
        setApplication({ ...res,
          track_name: res.track_name ? {
            key: res.track.id,
            value: res.track_name
          } : null,
          user: res.user ? {
            key: res.user.id,
            value: res.user.user_name
          } : null
        });
        setIsLoading(false);
        let trackOpt = res.track_name ? [{
          key: res.track.id,
          value: res.track.name
        }] : [];
        setTrackOptions(trackOpt);
        let userOpt = res.user ? [{
          key: res.user.id,
          value: res.user.user_name
        }] : [];
        setUserOptions(userOpt);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const handleOnchange = e => {
    const {
      name,
      value
    } = e.target;
    setApplication(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onChangeSearchSelect = (value, name) => {
    setApplication(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onSubmit = () => {
    setIsLoading(true);

    if (id) {
      _requests_application_request__WEBPACK_IMPORTED_MODULE_10__["default"].update(id, { ...application,
        track: application.track.key,
        user: application.user.key
      }).then(() => history.goBack()).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    } else {
      _requests_application_request__WEBPACK_IMPORTED_MODULE_10__["default"].store({ ...application,
        track: application.track.key,
        user: application.user.key
      }).then(res => history.goBack()).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h5",
      gutterBottom: true,
      component: "div",
      my: 2,
      children: [id ? 'Update' : 'Add', " Race"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Track Name",
          name: "track_name",
          error: !!errors.track_name,
          helperText: errors.track,
          availableOptions: trackOptions,
          selectedValue: application.track,
          onChange: onChangeSearchSelect,
          onTextChange: e => {
            /*handle change*/
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
          label: "Status",
          name: "status",
          error: !!errors.status,
          helperText: errors.status,
          selectedValue: application.status,
          onChange: handleOnchange,
          options: _constants__WEBPACK_IMPORTED_MODULE_9__["statusOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomSearchSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Created by",
          name: "user",
          error: !!errors.user,
          helperText: errors.user,
          availableOptions: userOptions,
          selectedValue: application.user,
          onChange: onChangeSearchSelect,
          onTextChange: e => {
            /*handle change*/
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: "invitation_url",
          error: !!errors.invitation_url,
          helperText: errors.invitation_url,
          label: "Race URL",
          value: application.invitation_url,
          onChange: handleOnchange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      spacing: 2,
      marginBottom: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomTextArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: "race_description",
          error: !!errors.race_description,
          helperText: errors.race_description,
          value: application.race_description,
          placeholder: "Race Description",
          onChange: handleOnchange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
      spacing: 2,
      direction: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onSubmit,
        loading: isLoading,
        variant: "contained",
        text: id ? 'Update' : 'Create Race'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Cancel",
        variant: "outlined",
        onClick: () => history.goBack()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(AddUpdate, "zjtUXyaeBp2kLrXZp5lJ35EMfJs=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = AddUpdate;
/* harmony default export */ __webpack_exports__["default"] = (AddUpdate);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddUpdate");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Application/List.jsx":
/*!*********************************************!*\
  !*** ./src/containers/Application/List.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_applications_ApplicationFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/applications/ApplicationFilter */ "./src/components/applications/ApplicationFilter.jsx");
/* harmony import */ var _components_applications_ApplicationTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/applications/ApplicationTable */ "./src/components/applications/ApplicationTable.jsx");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _requests_application_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../requests/application-request */ "./src/requests/application-request.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useQuery */ "./src/hooks/useQuery.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Application/List.jsx",
    _s = __webpack_require__.$Refresh$.signature();














const List = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const searchQuery = Object(_hooks_useQuery__WEBPACK_IMPORTED_MODULE_8__["useQuery"])();
  const [applications, setApplications] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [queries, setQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    status: searchQuery.get('status') || '',
    applied_by: searchQuery.get('applied_by') || '',
    company_name: searchQuery.get('company_name') || '',
    position: searchQuery.get('position') || '',
    job_description: searchQuery.get('job_description') || '',
    job_portal: searchQuery.get('job_portal') || ''
  });
  const [querySelect, setQuerySelect] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    student: JSON.parse(searchQuery.get('student')) || {
      value: '',
      keys: ''
    },
    user: JSON.parse(searchQuery.get('user')) || {
      value: '',
      keys: ''
    }
  });
  const [queryDateRange, setQueryDateRange] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    start_date: searchQuery.get('start_date') || null,
    end_date: searchQuery.get('end_date') || null
  });
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const onChangeHandler = e => {
    const {
      value,
      name
    } = e.target;
    setQueries({ ...queries,
      [name]: value
    });
  };

  const onChangeSearchSelect = (value, name) => {
    setQuerySelect({ ...querySelect,
      [name]: value
    });
  };

  const onChangeDateRange = (start_date, end_date) => {
    setQueryDateRange({ ...queryDateRange,
      start_date,
      end_date
    });
  };

  const submitSearch = () => {
    setIsLoading(true);
    setPage(1);
    const queriesObject = { ...queries,
      ...queryDateRange,
      page: 1
    };
    history.replace({
      pathname: 'applications',
      search: query_string__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({ ...queriesObject,
        student: querySelect.student.key ? JSON.stringify(querySelect.student) : '',
        user: querySelect.user.key ? JSON.stringify(querySelect.user) : ''
      }, {
        skipEmptyString: true,
        skipNull: true
      })
    });
    _requests_application_request__WEBPACK_IMPORTED_MODULE_7__["default"].index({ ...queriesObject,
      student: querySelect.student.key,
      user: querySelect.user.key
    }).then(response => {
      setApplications(response);
      setIsLoading(false);
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    _requests_application_request__WEBPACK_IMPORTED_MODULE_7__["default"].index({
      page
    }).then(response => {
      setApplications(response);
      setIsLoading(false);
    });
    setQueries({
      status: '',
      applied_by: '',
      company_name: '',
      position: '',
      job_description: '',
      job_portal: ''
    });
    setQuerySelect({
      student: {
        value: '',
        key: ''
      },
      user: {
        value: '',
        key: ''
      }
    });
    setQueryDateRange({
      start_date: null,
      end_date: null
    });
    history.replace('/applications');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setPage(+searchQuery.get('page') || 1);
    let isSubscribed = true;
    _requests_application_request__WEBPACK_IMPORTED_MODULE_7__["default"].index({ ...queries,
      ...queryDateRange,
      user: querySelect.user.key,
      student: querySelect.student.key,
      page
    }).then(response => {
      if (isSubscribed) {
        setApplications(response);
        setIsLoading(false);
      }
    });
    return () => isSubscribed = false; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__["FormContext"].Provider, {
      value: {
        clearSearch,
        isLoading,
        onChangeDateRange,
        onChangeHandler,
        onChangeSearchSelect,
        queries,
        queryDateRange,
        querySelect,
        submitSearch
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_applications_ApplicationFilter__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      mt: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Add an Application",
        variant: "contained",
        onClick: () => history.push('/applications/create')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_applications_ApplicationTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoading: isLoading,
      applications: applications,
      page: page,
      handlePageChange: handlePageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(List, "lvbe1YN9io/hp7jbE8d7EumqEpA=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], _hooks_useQuery__WEBPACK_IMPORTED_MODULE_8__["useQuery"]];
});

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

__webpack_require__.$Refresh$.register(_c, "List");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Home.jsx":
/*!*********************************!*\
  !*** ./src/containers/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducks_users_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducks/users/operations */ "./src/reducks/users/operations.js");
/* harmony import */ var _requests_auth_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../requests/auth-request */ "./src/requests/auth-request.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Home.jsx",
    _s = __webpack_require__.$Refresh$.signature();













const Home = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"])(selector);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: currentUser.id,
    user_name: currentUser.user_name,
    email: currentUser.email,
    user_image: currentUser.image
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setUser({
      id: currentUser.id,
      user_name: currentUser.user_name,
      email: currentUser.email,
      user_image: currentUser.image
    });
  }, [currentUser]); // eslint-disable-next-line

  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleOnchange = e => {
    console.log(e);
    const {
      name,
      value
    } = e.target;
    setUser(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onSubmit = () => {
    // console.log(user);
    _requests_auth_request__WEBPACK_IMPORTED_MODULE_8__["default"].update(user.id, user).then(() => dispatch(Object(_reducks_users_operations__WEBPACK_IMPORTED_MODULE_7__["updateProfile"])(user))); // .catch(err => {
    //     setErrors(err.response.data);
    //     setIsLoading(false);
    // });
  };

  console.log(user);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
      elevation: 5,
      sx: {
        p: 5,
        height: '100%',
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        backgroundColor: '#F4F7FE'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        component: "div",
        my: 2,
        children: "User Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
        direction: "row",
        spacing: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          alt: "User",
          src: currentUser.image,
          sx: {
            width: 66,
            height: 66,
            marginTop: 2
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "user_name",
        error: !!errors.user_name,
        helperText: errors.user_name,
        value: user.user_name,
        onChange: handleOnchange,
        label: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "email",
        error: !!errors.email,
        helperText: errors.email,
        value: user.email,
        onChange: handleOnchange,
        label: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
        spacing: 2,
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: onSubmit,
          loading: isLoading,
          variant: "contained",
          text: 'Update'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          variant: "outlined",
          onClick: () => setIsLoading(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_s(Home, "mwkkbaEJCIz1n78R+sxEb8D9hX4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Login.jsx":
/*!**********************************!*\
  !*** ./src/containers/Login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../axios */ "./src/axios/index.js");
/* harmony import */ var _requests_auth_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../requests/auth-request */ "./src/requests/auth-request.js");
/* harmony import */ var _components_common_Copyright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Copyright */ "./src/components/common/Copyright.jsx");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Key */ "./node_modules/@mui/icons-material/Key.js");
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Login.jsx",
    _s = __webpack_require__.$Refresh$.signature();
















const Login = () => {
  _s();

  let history = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const initialValues = {
    email: '',
    password: ''
  };
  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialValues);

  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues({ ...values,
      [name]: value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    _requests_auth_request__WEBPACK_IMPORTED_MODULE_8__["default"].signIn(values).then(response => {
      localStorage.setItem(_axios__WEBPACK_IMPORTED_MODULE_7__["LOGIN_USER_TOKEN"], response.token);
      history.push('/');
    }).catch(error => {
      console.log(error);
      setErrors(error.response.data);
      setIsLoading(false);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "main",
    maxWidth: "xs",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
      sx: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#F4F7FE',
        padding: '0px 25px',
        borderRadius: '15px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: "h1",
        variant: "h5",
        sx: {
          marginTop: 2,
          fontWeight: 10,
          fontSize: 30
        },
        children: "Welcome Back!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: "h2",
        variant: "h6",
        sx: {
          fontSize: 10,
          fontWeight: 1
        },
        children: "Please login using your account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sx: {
          mt: 2
        },
        variant: "h8",
        color: "red",
        children: errors.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
          className: "error-text",
          children: errors.error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 37
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
          noValidate: true,
          sx: {
            mt: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
            margin: "normal",
            required: true,
            fullWidth: true,
            id: "email",
            label: "Email Address",
            name: "email",
            autoComplete: "email",
            autoFocus: true,
            value: values.email,
            onChange: handleInputChange,
            error: !!errors.email,
            helperText: errors.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
            margin: "normal",
            required: true,
            fullWidth: true,
            name: "password",
            label: "Password",
            type: "password",
            id: "password",
            autoComplete: "current-password",
            value: values.password,
            onChange: handleInputChange,
            error: !!errors.password,
            helperText: errors.password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
            fullWidth: true,
            onClick: onSubmit,
            loading: isLoading,
            startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 40
            }, undefined),
            variant: "contained",
            text: "LOGIN",
            sx: {
              mt: 3,
              mb: 2,
              bgcolor: '#FCA744'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          sx: {
            fontSize: 11
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
            href: "#",
            children: "Forgot your password?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_common_Copyright__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        mt: 4,
        mb: 4
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

_s(Login, "Dfgs0dtG1pYcZlAEtsv8iSdDWiw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_6__["useHistory"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Profile/List.jsx":
/*!*****************************************!*\
  !*** ./src/containers/Profile/List.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_admins_AdminsFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/admins/AdminsFilter */ "./src/components/admins/AdminsFilter.jsx");
/* harmony import */ var _components_profile_AdminsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/AdminsTable */ "./src/components/profile/AdminsTable.jsx");
/* harmony import */ var _components_form_CustomButton2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/CustomButton2 */ "./src/components/form/CustomButton2.jsx");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var _requests_user_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../requests/user-request */ "./src/requests/user-request.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useQuery */ "./src/hooks/useQuery.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Profile/List.jsx",
    _s = __webpack_require__.$Refresh$.signature();
















const List = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_3__["getUser"])(selector);
  const searchQuery = Object(_hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__["useQuery"])();
  const [admins, setAdmins] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [queries, setQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    user_name: searchQuery.get('user_name') || '',
    email: searchQuery.get('email') || '',
    role: searchQuery.get('role') || '',
    permission: searchQuery.get('permission') || ''
  });
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(+searchQuery.get('page') || 1);

  const handleQueryString = ({
    page = 1
  }) => {
    const queriesObject = { ...queries,
      page
    };
    history.replace({
      pathname: 'admins',
      search: query_string__WEBPACK_IMPORTED_MODULE_11___default.a.stringify(queriesObject, {
        skipEmptyString: true,
        skipNull: true
      })
    });
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index(queriesObject).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
    return queriesObject;
  };

  const handlePageChange = (e, value) => {
    handleQueryString({
      page: value
    });
    setPage(value);
  };

  const onChangeHandler = e => {
    const {
      value,
      name
    } = e.target;
    setQueries({ ...queries,
      [name]: value
    });
  };

  const submitSearch = () => {
    setIsLoading(true);
    setPage(1);
    const queriesObject = handleQueryString({
      page: 1
    });
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index(queriesObject).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    setPage(1);
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index({
      page
    }).then(response => {
      setAdmins(response);
      setIsLoading(false);
    });
    setQueries({
      user_name: '',
      email: '',
      role: '',
      permission: ''
    });
    history.replace('/admins');
  }; // not working - display permissions


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let isSubscribed = true;
    _requests_user_request__WEBPACK_IMPORTED_MODULE_9__["default"].index({ ...queries,
      page
    }).then(response => {
      if (isSubscribed) {
        setAdmins(response);
        setIsLoading(false);
      }
    });
    return () => isSubscribed = false; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_profile_AdminsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isLoading: isLoading,
      admins: admins,
      page: page,
      handlePageChange: handlePageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_s(List, "718zp72y1ExveWshwvDMwGVjQbw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useQuery__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
});

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

__webpack_require__.$Refresh$.register(_c, "List");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Races/AddUpdate.jsx":
/*!********************************************!*\
  !*** ./src/containers/Races/AddUpdate.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomSelect */ "./src/components/form/CustomSelect.jsx");
/* harmony import */ var _components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form/CustomTextField */ "./src/components/form/CustomTextField.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _requests_race_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../requests/race-request */ "./src/requests/race-request.js");
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Radio */ "./node_modules/@mui/material/Radio/index.js");
/* harmony import */ var _assets_img_time_trial_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/time-trial.png */ "./src/assets/img/time-trial.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _requests_track_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../requests/track-request */ "./src/requests/track-request.js");
/* harmony import */ var _components_form_CustomDateTimePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/form/CustomDateTimePicker */ "./src/components/form/CustomDateTimePicker.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Races/AddUpdate.jsx",
    _s = __webpack_require__.$Refresh$.signature();





 // import CustomDateTimePicker from '../../components/form/CustomDateTimePicker';







 // import objAvoidance from '../../assets/img/obj-avoidance.png';
// import headToBot from '../../assets/img/head-2-bot.png';


 // import Checkbox from '@mui/material/Checkbox';






const AddUpdate = () => {
  _s();

  // eslint-disable-next-line
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    id
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!id);
  const [race, setRace] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    race_name: '',
    status: '',
    race_format: '',
    start_date_time: '',
    end_date_time: '',
    race_type: '',
    race_description: '',
    no_of_laps: 0,
    off_track_penalty: 0,
    collision_penalty: 0,
    ranking_method: '',
    track: ''
  });
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [tracks, setTracks] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (id) {
      _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].find(id).then(res => {
        setRace(prev => ({ ...prev,
          ...res
        }));
        setIsLoading(false);
      });
    }

    _requests_track_request__WEBPACK_IMPORTED_MODULE_12__["default"].index().then(response => {
      setTracks(response);
      setIsLoading(false);
    }).catch(error => {
      setErrors(error.response.data);
      setIsLoading(false);
    }); // eslint-disable-next-line
  }, []);

  const handleOnchange = e => {
    const {
      name,
      value
    } = e.target;
    setRace(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onSubmit = () => {
    setIsLoading(true);

    if (id) {
      _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].update(id, race).then(() => history.goBack()).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    } else {
      _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].store(race).then(() => history.push('races/review')).catch(err => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
    }
  };

  const setRaceType = e => {
    const {
      name,
      value
    } = e.target;
    setRace(prev => ({ ...prev,
      [name]: value
    }));
  };

  const setRaceFormat = e => {
    const {
      name,
      value
    } = e.target;
    setRace(prev => ({ ...prev,
      [name]: value
    }));
  };

  const onChangeDate = (name, value) => {
    setRace(prev => ({ ...prev,
      [name]: value
    }));
  }; // console.log(race);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h4",
      gutterBottom: true,
      component: "div",
      my: 2,
      children: [id ? 'Update' : 'Add', " Race"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Choose Race Format"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"], {
      name: "race_format",
      value: race.race_format,
      onChange: setRaceFormat,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        marginTop: 2,
        item: true,
        xs: 10,
        sx: {
          display: 'flex',
          padding: '0px 10px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
          elevation: 5,
          sx: {
            p: 5,
            height: '50%',
            display: 'grid'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_9__["default"], {
              value: 'classic_race'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, undefined), "Classic race"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            gutterBottom: true,
            component: "p",
            my: 2,
            children: "Racers can submit unlimited models within a date range to climb the leaderboard. Results and videos are viewable on the Leaderboard page."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Choose Race Type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"], {
      name: "race_type",
      value: race.race_type,
      onChange: setRaceType,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        marginTop: 2,
        item: true,
        xs: 10,
        sx: {
          display: 'flex',
          padding: '0px 10px',
          justifyContent: 'space-evenly'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
          elevation: 3,
          sx: {
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            width: '30%'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "p",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_9__["default"], {
              value: 'time_trial'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, undefined), "Time Trial"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "subtitle2",
            sx: {
              marginBottom: '10px'
            },
            children: "Race against the clock"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("img", {
            src: _assets_img_time_trial_png__WEBPACK_IMPORTED_MODULE_10__["default"],
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Name of Racing Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "race_name",
        error: !!errors.race_name,
        helperText: errors.race_name,
        value: race.race_name,
        onChange: handleOnchange,
        label: "Race Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "subtitle2",
      sx: {
        marginBottom: '10px',
        color: 'GrayText'
      },
      children: "The event name must have 3-64 characters. Valid characters: A-Z, a-z, 0-9, . : ! ? () | _ (underscore) - (hyphen) and spaces."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Race Dates"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "subtitle2",
      sx: {
        marginBottom: '10px',
        color: 'GrayText'
      },
      children: "Choose a start and close date in 24-hour formatUTC+0530 (India Standard Time) Asia/Calcutta."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomDateTimePicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Start date",
        name: "start_date_time",
        error: !!errors.start_date_time,
        helperText: errors.start_date_time,
        selectedValue: race.start_date_time,
        onChange: onChangeDate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      sx: {
        marginTop: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomDateTimePicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "End date",
        name: "end_date_time",
        error: !!errors.end_date_time,
        helperText: errors.end_date_time,
        selectedValue: race.end_date_time,
        onChange: onChangeDate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      sx: {
        color: 'Blue'
      },
      children: "Race Customizations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      marginTop: 2,
      item: true,
      xs: 10,
      sx: {
        display: 'flex',
        padding: '0px 10px',
        justifyContent: 'space-evenly'
      },
      children: tracks.results ? tracks.results.map(track => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
        elevation: 3,
        sx: {
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          width: '30%',
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "p",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_9__["default"], {
            checked: +race.track === track.id,
            onChange: handleOnchange,
            value: track.id,
            name: "track"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 35
          }, undefined), track.track_name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 31
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("img", {
          src: track.track_image,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 31
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "subtitle2",
          sx: {
            marginBottom: '10px'
          },
          children: ["Track Length:", track.track_length, " meters"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 31
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "subtitle2",
          sx: {
            marginBottom: '10px'
          },
          children: ["Track Width:", track.track_width, " meters"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 27
      }, undefined)) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Description of the Racing Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "p",
        label: "Details for quick referance",
        selectedValue: race.race_description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Ranking Method"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "subtitle2",
      sx: {
        marginBottom: '10px',
        color: 'GrayText'
      },
      children: "Choose between Best lap time (the winner is the racer who posts the fastest lap) orTotal time (the winner is the racer with the fastest overall average)."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Race Ranking",
        name: "ranking_method",
        error: !!errors.ranking_method,
        helperText: errors.ranking_method,
        selectedValue: race.ranking_method,
        onChange: handleOnchange,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["raceRanking"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Minimum Laps"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "subtitle2",
      sx: {
        marginBottom: '10px',
        color: 'GrayText'
      },
      children: "Choose the number of laps required for a model to pass evaluation."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "Minimum Laps",
        name: "no_of_laps",
        error: !!errors.no_of_laps,
        helperText: errors.no_of_laps,
        selectedValue: race.no_of_laps,
        onChange: handleOnchange,
        type: "number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      component: "p",
      my: 2,
      children: "Off Track Penalty"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      variant: "subtitle2",
      sx: {
        marginBottom: '10px',
        color: 'GrayText'
      },
      children: "Choose the number of seconds added to a racer\u2019s time for driving off track."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      xs: 5,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "Off Track Penalty",
        name: "off_track_penalty",
        error: !!errors.off_track_penalty,
        helperText: errors.off_track_penalty,
        selectedValue: race.off_track_penalty,
        onChange: handleOnchange,
        type: "number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
      spacing: 2,
      direction: "row",
      sx: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: () => history.push(`${id ? 'update' : 'create'}/review/${id || ''}`, {
          race
        }),
        loading: isLoading,
        variant: "contained",
        text: 'Review'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Cancel",
        variant: "outlined",
        onClick: () => history.goBack()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(AddUpdate, "k6ZYsWTvoDf3Wuzj6/jMBYsqif8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"], react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = AddUpdate;
/* harmony default export */ __webpack_exports__["default"] = (AddUpdate);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddUpdate");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Races/List.jsx":
/*!***************************************!*\
  !*** ./src/containers/Races/List.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_races_RacesFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/races/RacesFilter */ "./src/components/races/RacesFilter.jsx");
/* harmony import */ var _components_races_RacesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/races/RacesTable */ "./src/components/races/RacesTable.jsx");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/FormContext */ "./src/contexts/FormContext.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _requests_race_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../requests/race-request */ "./src/requests/race-request.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useQuery */ "./src/hooks/useQuery.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Races/List.jsx",
    _s = __webpack_require__.$Refresh$.signature();
















const List = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const searchQuery = Object(_hooks_useQuery__WEBPACK_IMPORTED_MODULE_9__["useQuery"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_11__["getUser"])(selector);
  const [races, setRaces] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [queries, setQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    race_name: searchQuery.get('race_name') || '',
    race_status: searchQuery.get('race_status') || ''
  });
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(+searchQuery.get('page') || 1);

  const handleQueryString = ({
    page = 1
  }) => {
    const queriesObject = { ...queries,
      page
    };
    history.replace({
      pathname: 'races',
      search: query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify(queriesObject, {
        skipEmptyString: true,
        skipNull: true
      })
    });
    return queriesObject;
  };

  const handlePageChange = (e, value) => {
    handleQueryString({
      page: value
    });
    setPage(value);
  };

  const onChangeHandler = e => {
    const {
      value,
      name
    } = e.target;
    setQueries({ ...queries,
      [name]: value
    });
  };

  const submitSearch = () => {
    setIsLoading(true);
    setPage(1);
    const queriesObject = handleQueryString({
      page: 1
    });
    _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].index(queriesObject).then(response => {
      setRaces(response);
      setIsLoading(false);
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    setPage(1);
    _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].index({
      page
    }).then(response => {
      setRaces(response);
      setIsLoading(false);
    });
    setQueries({
      race_name: ''
    });
    history.replace('/races');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let isSubscribed = true;
    _requests_race_request__WEBPACK_IMPORTED_MODULE_8__["default"].index({ ...queries,
      page
    }).then(response => {
      if (isSubscribed) {
        setRaces(response);
        setIsLoading(false);
      }
    });
    return () => isSubscribed = false; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__["FormContext"].Provider, {
      value: {
        clearSearch,
        isLoading,
        onChangeHandler,
        queries,
        submitSearch
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_races_RacesFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined), currentUser && currentUser.role === 'admin' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      mt: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Add Race",
        variant: "contained",
        onClick: () => history.push('/races/create')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_races_RacesTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isLoading: isLoading,
      races: races,
      page: page,
      handlePageChange: handlePageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(List, "kxzRQ7D0Pye8a4iMT1M2LwyP5zQ=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"], _hooks_useQuery__WEBPACK_IMPORTED_MODULE_9__["useQuery"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

__webpack_require__.$Refresh$.register(_c, "List");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Races/Results.jsx":
/*!******************************************!*\
  !*** ./src/containers/Races/Results.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/StyledTable */ "./src/components/common/StyledTable.jsx");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Races/Results.jsx",
    _s = __webpack_require__.$Refresh$.signature();












const Results = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"])(selector);
  const {
    id
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [race, setRace] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  console.log(race);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      sx: {
        marginLeft: '69%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
        htmlFor: "contained-button-file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
          accept: "file",
          id: "contained-button-file",
          multiple: true,
          type: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          variant: "contained",
          component: "span",
          children: "Upload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        sx: {
          marginTop: '10px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: "Start Race",
          variant: "outlined",
          onClick: () => history.goBack()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      marginTop: 1,
      item: true,
      xs: 10,
      sx: {
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
        elevation: 5,
        sx: {
          p: 10,
          height: '50%',
          display: 'grid'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "h4",
          gutterBottom: true,
          component: "div",
          my: 1,
          sx: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          children: ["Review Race", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Edit",
            variant: "outlined",
            onClick: () => history.goBack()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          component: "h2",
          variant: "h6",
          color: "primary",
          children: currentUser.user_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
          item: true,
          sx: {
            borderRight: '1px black',
            display: 'flex'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black',
              paddingRight: '100px'
            },
            children: ["Race Hosting", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "classic race"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              component: "h2",
              variant: "h6",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: ["Race Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle2",
                color: "primary",
                children: "Dates"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black',
              paddingRight: '100px'
            },
            children: ["Track Details", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Track Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              component: "h2",
              variant: "h6",
              color: "primary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                alt: "User",
                src: currentUser.image,
                sx: {
                  width: 66,
                  height: 66,
                  marginTop: 2
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: ["Track Length", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle2",
                color: "primary",
                sx: {
                  color: 'black'
                },
                children: "Track Width"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black'
            },
            children: ["Race Rules", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "Ranking methd: Total Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Entry Criteria: 3 Laps"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Off track penalty: 2 seconds"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
          spacing: 2,
          direction: "row",
          sx: {
            marginTop: '20px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      sx: {
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
        elevation: 5,
        sx: {
          p: 8,
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30%',
          textAlign: 'center',
          marginTop: '20px',
          marginLeft: '35px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          alt: "User",
          src: currentUser.image,
          sx: {
            width: 66,
            height: 66
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined), currentUser.user_name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "subtitle2",
          color: "primary",
          children: "Classic Race"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "subtitle2",
          color: "primary",
          children: "Track name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "h6",
          color: "primary",
          sx: {
            color: 'black'
          },
          children: "Start your Engine"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        xs: 5.8,
        sx: {
          padding: '20px 20px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Table"], {
          "aria-label": "customized table",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TableHead"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TableRow"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
                align: "center",
                children: "No."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
                align: "center",
                children: "Racer Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
                align: "center",
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
                align: "center",
                children: "video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
                align: "center",
                children: "off track"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
              align: "center",
              children: "rank"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
              align: "center",
              children: currentUser.user_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
              align: "center",
              children: "1.20 min"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
              align: "center",
              children: "video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_common_StyledTable__WEBPACK_IMPORTED_MODULE_4__["StyledTableCell"], {
              align: "center",
              children: "Off track"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(Results, "/QeBWf3YbLBx2a2X1gU4XJVFb7E=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"]];
});

_c = Results;
/* harmony default export */ __webpack_exports__["default"] = (Results);

var _c;

__webpack_require__.$Refresh$.register(_c, "Results");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/Races/Review.jsx":
/*!*****************************************!*\
  !*** ./src/containers/Races/Review.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/CustomButton */ "./src/components/form/CustomButton.jsx");
/* harmony import */ var _components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/CustomLoadingButton */ "./src/components/form/CustomLoadingButton.jsx");
/* harmony import */ var _reducks_users_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducks/users/selectors */ "./src/reducks/users/selectors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/containers/Races/Review.jsx",
    _s = __webpack_require__.$Refresh$.signature();











const Review = () => {
  _s();

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state);
  const currentUser = Object(_reducks_users_selectors__WEBPACK_IMPORTED_MODULE_6__["getUser"])(selector);
  const {
    id
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [race, setRace] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  console.log(race);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      marginTop: 1,
      item: true,
      xs: 10,
      sx: {
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
        elevation: 5,
        sx: {
          p: 10,
          height: '50%',
          display: 'grid'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          variant: "h4",
          gutterBottom: true,
          component: "div",
          my: 1,
          sx: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          children: ["Review Race", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_form_CustomButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Edit",
            variant: "outlined",
            onClick: () => history.goBack()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          component: "h2",
          variant: "h6",
          color: "primary",
          children: currentUser.user_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
          item: true,
          sx: {
            borderRight: '1px black',
            display: 'flex'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black',
              paddingRight: '100px'
            },
            children: ["Race Hosting", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "classic race"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              component: "h2",
              variant: "h6",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: ["Race Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle2",
                color: "primary",
                children: "Dates"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black',
              paddingRight: '100px'
            },
            children: ["Track Details", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Track Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              component: "h2",
              variant: "h6",
              color: "primary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                alt: "User",
                src: currentUser.image,
                sx: {
                  width: 66,
                  height: 66,
                  marginTop: 2
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: ["Track Length", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle2",
                color: "primary",
                sx: {
                  color: 'black'
                },
                children: "Track Width"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            component: "h2",
            variant: "h6",
            color: "primary",
            sx: {
              color: 'black'
            },
            children: ["Race Rules", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "Ranking methd: Total Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Entry Criteria: 3 Laps"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              sx: {
                color: 'black'
              },
              children: "Off track penalty: 2 seconds"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
          spacing: 2,
          direction: "row",
          sx: {
            marginTop: '20px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_form_CustomLoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: () => history.push(`races/results/${race}`),
            loading: isLoading,
            variant: "contained",
            text: 'Confirm'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_s(Review, "/QeBWf3YbLBx2a2X1gU4XJVFb7E=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"]];
});

_c = Review;
/* harmony default export */ __webpack_exports__["default"] = (Review);

var _c;

__webpack_require__.$Refresh$.register(_c, "Review");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/contexts/FormContext.js":
/*!*************************************!*\
  !*** ./src/contexts/FormContext.js ***!
  \*************************************/
/*! exports provided: FormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const FormContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/hooks/useQuery.js":
/*!*******************************!*\
  !*** ./src/hooks/useQuery.js ***!
  \*******************************/
/*! exports provided: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();



const useQuery = () => {
  _s();

  const {
    search
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => new URLSearchParams(search), [search]);
};

_s(useQuery, "I+9F+Vhfmc3otMLqUKFlYflxhf8=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/hooks/useStateCallback.js":
/*!***************************************!*\
  !*** ./src/hooks/useStateCallback.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();



const useStateCallback = initialState => {
  _s();

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const cbRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const setStateCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((state, cb) => {
    cbRef.current = cb;
    setState(state);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);
  return [state, setStateCallback];
};

_s(useStateCallback, "jTdDxQlCAPVP2Mx6g6s2UqDgtDs=");

/* harmony default export */ __webpack_exports__["default"] = (useStateCallback);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: history, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducks_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducks/store/store */ "./src/reducks/store/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/index.js";









const history = history__WEBPACK_IMPORTED_MODULE_7__["createBrowserHistory"]();
const store = Object(_reducks_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(history);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(connected_react_router__WEBPACK_IMPORTED_MODULE_5__["ConnectedRouter"], {
    history: history,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 5
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_6__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/posts/actions.js":
/*!**************************************!*\
  !*** ./src/reducks/posts/actions.js ***!
  \**************************************/
/*! exports provided: ADD_POST, addPostAction, FETCH_POST, fetchPostsAction, DELETE_POST, deletePostAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST", function() { return FETCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsAction", function() { return fetchPostsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostAction", function() { return deletePostAction; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const ADD_POST = 'ADD_POST';
const addPostAction = post => {
  return {
    type: ADD_POST,
    payload: {
      post
    }
  };
};
const FETCH_POST = 'FETCH_POST';
const fetchPostsAction = posts => {
  return {
    type: FETCH_POST,
    payload: {
      posts
    }
  };
};
const DELETE_POST = 'DELETE_POST';
const deletePostAction = postId => {
  return {
    type: DELETE_POST,
    payload: {
      postId
    }
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/posts/reducers.js":
/*!***************************************!*\
  !*** ./src/reducks/posts/reducers.js ***!
  \***************************************/
/*! exports provided: PostsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsReducer", function() { return PostsReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/reducks/posts/actions.js");
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initialState */ "./src/reducks/store/initialState.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const PostsReducer = (state = _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].posts, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_POST"]:
      return { ...state,
        ...action.payload.posts,
        results: [...state.results, ...action.payload.posts.results]
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_POST"]:
      return { ...state,
        results: [action.payload.post, ...state.results]
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST"]:
      return { ...state,
        ...action.payload.posts,
        results: state.results.filter(result => result.id !== action.payload.postId)
      };

    default:
      return state;
  }
};
_c = PostsReducer;

var _c;

__webpack_require__.$Refresh$.register(_c, "PostsReducer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/store/initialState.js":
/*!*******************************************!*\
  !*** ./src/reducks/store/initialState.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const initialState = {
  // user: {
  //     errors: {
  //         email: null,
  //         password: null
  //     }
  user: {
    user_name: '',
    email: '',
    token: '',
    token_expires_at: '',
    role: ''
  },
  posts: {
    results: [],
    count: 0,
    next: null,
    previous: null
  } // races: {
  //     race_name: '',
  //     race_status: '',
  //     race_format: '',
  //     race_type: '',
  //     track_name: ''
  // }

};
/* harmony default export */ __webpack_exports__["default"] = (initialState);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/store/store.js":
/*!************************************!*\
  !*** ./src/reducks/store/store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _posts_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/reducers */ "./src/reducks/posts/reducers.js");
/* harmony import */ var _users_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/reducers */ "./src/reducks/users/reducers.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





 // import { RaceReducer } from '../races/reducers';

function createStore(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    posts: _posts_reducers__WEBPACK_IMPORTED_MODULE_3__["PostsReducer"],
    user: _users_reducers__WEBPACK_IMPORTED_MODULE_4__["UserReducer"] // race: RaceReducer

  }), Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history), redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]) // DEBUG MODE
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/users/actions.js":
/*!**************************************!*\
  !*** ./src/reducks/users/actions.js ***!
  \**************************************/
/*! exports provided: SIGN_IN, signInAction, CHECK_LOGIN, checkLoginAction, SIGN_IN_ERROR, signInError, UPDATE_PROFILE, updateProfileAction, UPDATE_PROFILE_ERROR, updateProfileError, SIGN_OUT, signOutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInAction", function() { return signInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_LOGIN", function() { return CHECK_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLoginAction", function() { return checkLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_ERROR", function() { return SIGN_IN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInError", function() { return signInError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE", function() { return UPDATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileAction", function() { return updateProfileAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_ERROR", function() { return UPDATE_PROFILE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileError", function() { return updateProfileError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT", function() { return SIGN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutAction", function() { return signOutAction; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const SIGN_IN = 'SIGN_IN';
const signInAction = token => {
  return {
    type: SIGN_IN,
    payload: {
      token
    }
  };
};
const CHECK_LOGIN = 'CHECK_LOGIN';
const checkLoginAction = user => {
  return {
    type: CHECK_LOGIN,
    payload: {
      user
    }
  };
};
const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
const signInError = errors => {
  return {
    type: SIGN_IN_ERROR,
    payload: {
      errors
    }
  };
};
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const updateProfileAction = user => {
  return {
    type: UPDATE_PROFILE,
    payload: {
      user
    }
  };
};
const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
const updateProfileError = errors => {
  return {
    type: UPDATE_PROFILE_ERROR,
    payload: {
      errors
    }
  };
};
const SIGN_OUT = 'SIGN_OUT';
const signOutAction = () => {
  return {
    type: SIGN_OUT
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/users/operations.js":
/*!*****************************************!*\
  !*** ./src/reducks/users/operations.js ***!
  \*****************************************/
/*! exports provided: fetchUserFromLocalStorage, signIn, updateProfile, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserFromLocalStorage", function() { return fetchUserFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios/index.js");
/* harmony import */ var _requests_auth_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../requests/auth-request */ "./src/requests/auth-request.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/reducks/users/actions.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const fetchUserFromLocalStorage = () => {
  return async dispatch => {
    const userJSON = localStorage.getItem(_axios__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER_TOKEN"]);

    if (userJSON && userJSON !== '') {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signInAction"])(userJSON));
    }
  };
};
const signIn = (data = {}, onSuccess = null) => {
  return async dispatch => {
    return _requests_auth_request__WEBPACK_IMPORTED_MODULE_2__["default"].signIn(data).then(response => {
      localStorage.setItem(_axios__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER_TOKEN"], response.token);
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signInAction"])(response.token));
      onSuccess();
    }).catch(error => {
      console.log(error);
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signInError"])(error.response));
    });
  };
};
const updateProfile = (data = {}, id) => {
  console.log(data);
  return async dispatch => {
    return _requests_auth_request__WEBPACK_IMPORTED_MODULE_2__["default"].updateProfile(data, id).then(response => {
      localStorage.setItem(_axios__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER_TOKEN"], JSON.stringify(response));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfileAction"])(response));
    }).catch(error => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfileError"])(error.response.data));
    });
  };
};
const signOut = () => {
  return async dispatch => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signOutAction"])());
    localStorage.removeItem(_axios__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER_TOKEN"]);
    dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_0__["push"])('/login'));
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/users/reducers.js":
/*!***************************************!*\
  !*** ./src/reducks/users/reducers.js ***!
  \***************************************/
/*! exports provided: UserReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducer", function() { return UserReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/reducks/users/actions.js");
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initialState */ "./src/reducks/store/initialState.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const UserReducer = (state = _store_initialState__WEBPACK_IMPORTED_MODULE_1__["default"].user, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN"]:
      return { ...state,
        token: action.payload.token
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_LOGIN"]:
      return { ...state,
        ...action.payload.user
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_ERROR"]:
      return { ...state,
        errors: action.payload.errors
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE"]:
      return { ...state,
        ...action.payload.user
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT"]:
      return {
        errors: {
          email: null,
          password: null
        }
      };

    default:
      return state;
  }
};
_c = UserReducer;

var _c;

__webpack_require__.$Refresh$.register(_c, "UserReducer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducks/users/selectors.js":
/*!****************************************!*\
  !*** ./src/reducks/users/selectors.js ***!
  \****************************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const userSelector = state => state.user;

const getUser = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([userSelector], state => state);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/application-request.js":
/*!*********************************************!*\
  !*** ./src/requests/application-request.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-request */ "./src/requests/base-request.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class ApplicationRequest extends _base_request__WEBPACK_IMPORTED_MODULE_0__["default"] {}

/* harmony default export */ __webpack_exports__["default"] = (new ApplicationRequest('applications'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/auth-request.js":
/*!**************************************!*\
  !*** ./src/requests/auth-request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-request */ "./src/requests/base-request.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class AuthRequest extends _base_request__WEBPACK_IMPORTED_MODULE_0__["default"] {
  signIn(data) {
    return this.performRequest(_base_request__WEBPACK_IMPORTED_MODULE_0__["default"].METHOD_POST, 'signin/', data);
  }

  checkLogin() {
    return this.performRequest(_base_request__WEBPACK_IMPORTED_MODULE_0__["default"].METHOD_GET, 'check-login/');
  }

  updateProfile(id, user) {
    return this.performRequest(_base_request__WEBPACK_IMPORTED_MODULE_0__["default"].METHOD_POST, 'update/${id}/', user);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRequest('users'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/base-request.js":
/*!**************************************!*\
  !*** ./src/requests/base-request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseService; });
/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios/index */ "./src/axios/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


class BaseService {
  static get METHOD_GET() {
    return 'GET';
  }

  static get METHOD_POST() {
    return 'POST';
  }

  static get METHOD_PUT() {
    return 'PUT';
  }

  static get METHOD_DELETE() {
    return 'DELETE';
  }

  constructor(prefix) {
    this.prefix = prefix;
  }

  index(data = {}) {
    return this.performRequest(BaseService.METHOD_GET, '', data);
  }

  find(id) {
    return this.performRequest(BaseService.METHOD_GET, `${id}/`);
  }

  store(data) {
    return this.performRequest(BaseService.METHOD_POST, 'add/', data);
  }

  update(id, data) {
    return this.performRequest(BaseService.METHOD_PUT, `update/${id}/`, data);
  }

  destroy(id, data = {}) {
    return this.performRequest(BaseService.METHOD_DELETE, `delete/${id}/`, data);
  }

  performRequest(method, url, data = {}, headers = {}) {
    let options = {
      method,
      url: `${this.prefix}${url ? '/' + url : ''}`,
      data,
      headers,
      startTime: performance.now()
    };
    options[method.toUpperCase() === BaseService.METHOD_GET ? 'params' : 'data'] = data;
    return Object(_axios_index__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/race-request.js":
/*!**************************************!*\
  !*** ./src/requests/race-request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-request */ "./src/requests/base-request.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class RaceRequest extends _base_request__WEBPACK_IMPORTED_MODULE_0__["default"] {}

/* harmony default export */ __webpack_exports__["default"] = (new RaceRequest('races'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/track-request.js":
/*!***************************************!*\
  !*** ./src/requests/track-request.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-request */ "./src/requests/base-request.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class TrackRequest extends _base_request__WEBPACK_IMPORTED_MODULE_0__["default"] {}

/* harmony default export */ __webpack_exports__["default"] = (new TrackRequest('tracks'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/requests/user-request.js":
/*!**************************************!*\
  !*** ./src/requests/user-request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-request */ "./src/requests/base-request.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class UserRequest extends _base_request__WEBPACK_IMPORTED_MODULE_0__["default"] {}

/* harmony default export */ __webpack_exports__["default"] = (new UserRequest('users'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/responses/base-response.js":
/*!****************************************!*\
  !*** ./src/responses/base-response.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseResponse; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

class BaseResponse {
  constructor({
    data,
    statusCode
  }) {
    this._data = data;
    this._statusCode = statusCode;
  }

  getData() {
    return this._data;
  }

  statusOK() {
    return this._statusCode === 200;
  }

  statusUnauthorize() {
    return this._statusCode === 401;
  }

  statusNotFound() {
    return this._statusCode === 404;
  }

  statusForbidden() {
    return this._statusCode === 403;
  }

  statusUnprocessableEntity() {
    return this._statusCode === 422;
  }

  statusInternalServerError() {
    return this._statusCode === 500;
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: truncateString, getDateFormat, getValueOption, getStatusColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateString", function() { return truncateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormat", function() { return getDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueOption", function() { return getValueOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusColor", function() { return getStatusColor; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const truncateString = (string, maximum_count) => {
  if (string && string.length > maximum_count) {
    return string.slice(0, maximum_count).concat('...');
  } else {
    return string;
  }
};
const getDateFormat = ({
  date,
  isDateTime = true
}) => {
  const stringDate = new Date(date);
  const year = new Intl.DateTimeFormat('en', {
    year: 'numeric'
  }).format(stringDate);
  const month = new Intl.DateTimeFormat('en', {
    month: '2-digit'
  }).format(stringDate);
  const day = new Intl.DateTimeFormat('en', {
    day: '2-digit'
  }).format(stringDate);
  const time = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(stringDate);
  return isDateTime ? `${year}/${month}/${day} ${time}` : `${year}-${month}-${day}`;
};
const getValueOption = (options, key) => {
  const option = options.find(o => o.key === key);
  return option ? option.value : '';
};
const getStatusColor = (options, key) => {
  const color = options.find(x => x.key === key);
  return color ? color.value : '#000';
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/musubiappleidgmail.com/Desktop/CLIENT-PROJECT/deepracer-racing/frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map