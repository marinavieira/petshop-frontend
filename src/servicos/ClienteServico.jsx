import { getToken } from "../seguranca/Autenticacao";

export const getClienteServico = async () => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/cliente`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const getClienteServicoPorCodigoAPI = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/cliente/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const deleteClienteServico = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/cliente/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}


export const cadastraClienteServico = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/cliente`, {
        method: metodo,
        headers: { "Content-Type": "application/json",
        "authorization" : getToken() },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}