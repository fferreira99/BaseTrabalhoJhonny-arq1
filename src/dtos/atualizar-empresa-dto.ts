import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";

export class AtualizarEmpresaDto{
    @IsNotEmpty()
    @IsString()
    nome: string;
    
    @IsArray()
    @ArrayMinSize(1)
    disciplinas: Array<Disciplina>
    }
    interface Disciplina {
    nome: string;
    operação: string;
    }