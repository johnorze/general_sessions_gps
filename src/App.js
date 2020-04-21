import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { modifyPDF } from "./modifyPDF"

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as SurveyCore from "survey-core";
import * as SurveyPDF from "survey-pdf";
import * as widgets from "surveyjs-widgets";

import "pretty-checkbox/dist/pretty-checkbox.css";
//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");


class App extends Component {

  json = {
    title: "Tennessee General Sessions Protected Income & Assets",
    showProgressBar: "top",
    pages: [
      {
        questions: [ 
          {
            type: "dropdown",
            name: "court",
            title: "What court are you being sued in?",
            choices: [
              "1|General Sessions",
              "2|Juvenile & Family",
              "3|Chancery",
              "4|Criminal"
            ],
            isRequired: true,
          },
          {
            type: "dropdown",
            name: "county",
            title: "What county are you being sued in? (This is the county listed on your court papers.)",
            choices: [
              "1|Anderson",
              "2|Bedford",
              "3|Benton",
              "4|Bledsoe",
              "5|Blount",
              "6|Bradley",
              "7|Campbell",
              "8|Cannon",
              "9|Carroll",
              "10|Carter",
              "11|Cheatham",
              "12|Chester",
              "13|Claiborne",
              "14|Clay",
              "15|Cocke",
              "16|Coffee",
              "17|Crockett",
              "18|Cumberland",
              "19|Davidson",
              "20|Decatur",
              "21|DeKalb",
              "22|Dickson",
              "23|Dyer",
              "24|Fayette",
              "25|Fentress",
              "26|Franklin",
              "27|Gibson",
              "28|Giles",
              "29|Grainger",
              "30|Greene",
              "31|Grundy",
              "32|Hamblen",
              "33|Hamilton",
              "34|Hancock",
              "35|Hardeman",
              "36|Hardin",
              "37|Hawkins",
              "38|Haywood",
              "39|Henderson",
              "40|Henry",
              "41|Hickman",
              "42|Houston",
              "43|Humphreys",
              "44|Jackson",
              "45|Jefferson",
              "46|Johnson",
              "47|Knox",
              "48|Lake ",
              "49|Lauderdale",
              "50|Lawrence",
              "51|Lewis",
              "52|Lincoln",
              "53|Loudon",
              "54|Macon",
              "55|Madison",
              "56|Marion",
              "57|Marshall",
              "58|Maury",
              "59|McMinn",
              "60|McNairy",
              "61|Meigs",
              "62|Monroe",
              "63|Montgomery",
              "64|Moore",
              "65|Morgan",
              "66|Obion",
              "67|Overton",
              "68|Perry",
              "69|Pickett",
              "70|Polk",
              "71|Putnam",
              "72|Rhea",
              "73|Roane",
              "74|Robertson",
              "75|Rutherford",
              "76|Scott",
              "77|Sequatchie",
              "78|Sevier",
              "79|Shelby",
              "80|Smith",
              "81|Stewart",
              "82|Sullivan",
              "83|Sumner",
              "84|Tipton",
              "85|Trousdale",
              "86|Unicoi",
              "87|Union",
              "88|Van Buren",
              "89|Warren",
              "90|Washington",
              "91|Wayne",
              "92|Weakley",
              "93|White",
              "94|Williamson",
              "95|Wilson",
            ],
            isRequired: true,
          },
          {
            type: "text",
            name: "division",
            title: "If your case has a division number, enter it here. If not, leave it blank. (This is for large counties only.)",
            isRequired: false,
          },
          {
            type: "radiogroup",
            name: "filedBefore",
            title: "Have you ever filed a form to protect your assets and income from creditors before? This form is called an Affidavit of Claim Exemptions or Protected Income and Assets Form.",
            choices: [
              "1|Yes, I have filed a protected income and assets form before.",
              "2|No, I have not filed a protected income and assets form.",
            ],
            isRequired: true,
          },
          {
            type: "text",
            name: "fileNumber",
            title: "What is the file number of your case? (This number should be listed on papers you got about your case.)",
            isRequired: true,
          },
          {
            type: "text",
            name: "defendantName",
            title: "Please enter your full name (First Middle Last).",
            isRequired: true,
          },
          {
            type: "text",
            name: "plaintiffName",
            title: "Please enter the full name of the plaintiff/creditor. (This is the person or company who is suing you.)",
            isRequired: true,
          },
        ],
      },
      {
        elements: [ 
          {
            type: "comment",
            name: "autoDescription",
            title: "What car, truck, or other vehicle, do you have? (Year, make, model)",
            maxLength: 50,
          },
          {
            type: "text",
            name: "autoValue",
            title: "How much is the car, truck, or other vehicle worth?"
          },
          {
            type: "comment",
            name: "furnitureDescription",
            title: "What furniture and electronics do you own? (You could say things like: 36 inch TV, queen size matress and bed frame, iPad, Dell PC, etc.)",
          },
          {
            type: "text",
            name: "furnitureValue",
            title: "How much are these electronics and furniture worth?"
          },        
          {
            type: "comment",
            name: "householdGoodsDescription",
            title: "What household goods do you own? (You could say things like: dishes, towels, linens, etc.)",
          },
          {
            type: "text",
            name: "householdGoodsValue",
            title: "How much are your household goods worth?"
          }, 
          {
            type: "multipletext",
            name: "bankAccounts",
            title: "Questions about your bank account.",
            items: [
              {
                name: "bank1",
                title: "What is the name of your bank?"
              },
              {
                name: "bank1Balance",
                title: "How much money do you have in this bank account?"
              },
              {
                name: "bank2",
                title: "If you have a second bank account, what is the name of that bank? (Skip if you do not have a second bank.)"
              },
              {
                name: "bank2Balance",
                title: "How much money do you have in your second bank account? (Skip if you do not have a second bank.)"
              },
            ]
          }, 
          {
            type: "comment",
            name: "otherDescription",
            title: "What other items do you own?",
          },
          {
            type: "text",
            name: "otherValue",
            title: "How much are these other items worth?"
          },
          {
            type: "comment",
            name: "toolsDescription",
            title: "Do you own any tools of the trade? These are things that you need to make a living. Describe them below.",
          },
          {
            type: "text",
            name: "toolsValue",
            title: "How much are these tools of the trade worth?"
          },
          {
            type: "cash",
            name: "cashValue",
            title: "How much cash do you have?"
          }
          ],
        },
        {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              'Thank you! Your browser will now download a copy of the form you can file with your court. Please review it carefully.'
          }
        ]
      }
    ]
  };
    

  onValueChanged(result) {
    console.log("value changed!");
    console.log(result.data)
  }

  onComplete(result) {
    console.log(result.data);
    modifyPDF(result.data)
 
    
    }

    savePDF = model => {
      var surveyPDF = new SurveyPDF.SurveyPDF(this.json);
      surveyPDF.data = model.data;
      surveyPDF.save();
    };  

  

  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tennessee Justice Center</h2>
        </div>
        <div className="surveyjs">
          {/*If you do not want to show survey, comment the lines below*/}
          <h1>General Sessions GPS </h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />

          {/*If you do not want to show save PDF button, comment the lines below
          <h3>SurveyPDF export:</h3>
          <button onClick={() => this.savePDF(model)}>Save PDF</button>*/}
          {/*If you do not want to show Survey Creator, comment the lines below*/}
          {/*<h1>SurveyJS Creator in action:</h1>
          <SurveyCreator />*/}
        </div>

      </div>
    );
  }
}

export default App;
