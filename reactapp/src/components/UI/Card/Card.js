import React, { useState } from 'react';
import Button from '../Button/Button';
let count=0;
const Card = ({key,
    question,
    correctAnswerMarkUpdate,
    attempt,
    options,
    answer}) => {
        const [state, setSate] = useState(false);
        function disableBtn(selectedOptions)
        {
            if(selectedOptions===answer){
                count=count+1;
                console.log(count);
            }
            setSate(true);
        }


        return (
            <div>
            <h4>
                {question}
            </h4>
            <Button onClick={()=>disableBtn(options.option1)} disabled = {state} >{options.option1}</Button>
            <Button onClick={()=>disableBtn(options.option2)} disabled = {state} >{options.option2}</Button>
            <Button onClick={()=>disableBtn(options.option3)} disabled = {state} >{options.option3}</Button>
            <Button onClick={()=>disableBtn(options.option4)} disabled = {state} >{options.option4}</Button>
            {(key===5 && state==='true')?<Button></Button>:""}
            </div>
        )
    }

    export default Card;