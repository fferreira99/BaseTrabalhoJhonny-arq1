import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices"
import amqp from "amqp-connection-manager"
import { queue } from "rxjs"
import { CriarEmpresaDto } from "./dtos/criar-empresa-dto"

@Controller('api/v1')
export class AppController {
 private logger = new Logger(AppController.name)
 private clienteAdminBackend: ClientProxy
 constructor(){
 this.clienteAdminBackend = ClientProxyFactory.create({
transport: Transport.RMQ,
options: {
 urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
 queue: 'admin-backend'
}
 })
 }@Post('empresas')
 @UsePipes(ValidationPipe)
 async criarEmpresa(@Body() criarEmpresaDto: CriarEmpresaDto){
 return await this.clienteAdminBackend.emit('criar-empresa', criarEmpresaDto)
 }
}