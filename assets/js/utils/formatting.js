

function formatName(name) {
    name = name.toLowerCase();
    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[\s-]/g, "");

    return name;
}

const _formatName = formatName;
export { _formatName as formatName };