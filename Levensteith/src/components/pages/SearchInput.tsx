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

        <input type="search" onChange={handleChange}/>
        {nearestWord && <p> nearest word: {nearestWord}</p>}

        {recommendedWordList
        ? recommendedWordList.map((recommendedWord,index) => (
            <>
            <span  key={index}>{recommendedWord} ;</span>
           </>
            ))
        : <></>}

    </div>
  )
}

export default SearchInput