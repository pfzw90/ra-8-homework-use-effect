
export default function dataLoader(file)  {
    return async function loadData() {
        let res;
        try {
            await fetch(
                file,
                {
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                }
            ).then(
                (result) => result.json())
                .then((data) => {
                    res = data;
            })

        } catch(e) {
            res = `Ошибка: ${e}`
        } finally {
            return res;
        }
    }
};
