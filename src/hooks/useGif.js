import axios from "axios";
import { useEffect, useState } from "react";

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loader,setLoader] = useState(false);

    const fetchGif = async () => {
        setLoader(true);

        let url;
        if(tag){
            url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=${tag}`;
        }else{
            url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
        }

        const response = await axios.get(url);
        const gifUrl = response.data.data.images.downsized_large.url;
        setGif(gifUrl);
        console.log(gifUrl);
        setLoader(false);
    };

    useEffect(() => {
        fetchGif();
    }, [])

    return {gif,loader,fetchGif};
};

export default useGif;
