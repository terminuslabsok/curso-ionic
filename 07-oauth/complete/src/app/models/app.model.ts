export interface IPregunta {
    id: number;
    avatarUrl: string;
    nombreUsuario: string;
    preguntaTitulo: string;
    preguntaDescripcion: string;
}

export interface MensajeError {
    codigo: string;
    mensaje: string;
}


export enum EnumEstadoPagina {
    CARGANDO,
    DATOS_CARGADOS,
    ERROR
}



export class EstadoPagina {
    detalleError: any;
    constructor(public estado: EnumEstadoPagina) {
    }

    setError(error) {
        this.estado = EnumEstadoPagina.ERROR;
        this.detalleError = error;
    }

    cargado() {
        return this.estado === EnumEstadoPagina.CARGANDO;
    }
    datosCargados() {
        return this.estado === EnumEstadoPagina.DATOS_CARGADOS;
    }
    error() {
        return this.estado === EnumEstadoPagina.ERROR;
    }
}

