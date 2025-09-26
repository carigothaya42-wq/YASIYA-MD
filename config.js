const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FNRkDI4K#9BLMoFXZnE1vSszX979m2fcTN8OiDXa4V60t9TTzJDE'
};
