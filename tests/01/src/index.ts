import {getBaseEmail} from './services/email';
getBaseEmail("André").then(
    function(ret) {
        console.log(ret);
    }
);

