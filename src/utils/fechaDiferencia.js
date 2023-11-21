export const fechaDiferencia = (fechaInicio, fechaFin) => {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = fechaFin ? new Date(fechaFin) : new Date()

    const diferencia = fechaFinObj - fechaInicioObj

    const minutos = Math.floor(diferencia / 60000)
    const horas = Math.floor(diferencia / 3600000)
    const dias = Math.floor(diferencia / 86400000)
    const meses = Math.floor(diferencia / 2629800000)

    if (meses > 0) {
        return `${meses} ${meses === 1 ? 'mes' : 'meses'}`
    } else if (dias > 0) {
        return `${dias} ${dias === 1 ? 'día' : 'días'}`
    } else if (horas > 0) {
        return `${horas} ${horas === 1 ? 'hora' : 'horas'}`
    } else {
        return `${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`
    }
}