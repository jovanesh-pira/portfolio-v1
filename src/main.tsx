import { createRoot } from "react-dom/client";
import App from "./App/App"
import "./mainStyle.css"
const root =document.getElementById("root")

if(!root) throw new Error("need selected root element to creartRoot of files !")

createRoot(root).render(
    <>
    <App/>
    </>
)