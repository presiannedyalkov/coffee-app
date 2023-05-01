const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const coffeeController = require("../controllers/coffeeController");

//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));

router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for coffee ___________________________
router.route("/coffee/create").post(catchErrors(coffeeController.create));
router.route("/coffee/read/:id").get(catchErrors(coffeeController.read));
router
  .route("/coffee/update/:id")
  .patch(catchErrors(coffeeController.update));
router
  .route("/coffee/delete/:id")
  .delete(catchErrors(coffeeController.delete));
router.route("/coffee/search").get(catchErrors(coffeeController.search));
router.route("/coffee/list").get(catchErrors(coffeeController.list));

module.exports = router;
