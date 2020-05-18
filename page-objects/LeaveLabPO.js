'use strict';
const access= require('../testdata/LeaveLabTestdata.js')
var assert = require('assert');
const { callbackify } = require('util');
const monthYearTitle = `@datepicket`;
var usename;
var xSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: 'xpath'
    }
  };


const EmployeeNameGenerator= function () {
    const values = Object.values(access.employeeName)
    const Keys = Object.keys(access.employeeName)
    const randomValue = values[parseInt(Math.random() * values.length)]
    const randomKeys = Keys[parseInt(Math.random() * Keys.length)]
    return [randomValue,randomKeys]
  };
  
const CompanyNameGenerator= function () {
    const values = Object.values(access.companyName)
    const randomValue = values[parseInt(Math.random() * values.length)]
    return randomValue
  };


const timeZone= function () {
    const values = Object.values(access.timezone)
    const zoneTime = values[parseInt(Math.random() * values.length)]
    return zoneTime
};
  
const mailator= function () {
    var mailextention= Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
    // var mailextention= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return `gbobilles+`+mailextention+`@mavvo.com`
  };

const strgen= function () {

    // var strgen=Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
     var strgen= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return strgen
};
  
const selectCalendarMonthYear= (dateToSelect) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const year = dateToSelect.getFullYear();
  const month = months[dateToSelect.getMonth()];
  const day = dateToSelect.getDate();
 console.log(month,day,year)

  selectYear({ year, month });
  selectMonth(month);
  selectDay(day);
};

const selectYear = (date) => {
  monthYearTitle.getText().then(text => {
    if (text.split(' ')[1] !== date.year.toString()) {
      monthYearTitle.click(); browser.sleep(500);
      monthYearTitle.click(); browser.sleep(500); // page is using the same element for calender header
      getCalendarElemByTxt(date.year.toString(), '1').click(); browser.sleep(500);
      getCalendarElemByTxt(date.month, '2').click(); browser.sleep(500);
      selectMonth(date.month);
    }
  });
};

const selectMonth = (month) =>{
  monthYearTitle.getText().then(text => {
    if (text.split(' ')[0] !== month) { // check if default is same as expected
      monthYearTitle.click(); browser.sleep(500);
      getCalendarElemByTxt(month, '3').click(); browser.sleep(500);
    }
  });
  browser.sleep(800);
};

const selectDay = (dayToSelect) =>{
  const day = dayToSelect < 10
    ? '0' + dayToSelect : dayToSelect;

  const days = element.all(by
    .xpath(`//*[@ng-repeat=\'dt in row\']/button/span[contains(text(),\'${day}\')]`));

  days.filter(dayNum => {
    return dayNum.getAttribute('class').then(attr => {
      return !attr.includes('text-muted');
    });
  }).first().click();
};

const getCalendarElemByTxt = (text, str) =>{
  const calendarTile = $$(`[ng-click="select(dt.date)"]`);
  return calendarTile.filter(tile => {
    return tile.getText().then(toSelect => {
      return toSelect === text;
    });
  }).first();
};


