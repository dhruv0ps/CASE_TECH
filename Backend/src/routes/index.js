// Create separate route files if the expected scope of routes is beyond 30 APIs. Else, segregate them with region comments.

const express = require("express")
var router = express.Router();
var bodyParser = require("body-parser")

const { authenticateToken } = require("../config/auth")


var jsonParser = bodyParser.json()
router.use(jsonParser)


// #region module1
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
//#endregion


// #region module2
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
//#endregion


//#region module 3
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
// router.post('/sample/add', authenticateToken, middlewareCall, controller.functionname);
//#endregion


module.exports = router