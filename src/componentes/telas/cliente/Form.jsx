import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import ClienteContext from './ClienteContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaPets }
        = useContext(ClienteContext);

    return (
        <Dialogo id="modalEdicao" titulo="Cliente" idformulario="formEdicao"
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
            <CampoEntrada id="txtCpf" label="CPF" tipo="number"
                name="cpf" value={objeto.cpf}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="CPF OK" textoinvalido="Informe o CPF"
                maximocaracteres={11} />
            <CampoSelect id="txtAtivo" label="Ativo"
                name="ativo" value={objeto.ativo}
                handlechange={handleChange}
                requerido={true}
                textovalido="Ativo OK"
                textoinvalido="Informe se o cliente está ativo">
                <option value={true}>SIM</option>
                <option value={false}>NÃO</option>
            </CampoSelect>
            <CampoEntrada id="txtDataConsulta" label="Data Ultima Consulta" tipo="date"
                name="data_consulta" value={objeto.data_consulta}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Data OK" textoinvalido="Informe a data de consulta" />
            <CampoSelect id="txtPet" label="Pet"
                name="pet" value={objeto.pet}
                handlechange={handleChange}
                requerido={true}
                textovalido="Pet OK"
                textoinvalido="Informe a pet">
                {
                    listaPets.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.nome}
                        </option>
                    ))
                }
            </CampoSelect>
        </Dialogo>
    )
}

export default Form;
