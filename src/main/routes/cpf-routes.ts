import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddCpfController } from "../factories/controllers/add-cpf/add-cpf-controller-factory";
import { makeLisCpfController } from "../factories/controllers/list-cpf/list-cpf-controller-factory";

export default (router: Router): void => {
    router.post('/cpf', adaptRoute(makeAddCpfController()))
    router.get('/cpf', adaptRoute(makeLisCpfController()))
}