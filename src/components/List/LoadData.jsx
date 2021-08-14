
export default function dataLoader(file, setLoading, setData)  {
    return async function loadData() {

        setLoading(true)
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
                    setData(data);
            })

        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
};
