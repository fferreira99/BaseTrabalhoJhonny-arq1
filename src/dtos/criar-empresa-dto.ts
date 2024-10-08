import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarEmpresaDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsString()
    nome: string;
    
    @IsArray()
    @ArrayMinSize(1)
    disciplinas: Array<Disciplina>;
    }
    interface Disciplina {
    nome: string;
    operacao: string;
    }