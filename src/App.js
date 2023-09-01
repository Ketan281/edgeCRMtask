
import './App.css';
import Accordion from './components/Accordion';
import React,{useState} from 'react';
function App() {
  const [accordion1Editable, setAccordion1Editable] = useState(true);
  const [accordion2Editable, setAccordion2Editable] = useState(false);
  const [accordion3Editable, setAccordion3Editable] = useState(false);
  const [accordion4Editable, setAccordion4Editable] = useState(false);
  const questionList = [{
    question:"This is dummy question no.1 for accordion 1?"
  }, 
  {
    question:"This is dummy question no.2 for accordion 1?"
  },
  {
    question:"This is dummy question no.3 for accordion 1?"
  },
  {
    question:"This is dummy question no.4 for accordion 1?"
  },
  {
    question:"This is dummy question no.5 for accordion 1?"
  }]
  const questionList2 = questionList.map((item,index)=>{
    return {question:item["question"].replace("accordion 1","accordion 2")}
  })
  const questionList3 = questionList.map((item,index)=>{
    return {question:item["question"].replace("accordion 1","accordion 3")}
  })
  const questionList4 = questionList.map((item,index)=>{
    return {question:item["question"].replace("accordion 1","accordion 4")}
  })
  const handleAccordion1Change = (answers) => {
    const allYesOrNA = answers.every(answer => answer === 'Yes' || answer === 'NA');
    setAccordion1Editable(!allYesOrNA);
  };
  const handleAccordion2Change = (answers) => {
    const allYesOrNA = answers.every(answer => answer === 'Yes' || answer === 'NA');
    setAccordion2Editable(!allYesOrNA);
  };
  const handleAccordion3Change = (answers) => {
    const allYesOrNA = answers.every(answer => answer === 'Yes' || answer === 'NA');
    setAccordion2Editable(!allYesOrNA);
  };
  const handleAccordion4Change = (answers) => {
    const allYesOrNA = answers.every(answer => answer === 'Yes' || answer === 'NA');
    setAccordion2Editable(!allYesOrNA);
  };
  
  return (
    <div className="App">
       {/* <h3>Ketan Mohite</h3> */}
       <Accordion 
       questionList={questionList} 
       title = {"Accordion No. 1"}
       editable={accordion1Editable}
       onChange={handleAccordion1Change}
   
       />
       <Accordion 
       questionList={questionList2} 
       title = {"Accordion No. 2"}
       editable={accordion2Editable}
       onChange={handleAccordion2Change}
       />
       <Accordion 
       questionList={questionList3} 
       title = {"Accordion No. 3"}
       editable={accordion3Editable}
       onChange={handleAccordion3Change}
       />
        <Accordion 
       questionList={questionList4} 
       title = {"Accordion No. 4"}
       editable={accordion4Editable}
       onChange={handleAccordion4Change}
       />
    </div>
  );
}

export default App;
