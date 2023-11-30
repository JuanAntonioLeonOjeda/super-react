import { Outlet } from "react-router-dom";

import AppBarComponent from "../components/AppBarComponent/AppBarComponent"

function Root () {
  return (
    <>
    <AppBarComponent />
    <Outlet />
    </>
  )
}


export default Root