module.exports = {



  
    
  url: function() {
    this.api.deleteCookies()
    return this.api.launchUrl;
  },


  elements: {

         /**login page */
          usernameField: `input[id="email_inp"]`,
          passwordField: `input[id="pass_inp"]`,     
          loginbutton: `#submit_login`,    

         /** Company registration */ 
          registerNewBtn: `.btn-outline-green`,
          continueBtn: `#continue_registration`,
          submitRegistrationBtn: `#submit_registration`,
          SupervisorNametxtField: `#name_inp`,
          SupervisorLastNametxtField: `#lastname_inp`,
          SupervisorEmailtxtField: `#email_inp`,
          SupervisorPasswordtxtField: `#pass_inp`,
          SupervisorConfirmPasswordtxtField: `#confirmed_pass_inp`,
          companyNametxtField: `#company_name_inp`,
          
          

        /** Department registration */ 

          addNewDeptBtn: `#add_new_department_btn`,
          newDeptNametxtField: `#department_name_new`,
          supervisorDropdownOptions: 'select[id="department_superwiser_new"]',
          deptAllowanceOptions: 'select[id="department_allowance_new"]',

          /** Create Employee */ 
          teamViewMenuBtn: xSelector("//a[text()='Team View']"),
          addNewEmployeebtn: `a.btn.btn-white.btn-lg`,
          employeePasswordtxtField: `#password_inp`,
          employeeComfirmPasswordtxtField: `#confirm_password_inp`,
          saveNewEmployeebtn: `#add_new_user_btn`,
          timezoneOption: `select[id="preferred_timezone"]`,
          deptOption: 'select[id="select_inp"]',

          /** Create leave request */
          mycalendarViewMenuBtn: xSelector("//a[text()='My Calendar']"),   
          leaveType: `select[id="leave_type"]`,
          leaveRequestBtn: `#book_time_off_btn`,
          leaveReason: `#leave_reason`,
          createLeaveBtn: `#createLeaveRequest`,
          denyBtn: `button.btn.btn-red.view-leave-comment`,
          approvedBtn: `input.btn.btn-green`,
          denyCommentbox: `#approver_comment`,
          submitbutton: 'button[type=submit]',

          /** Miscellanios*/
          success: `.alert-success`,
          saveBtn: `button[type=submit]`,
          blockOutDatesBtn: `.blackout-btn`,
          getLeaveAllowance: xSelector(`//*[@id="calendar_list"]//child::div[6]/p`),
          moveLIke: `li#settings_menu.dropdown-hidden-xs`,

          leavefrom: `#leave_from`,
          datepicket: `.datepicker-switch`,

          
    
  },


  commands: [{

    getElementTextFromPage: async function ()  {
      return this.waitForElementPresent('@getLeaveAllowance')
          .getText('@getLeaveAllowance', function(result){
              return result.value;
          });
    },

    CreatCompany: function() {

      const page = this;


                page.maximizeWindow()
                page.click(`@registerNewBtn`) //Clicking register new company button
                page.pause(1000)
                page.assert.elementPresent(`@continueBtn`)
                page.pause(1000)
                page.click(`@SupervisorNametxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorNametxtField`,EmployeeNameGenerator()[0])
                page.pause(1000)
                page.click(`@SupervisorLastNametxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorLastNametxtField`,EmployeeNameGenerator()[1])
                page.pause(1000)
                page.click(`@SupervisorEmailtxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorEmailtxtField`, mailator())
                page.pause(1000)

                page.getValue(`@SupervisorEmailtxtField`, function(result){
                      usename = result.value;
                })

                page.pause(1000)
                page.click(`@SupervisorPasswordtxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorPasswordtxtField`, access.userCredential.clienPassword)
                page.pause(1000)
                page.click(`@SupervisorConfirmPasswordtxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorConfirmPasswordtxtField`, access.userCredential.clienPassword)
                page.pause(1000)
                page.click(`@continueBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@submitRegistrationBtn`)
                page.pause(1000)
                page.click(`@companyNametxtField`)
                page.pause(1000)
                page.setValue(`@companyNametxtField`,CompanyNameGenerator())
                page.pause(1000)
                page.click(`@submitRegistrationBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@leaveRequestBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@blockOutDatesBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@success`)
                page.pause(1000)
                page.assert.containsText(`@success`, `Registration is complete.`)
                page.pause(1000)
                
      return this;
      
    },


    leavetype: function(type) {

      const page = this;
      page.setValue(`select[id="leave_type"]`,`${type}`)
      return this;
      
    },



    RequestleaveAccepted: function() {
      
      const page = this;
                page.navigate(`https://staging.leavelab.com/requests/`)
                page.pause(1000)
                page.assert.elementPresent(`@denyBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@approvedBtn`)
                page.pause(1000)
                page.click(`@approvedBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@success`)
                page.pause(1000)
      
      return this;
      
    },

    RequestleaveDenied: function() {

      const page = this;
                page.navigate(`https://staging.leavelab.com/requests/`)
                page.pause(1000)
                page.assert.elementPresent(`@denyBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@approvedBtn`)
                page.pause(1000)
                page.click(`@denyBtn`)
                page.pause(1000)
                page.assert.elementPresent(`@denyCommentbox`)
                page.pause(1000)
                page.setValue(`@denyCommentbox`, `This is just a test`)
                page.pause(1000)
                page.click(`@submitbutton`)
                page.pause(2000)
                page.assert.elementPresent(`@success`)
                page.pause(1000)
      
      return this;
      
    },

    calendarPage: function(){

      const page = this;
      page.pause(2000)
      page.click(`@mycalendarViewMenuBtn`)
      page.pause(2000)

      page.getText(`@getLeaveAllowance`, function(result){
          console.log (result.value)
          })


      return this;

    },

    CreateDepartment: function() {

        const page = this;
  
                page.navigate(`https://staging.leavelab.com/settings/departments/`)
                page.pause(3000)
                page.click(`@addNewDeptBtn`)
                page.pause(300)
                page.assert.elementPresent(`@saveBtn`)
                page.click(`@newDeptNametxtField`)
                page.pause(300)
                page.setValue(`@newDeptNametxtField`,`COVID`+strgen())
                page.pause(300)
                page.setValue(`@supervisorDropdownOptions`,'Leo Duterte')
                page.setValue(`@deptAllowanceOptions`,`30
                `)
                page.pause(3000)
                page.click('@saveBtn')
                page.pause(300)
                page.assert.elementPresent(`@success`)
                page.assert.containsText(`@success`, `Changes to departments were saved`)

  
  
        return this;
        
      },

    CreateEmployee: function() {

        const page = this;
  
              
                page.click(`@teamViewMenuBtn`)
                page.pause(1000)
                page.click(`@addNewEmployeebtn`)
                page.pause(1000)
                page.assert.elementPresent(`@SupervisorNametxtField`)
                page.assert.elementPresent(`@SupervisorNametxtField`)
                page.pause(1000)
                page.click(`@SupervisorNametxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorNametxtField`, EmployeeNameGenerator()[0])
                page.pause(1000)
                page.click(`@SupervisorLastNametxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorLastNametxtField`, EmployeeNameGenerator()[1])
                page.pause(1000)
                page.click(`@SupervisorEmailtxtField`)
                page.pause(1000)
                page.setValue(`@SupervisorEmailtxtField`,mailator())
                page.pause(1000)
                page.setValue(`@deptOption`,`COVID`+strgen())
                page.pause(1000)
                page.setValue(`@timezoneOption`,timeZone())
                page.pause(1000)
                page.click(`@employeePasswordtxtField`)
                page.pause(1000)
                page.setValue(`@employeePasswordtxtField`, access.userCredential.clienPassword)
                page.pause(1000)
                page.click(`@employeeComfirmPasswordtxtField`)
                page.pause(1000)
                page.setValue(`@employeeComfirmPasswordtxtField`, access.userCredential.clienPassword)
                page.click(`@saveNewEmployeebtn`)
                page.pause(1000)
                page.assert.elementPresent(`@success`)
                page.pause(2000)
                page.assert.containsText(`@success`, `New user account successfully added`)
                page.pause(1000)
                
  
  
        return this;
        
      },

    LeaveRequestDenied: function() {

        const page = this;
  
                  page.click(`@teamViewMenuBtn`)
                  page.pause(2000)
                  page.click(`@leaveRequestBtn`)
                  page.pause(2000)
                  page.leavetype(`Sick Leave`)
                  page.pause(2000)
                  page.click(`@leaveReason`)
                  page.pause(2000)
                  page.setValue(`@leaveReason`, `I am not feeling well today`)
                  page.click(`@createLeaveBtn`)
                  page.assert.elementPresent(`@success`)
                  page.assert.containsText(`@success`, `New leave request was added`)
                  page.pause(1000)
                  page.RequestleaveDenied()

  
  
        return this;
        
      },

    LeaveRequestAccepted: function() {

        const page = this;
  
                  page.click(`@mycalendarViewMenuBtn`)
                  page.pause(2000)
                  // page.getText(`@getLeaveAllowance`, function(result){
                  //   originalAllowance =result.value
                  //   })
                  page.click(`@leaveRequestBtn`)
                  page.pause(2000)
                  page.leavetype(`Sick Leave`)
                  page.pause(2000)
                  page.click(`@leaveReason`)
                  page.pause(2000)
                  page.setValue(`@leaveReason`, `I am not feeling well today`)
                  page.click(`@createLeaveBtn`)
                  page.assert.elementPresent(`@success`)
                  page.assert.containsText(`@success`, `New leave request was added`)
                  page.pause(1000)
                  page.RequestleaveAccepted()
                  page.pause(2000)
                  page.assert.elementPresent(`@success`)
                  // page.click(`@mycalendarViewMenuBtn`)
                  // page.pause(2000)
                  
                  // page.getText(`@getLeaveAllowance`, function(result){
                  //   deductedAllowance = result.value
                  //   })
                  // assert.notEqual(deductedAllowance, originalAllowance);

  
  
        return this;
        
      },

      Login: function() {

          const page = this;

                
                    // page.maximizeWindow()
                    // page.setValue(`@usernameField`, usename)
                    // page.pause(1000)
                    // page.setValue(`@passwordField`, access.userCredential.clienPassword)
                    // page.pause(1000)
                    // page.click(`@loginbutton`)
                    // page.pause(1000)
                    // page.assert.elementPresent(`@leaveRequestBtn`)
                    // page.assert.elementPresent(`@blockOutDatesBtn`)
                    // page.pause(3000)
                    // page.click(`@mycalendarViewMenuBtn`)
                    // page.pause(2000)

                    page.maximizeWindow()
                    page.setValue(`@usernameField`, access.userCredential.clientEmail)
                    page.pause(1000)
                    page.setValue(`@passwordField`, access.userCredential.clienPassword)
                    page.pause(1000)
                    page.click(`@loginbutton`)
                    page.pause(1000)
                    page.assert.elementPresent(`@leaveRequestBtn`)
                    page.assert.elementPresent(`@blockOutDatesBtn`)
                    page.pause(3000)
                    page.click(`@mycalendarViewMenuBtn`)
                    page.pause(2000)
                    
                   page.getText(`@getLeaveAllowance`, function(result){
                      // console.log(result.value)
                      data =result.value
                      })

                    // page.perform(function(){
                    //    originalAllowance2 =originalAllowance
                    //       })

                    console.log(data)
                    // page.getText(`@getLeaveAllowance`, async(result) => {
                    //   console.log(result.value)
                    //   const deductedAllowance = result.value
                    //   })
                      
                    // assert.notEqual(deductedAllowance, originalAllowance);
      
          
          // page.click(`@leaveRequestBtn`)
          // page.click(`@leavefrom`)
          // // page.click(`@datepicket`)
          // page.pause()
          // const previousdate = new Date(new Date().setDate(new Date().getDate() + 4))
          // selectCalendarMonthYear(previousdate)
          // page.moveToElement(`@moveLIke`, 1386, 52)
          // // page.click(`@moveLIke`)
          // // page.pause()

          // page.waitForElementVisible(`@moveLIke`, 1000, function () {
          //   // moveToElement can also accept offsets
          //   page.moveToElement(`@moveLIke`, 1386, 52, function() {
          //     page.waitForElementVisible(`@moveLIke`, 500, function () {
          //       page.click(`@moveLIke`);
          //       }, "Click share icon. ");
          //   });
          //   }, "Find a recommendation ");

    
    
          return this;
          
      },
    
  }]


};