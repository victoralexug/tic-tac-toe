import { useState, useEffect } from "react";

export default function Dashboard({winingMessage, xplaying}) {

    // const [scores, setScores] = useState({xScores: 0, oScores: 0})

    // useEffect(() => {
    //       if(winingMessage === "x wins"){
    //           let {xScores} = scores
    //           xScores += 1
    //           setScores({ ...scores, xScores})
    //       } 
    //       if(winingMessage === "o wins"){
    //         let {oScores} = scores
    //         oScores += 1
    //         setScores({ ...scores, oScores})
    //       }
    //     }, [winingMessage])

    //     const {xScores, oScores} = scores

    const [oScores, setOscores] = useState(0)
    const [xScores, setXscores] = useState(0)
   
    useEffect(() => {
        {winingMessage === "x wins" && setXscores(() => xScores + 1)}
        {winingMessage === "o wins" && setOscores(() => oScores + 1)}
      }, [winingMessage]) 

    return(
      <div className="dashboard">
        <span className = {`score xscore ${!xplaying && "inactive"}`}> X = {xScores}</span> 
        <span className = {`score oscore ${xplaying && "inactive"}`}> O = {oScores}</span>
      </div>
    )
}