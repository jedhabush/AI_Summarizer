import { useState, useEffect } from "react"
import {copy, linkIcon, loader, tick} from '../assets'

const Demo = () => {
const [article, setArticle] = useState({
    url:"",
    summary:""
})

const handleSubmit = async (e)=>{

}

return (
<section className="mt-16 w-full max-w-xl">
{/* search*/}
<div className="flex flex-col w-full gap-2">
<form action="" className="relative flex justify-center items-center" onSubmit={handleSubmit}>

<img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>

<input type="url" 
placeholder="Enter URL" 
value={article.url}
onChange={(e)=> setArticle({...article, url: e.target.value})} 
required 
className="url_input peer"
/>
<button 
type="submit" 
className="submit_btn peer-focus:gray-700 peer-focus:text-700">
Enter
</button>
</form>
{/* Browse URL history */}


</div>

{/* Display Results */}

</section>
)
}

export default Demo