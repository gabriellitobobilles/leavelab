'use strict';
const access= require('../testdata/RockTestdata.js')

var xSelector = function (selector) {
  return {
      selector: selector,
      locateStrategy: 'xpath'
  }
};

var qSelector = function () {
      return Math.floor(Math.random() * 5) + 1
};

const CompanyNameGenerator= function () {
  const values = Object.values(access.companyName)
  const randomValue = values[parseInt(Math.random() * values.length)]
  return randomValue
};

module.exports = {

  url: function() {
    return this.api.launchUrl;
  },


  elements: {

          usernameField: xSelector(`//input[@name='email']`),
          passwordField: xSelector(`//input[@name='password']`),     
          loginbutton: 'button[type=submit]',
          nxtbutton: xSelector("//button[contains(text(),'Next')]"),  
          start_new_report: `.btn-primary`,
          report_button: xSelector(`//*[@id="main-wrapper"]/div[2]/div[2]/div/div[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/button`),    
          submit: xSelector(`//button[contains(text(),'Submit')]`),   
          Steps_2_radio_button_yes_button: xSelector(`//*[@id="radio-1"]/div[1]/label/span`),
          Steps_2_radio_button_no_button: xSelector(`//*[@id="radio-1"]/div[2]/label/span`),
          Steps_3_radio_button_yes_upper: xSelector(`//*[@id="radio-6"]/div[1]/label/span`),
          Steps_3_radio_button_yes_lower: xSelector(`//*[@id="radio-11"]/div[1]/label/span`),
          Steps_3_radio_button_no_upper: xSelector(`//*[@id="radio-6"]/div[2]/label/span`),
          Steps_3_radio_button_no_lower: xSelector(`//*[@id="radio-11"]/div[2]/label/span`), 
          Steps_4_radio_button_yes_upper: xSelector(`//*[@id="radio-15"]/div[1]/label/span`),
          Steps_4_radio_button_yes_ahead_lower: xSelector(`//*[@id="radio-18"]/div[1]/label/span`),
          Steps_4_radio_button_no_upper: xSelector(`//*[@id="radio-15"]/div[2]/label/span`),
          Steps_4_radio_button_no_behind_lower: xSelector(`//*[@id="radio-18"]/div[2]/label/span`),  
          Last_steps_radio_button_yes_upper: xSelector(`//*[@id="radio-23"]/div[1]/label/span`),
          Last_steps_radio_button_yes_lower: xSelector(`//*[@id="radio-29"]/div[1]/label/span`),
          Last_steps_radio_button_no_upper: xSelector(`//*[@id="radio-23"]/div[2]/label/span`),
          Last_steps_radio_button_no_lower: xSelector(`//*[@id="radio-29"]/div[2]/label/span`),
          pageElement:xSelector(`//span[contains(text(),'Weekly Floor Report')]`),
          selectClientOption: `#select-client_id`,
          CreateFAQ: xSelector(`//button[contains(text(),'Create FAQ')]`),
          modal:  xSelector(`//*[@id="__BVID__79"]/div/div[1]/div[2]/div/p`),

          /** Performance Evaluation Review */

          startDate:`#__BVID__60`,
          endDate: `#__BVID__64`,
          pageElementPA:xSelector(`//span[contains(text(),'Performance Evaluation Review')]`),
          userPic: xSelector(`//*[@class='fs-user-photo align-self-center']`),
          editor1: `#__BVID__90 > div > div.editor > div.editor__content > div`,
          editor2: `#__BVID__96 > div > div.editor > div.editor__content > div`,
          
          /**step4 */
          skill_and_profiency_editor: `#__BVID__102 > div > div.editor > div.editor__content > div`,
          skill_and_profiency_radio: xSelector(`//*[@id="radio-skill_and_profiency"]//child::div[${qSelector()}]/label/span`),
          skills_and_knowledge_radio: xSelector(`//*[@id="radio-skills_and_knowledge"]//child::div[${qSelector()}]/label/span`),
          skills_and_knowledge_editor: `#__BVID__118 > div > div.editor > div.editor__content > div`,
          radio_reliability_radio: xSelector(`//*[@id="radio-reliability"]//child::div[${qSelector()}]/label/span`),
          radio_reliability_editor: `#__BVID__134 > div > div.editor > div.editor__content > div`,
          radio_self_accountable_radio: xSelector(`//*[@id="radio-self_accountable"]//child::div[${qSelector()}]/label/span`),
          radio_self_accountable_editor: `#__BVID__150 > div > div.editor > div.editor__content > div`,
          radio_methods_and_procedures_radio: xSelector(`//*[@id="radio-methods_and_procedures"]//child::div[${qSelector()}]/label/span`),
          radio_methods_and_procedures_editor: `#__BVID__166 > div > div.editor > div.editor__content > div`,
          radio_communicate_effective_radio: xSelector(`//*[@id="radio-communicate_effective"]//child::div[${qSelector()}]/label/span`),
          radio_communicate_effective_editor: `#__BVID__182 > div > div.editor > div.editor__content > div`,

          /** step 5 */
          radio_work_cooperatively_radio: `#radio-work_cooperatively`,
          radio_work_cooperatively_editor: `#__BVID__197 > div > div.editor > div.editor__content > div`,
          radio_positive_attitude_radio: xSelector(`//*[@id="radio-positive_attitude"]//child::div[${qSelector()}]/label/span`),
          radio_positive_attitude_editor: `#__BVID__212 > div > div.editor > div.editor__content > div`,
          radio_good_judgment_radio: xSelector(`//*[@id="radio-good_judgment"]//child::div[${qSelector()}]/label/span`),
          radio_good_judgment_editor: `#__BVID__227 > div > div.editor > div.editor__content > div`,
          radio_perform_expect_radio: xSelector(`//*[@id="radio-perform_expect"]//child::div[${qSelector()}]/label/span`),
          radio_perform_expect_editor: `#__BVID__242 > div > div.editor > div.editor__content > div`,
          

  },



  commands: [{

    PerformanceEval: function() {

      const page = this;
       
              page.pause(1000)
              page.click(`@startDate`)
              page.setValue(`@startDate`, `01/01/2020`)
              page.pause(1000)
              page.click(`@endDate`)
              page.setValue(`@endDate`, `04/20/2020`)
              page.pause(1000)
              page.click(`@userPic`)
              page.pause(1000)
              page.click(`@nxtbutton`)
              /** step 2 */
              page.pause(1000)
              page.click(`@editor1`)
              page.pause(1000)
              page.setValue(`@editor1`,`test`)
              page.pause(1000)
              page.click(`@editor2`)
              page.pause(1000)
              page.setValue(`@editor2`,`test`)
              page.click(`@nxtbutton`)
              /** step 3 */
              page.click(`@nxtbutton`)
              /** step 4 */
              page.pause(1000)
              page.click(`@skill_and_profiency_radio`)
              page.click(`@skill_and_profiency_editor`)
              page.setValue(`@skill_and_profiency_editor`,`test`)
              page.pause(1000)
              page.click(`@skills_and_knowledge_radio`)
              page.click(`@skills_and_knowledge_editor`)
              page.setValue(`@skills_and_knowledge_editor`,`test`)
              page.pause(1000)
              page.click(`@radio_reliability_radio`)
              page.click(`@radio_reliability_editor`)
              page.setValue(`@radio_reliability_editor`,`test`)
              page.pause(1000)
              page.click(`@radio_self_accountable_radio`)
              page.click(`@radio_self_accountable_editor`)
              page.setValue(`@radio_self_accountable_editor`,`test`)
              page.pause(1000)
              page.click(`@radio_methods_and_procedures_radio`)
              page.click(`@radio_methods_and_procedures_editor`)
              page.setValue(`@radio_methods_and_procedures_editor`,`test`)
              page.pause(1000)
              page.click(`@radio_communicate_effective_radio`)
              page.click(`@radio_communicate_effective_editor`)
              page.setValue(`@radio_communicate_effective_editor`,`test`)
              page.click(`@nxtbutton`)
              /** step 5 */
              page.pause(2000)

              page.moveToElement(`@radio_work_cooperatively_radio`, 1305, 636);
              page.click(`@radio_work_cooperatively_radio`)
              // page.pause(1000)
              // page.click(`@radio_work_cooperatively_editor`)
              // page.pause(1000)
              // page.setValue(`@radio_work_cooperatively_editor`,`test`)
              // page.pause(1000)

              // page.click(`@radio_positive_attitude_radio`)
              // page.click(`@radio_positive_attitude_editor`)
              // page.setValue(`@radio_positive_attitude_editor`,`test`)
              // page.pause(1000)
              // page.click(`@radio_good_judgment_radio`)
              // page.click(`@radio_good_judgment_editor`)
              // page.setValue(`@radio_good_judgment_editor`,`test`)
              // page.pause(1000)
              // page.click(`@radio_perform_expect_radio`)
              // page.click(`@radio_perform_expect_editor`)
              // page.setValue(`@radio_perform_expect_editor`,`test`)
              // page.pause(1000)

              // page.click(`@nxtbutton`)
              page.pause()



      return this;
      
    },

    login: function() {

      const page = this;
       
              page.maximizeWindow()
              page.pause(5000)
              page.click(`@usernameField`)
              page.pause(1000)
              page.setValue(`@usernameField`,`ccabang@fullscale.io`)
              page.pause(1000)
              page.click(`@passwordField`)
              page.pause(1000)
              page.setValue(`@passwordField`,`E7c%H451@%$b`)
              page.pause(5000)
              page.click(`@loginbutton`)
              page.pause(5000)
              page.assert.elementPresent(`@pageElement`)

      return this;
      
    },

    Clientlogin: function() {

      const page = this;
       
              page.maximizeWindow()
              page.pause(5000)
              page.click(`@usernameField`)
              page.pause(1000)
              page.setValue(`@usernameField`,access.userCredential.realClientEmail)
              page.pause(1000)
              page.click(`@passwordField`)
              page.pause(1000)
              page.setValue(`@passwordField`,access.userCredential.realClientPassword)
              page.pause(5000)
              page.click(`@loginbutton`)
              page.pause(5000)
              page.assert.elementPresent(`@pageElementPA`)

      return this;
      
    },

    dashboard: function(value) {

      const page = this;

            page.pause(5000)
            page.click(xSelector(`//span[contains(text(),\'${value}\')]`))
            

      return this;
      
    },

    step1: function() {

      const page = this;

       
            page.pause(20000)
            page.assert.elementPresent(`@selectClientOption`)
            page.click(`select[id="select-client_id"] option[value="${CompanyNameGenerator()}"]`)
            page.pause(2000)
            page.click(`@nxtbutton`)
       
      return this;
      
    },

    step2: function() {

      const page = this;
      
            page.pause(1000)
            page.click(`@Steps_2_radio_button_yes_button`)
            page.pause(1000)
            page.click(`@nxtbutton`)
             

      return this;
      
    },

    step3: function() {

      const page = this;

            page.pause(1000)
            page.click(`@Steps_3_radio_button_no_upper`)
            page.pause(1000)
            page.setValue(`#textarea-7`, access.textAreaString)
            page.pause(1000)
            page.setValue(`#textarea-8`, access.textAreaString)
            page.pause(1000)
            page.setValue(`#textarea-9`, access.textAreaString)
            page.pause(1000)
            page.setValue(`#textarea-10`, access.textAreaString)
            page.pause(1000)
            page.click(`@Steps_3_radio_button_no_lower`)
            page.pause(1000)
            page.assert.not.elementPresent(`#textarea-12`)
            page.pause(1000)
            page.click(`@Steps_3_radio_button_yes_lower`)
            page.pause(1000)
            page.assert.elementPresent(`#textarea-12`)
            page.pause(1000)
            this.api.element('css selector', `#textarea-12`, function(result){
              if(result.status != -1){
                page.setValue(`#textarea-12`, access.textAreaString)
                page.pause(1000)
                page.setValue(`#textarea-13`, access.textAreaString)
                page.pause(1000)
                page.setValue(`#textarea-14`, access.textAreaString)
                page.pause(1000)
              } else{
                  //Element does not exist, do something else
              }
          });

          page.click(`@nxtbutton`)
             

      return this;
      
    },

    step4: function() {
      const page = this;

            page.pause(1000)
            page.click(`@Steps_4_radio_button_yes_upper`)
            page.pause(1000)
            page.click(`@Steps_4_radio_button_yes_ahead_lower`)
            page.pause(1000)
            page.click(`@nxtbutton`)

      return this;
      
    },

    Laststep: function() {

      const page = this;

            page.pause(1000)
            page.click(`@Last_steps_radio_button_no_upper`)
            page.pause(1000)
            
            page.setValue(`#textarea-28`, access.textAreaString)
            page.pause(1000)
            page.click(`@Last_steps_radio_button_yes_lower`)
            page.pause(1000)
            page.assert.elementPresent(`#textarea-30`)
            page.pause(2000)
            page.click(`@Last_steps_radio_button_no_lower`)
            page.pause(1000)
            page.assert.not.elementPresent(`#textarea-30`)
            page.pause(1000)
            this.api.element('css selector', '#textarea-30', function(result){
              if(result.status != -1){
                page.setValue(`#textarea-30`, access.textAreaString)
                page.pause(1000)
                page.setValue(`#textarea-31`, access.textAreaString)
                page.pause(1000)
                page.setValue(`#textarea-32`, access.textAreaString)
                page.pause(1000)
                page.setValue(`#textarea-33`, access.textAreaString)
                page.pause(1000)
              } else{
                  //Element does not exist, do something else
              }
          });

            page.click(`@submit`)
            page.pause(2000)
            page.assert.elementPresent(`@start_new_report`)

      return this;
      
    },

    Start_New_weekly_floor_report: function() {

      const page = this;

            page.pause(2000)
            page.click(`@report_button`)
            page.pause(3000)
            page.assert.elementPresent(`@selectClientOption`)
            page.click(`select[id="select-client_id"] option[value="${CompanyNameGenerator()}"]`)
            page.pause(2000) 
            page.click(`@nxtbutton`)

      return this;
      
    },
    FAQ: function() {

      const page = this;

            page.pause(2000)
            page.assert.elementPresent(`@CreateFAQ`)
            page.click(`@CreateFAQ`)
            page.click(`@modal`)
            page.setValue(`@modal`,`test45`)
            


      return this;
      
    },
    
  }],


};