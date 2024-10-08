import { CriarEmpresaDto } from "./dtos/criar-empresa-dto";
export declare class AppController {
    private logger;
    private clienteAdminBackend;
    constructor();
    criarEmpresa(criarEmpresaDto: CriarEmpresaDto): Promise<import("rxjs").Observable<any>>;
}
