import { ChangeEvent, useState } from "react"
import { findClosestMatch } from "../../utils/helper-functions/levenshteinDistance";
import { wordList } from "../../utils/enums";



function SearchInput() {

    const [nearestWord, setNearestWord] =useState<null|String>(null)
    const [recommendedWordList, setRecommendedWordList] = useState<null|String[]>(null)
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
const searchWord = e.target.value;
const {closestMatch, recommendewords} = findClosestMatch(searchWord,wordList)
setNearestWord(closestMatch)
setRecommendedWordList(recommendewords)
    }


  return (
    <div>
     <legend aria-label="Type your keyword"> Type your keyword </legend>
        <input  style= {{marginTop:'14px'}}type="search" onChange={handleChange}/>
      
        {nearestWord && <p>  nearest word: <span style = {{color:'greenyellow'}}>{nearestWord}</span></p>}

<div>
    <p> Recommended Words: </p>
        {recommendedWordList && recommendedWordList.length > 0
        ? recommendedWordList.map((recommendedWord,index) => (
            <>
            <span  key={index}>{recommendedWord} {' '}</span>
           </>
            ))
        : <> <p> No recommended Words</p></>}
        </div>

    </div>
  )
}

export default SearchInput