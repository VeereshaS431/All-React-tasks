import { DNA, FallingLines } from "react-loader-spinner"

const CustomSpinner=()=>{
    return(
        <DNA
  visible={true}
  height="250"
  width="250"
  ariaLabel="dna-loading"
  wrapperClass="dna-wrapper"
  />)
{/* <FallingLines
//   color="red"
  width="200"
  visible={true}
  ariaLabel="falling-circles-loading"
  /> */}
    // )
}
export default CustomSpinner