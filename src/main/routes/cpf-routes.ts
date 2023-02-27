import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddCpfController } from "../factories/controllers/add-cpf/add-cpf-controller-factory";
import { makeLisCpfController } from "../factories/controllers/list-cpf/list-cpf-controller-factory";
import { makeCheckCpfController } from "../factories/controllers/check-cpf/check-cpf-controller-factory";
import { makeDeleteCpfController } from "../factories/controllers/delete-cpf/delete-cpf-controller-factory";

export default (router: Router): void => {
    router.post('/cpf', adaptRoute(makeAddCpfController()))
    router.get('/cpf/:cpf', adaptRoute(makeCheckCpfController()))
    router.delete('/cpf/:cpf', adaptRoute(makeDeleteCpfController()))
    router.get('/cpf', adaptRoute(makeLisCpfController()))
}