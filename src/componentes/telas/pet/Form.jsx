import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import PetContext from './PetContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta }
        = useContext(PetContext);

    return (
        <Dialogo id="modalEdicao" titulo="Pet" idformulario="formEdicao"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Código" tipo="number"
                name="codigo" value={objeto.codigo}
                handlechange={handleChange}
                requerido={false} readonly={true}
                maximocaracteres={5} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Nome OK" textoinvalido="Informe o nome"
                maximocaracteres={40} />
            <CampoEntrada id="txtIdade" label="Idade" tipo="number"
                name="idade" value={objeto.idade}
                handlechange={handleChange}
                requerido={false} readonly={true}
                maximocaracteres={2} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Descrição OK" textoinvalido="Informe a descrição"
                maximocaracteres={40} />
            <CampoSelect id="txtAtivo" label="Ativo"
                name="ativo" value={objeto.ativo}
                handlechange={handleChange}
                requerido={true}
                textovalido="Ativo OK"
                textoinvalido="Informe se o pet está ativo">
                <option value={true}>SIM</option>
                <option value={false}>NÃO</option>
            </CampoSelect>
            <CampoEntrada id="txtDataConsulta" label="Data de Consulta" tipo="date"
                name="data_consulta" value={objeto.data_consulta}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Data OK" textoinvalido="Informe a data de consulta" />
        </Dialogo>
    )
}

export default Form;
