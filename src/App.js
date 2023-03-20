import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageShow from "./Components/ImageShow";
import ImageList from "./Components/ImageList";
import searchImages from "./api";

export default function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}