// Filtros de mensajes / Enfriamientos de mensajes
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1000);// 3 segundos es un retraso antes de procesar el siguiente comando;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};
