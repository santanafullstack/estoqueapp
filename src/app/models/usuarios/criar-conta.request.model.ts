export class CriarContaRequestModel {
    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public senhaConfirmacao: string
    ) {


    }
}
