const {Router} = require("express"); const router = Router();
const{ getPersona, addPersona } = require("../controller/persona.controller");

router.get('/', getPersona); router.post("/",addPersona);

module.exports = router;
