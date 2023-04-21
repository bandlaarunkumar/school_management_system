import {BrowserRouter,Switch,Route,Link,useNavigate} from "react-router-dom"
import {useState} from 'react';
import News from './News'
function Nav()
{
  const [text,setText]=useState("");
  const navi = useNavigate();


  const handleEvent= (event) =>{
   console.log("handleEvent");
   setText(event.target.value);
   

 }
 const searchText = () =>{
  <Link  to="/{text}">{text}</Link>


 }
let n=<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-success">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">NewsApi</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 hover:text-gray-900" to="/International" onClick={()=>navi(  <News newsName="international" />
      )}>International</Link>
      <Link class="mr-5 hover:text-gray-900" to="/National">National</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Health">Health</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Business">Business</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Sports">Sports</Link>
     
    </nav>
    <input type="text" className="text-base" placeholder="search here" value={text} onChange={handleEvent} class="form-control input-sm border-orange-500 w-25 p-2 mr-5"  />
    <button class="inline-flex items-center bg-gray-100 border-0 py-3 px-3 mb-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={searchText}>Search
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
return n;
}
export default Nav;