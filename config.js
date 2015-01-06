/**
 * This is a sample configuration meant to get users and up running on a local 
 * machine.  The configuration will not support multi-process on a single 
 * server or multi-server/elastic environments.  For more detailed information 
 * on the options provided please refer to the /include/config.js file.
 * 
 * The file can be renamed to "config.js" in the same directory as this file 
 * and it will be used as the configuration when PencilBlue is started.  If 
 * this file is used then there is no need to create a "config.json"
 */

module.exports = {
   "siteName": "Bitcot Technologies",
    "siteRoot": "http://bitcot.herokuapp.com",
    "siteIP": "bitcot.herokuapp.com",
    "log_level": "info",
     "db": {
        "type":"mongo",
        "servers": [
          "mongodb://dogen.mongohq.com:10083/bitcot-test/"
        ],
        "name": "bitcot-test",
        "authentication": {
            "un": "bitcot",
            "pw": "bitcot"
        },
        "writeConcern": 1
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    }
};
