const { PHASE_DEVELOPMENT_SERVER } = require(`next/constants`);

module.exports = () => {
    if (PHASE_DEVELOPMENT_SERVER) 
    return{

        env: {
            mongodb_username: 'test',
            mongodb_password: 'test123',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'test-dev'
        }
    } 
    return {
        env: {
            mongodb_username: 'test',
            mongodb_password: 'test123',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'test'
        }
    }          
};