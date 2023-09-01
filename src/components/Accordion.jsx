import React, { useState } from 'react'
import "./accordion.css"

const Accordion = ({questionList,title,editable, onChange}) => {
  const [isCollapsed,setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(editable);
  const [answers, setAnswers] = useState(Array(questionList.length).fill('No'));
  const handleClick = ()=>{
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed,"kmjnhbgvf");
  }
  
  const handleSubmit = ()=>{
    onChange(answers);
    setIsEditing(false);
  }
  const handleCancel = () => {
    setAnswers(Array(questionList.length).fill('No'));
    setIsEditing(false);
  };
  const handleRadioChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    onChange(newAnswers);
  };
  return (
    <div>
        <div className="container">
          <div className='header' onClick={handleClick}>
              <p className='question'>{title}</p>
              <b className='arrow'>{!isCollapsed ? "v" : "^"}</b>
          </div>
          {
            isCollapsed && (
              <div className='questionArea'>
               <form>
                {
                  questionList.map((item,index)=>{
                    return(
                      <div key={index}>
                      <p className='question'>
                        {item.question}
                      </p>
                      <p className='radio'>
                        <div>
                      <input type="radio" id="Yes"  value="Yes" name={`${index}`} onChange={() => handleRadioChange(index, 'Yes')}/>
                      <label htmlFor="Yes">Yes</label>
                      </div>
                      <div>
                      <input type="radio" id="No"  value="No" name={`${index}`} checked onChange={() => handleRadioChange(index, 'No')}/>
                      <label  htmlFor="No">No</label>
                      </div>
                      <div>
                      <input type="radio" id="NA"  name={`${index}`} value="NA" onChange={() => handleRadioChange(index, 'NA')}/>
                      <label  htmlFor="NA">NA</label>
                      </div>
                      </p>
                      </div>
                    )
                  })
                }
               {
                isEditing && (
                  <>
                   <button onClick={handleSubmit}><p style={{color:"yellowgreen"}}>Save</p></button>
                  <button type="reset" onClick={handleCancel}>Cancel</button>
                  </>
                )
               }
                </form>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default Accordion