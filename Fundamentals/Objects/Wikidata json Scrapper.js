const axios = require ('axios');
const headers = {
    'Accept-Encoding': 'gzip, deflate'
};
const wikidataScraper = async (url) => {
    try{
        const id = url.split('/').pop().replace('.json', '');
        const response = await axios.get(url, {headers});
        const entity = response.data.entities[id];
        const label = entity.labels?.en?.value || "No Label";
        const description = entity.descriptions?.en?.value || "No Description";

        return {
            id,
            label,
            description
        };
    } catch (error) {
        return {
            id: 'Unknown',
            label: 'No Label',
            description: 'No Description'
        };
    }
};
module.exports = wikidataScraper;