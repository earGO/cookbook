const urlConstructor = (url_base,url_main,payload_id) => {
    return url_base+url_main+payload_id.toString();
};

module.exports = {
    urlConstructor
}