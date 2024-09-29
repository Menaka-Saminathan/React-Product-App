import { JSXElementConstructor } from "react";

function Authenticate(OriginalComponents: JSXElementConstructor<any>) {
    const isValid = true;
  return (
    function () {
        if (!isValid) {
            return (<h2>Invalid User. Check for the details</h2>)
        }
        return <OriginalComponents/>
    }
  )
}

export default Authenticate
