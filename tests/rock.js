module.exports = {
  
  '@tags': ['WeeklyFloorReport'],

  'weekly-floor-report': async(browser) =>{
    const login = browser.page.RockPO();

    login
          .navigate()
          .login()
          .dashboard(`Weekly Floor Report`)
          .step1() 
          .step2() 
          .step3() 
          .step4() 
          .Laststep()            
  },

  'Start New weekly-floor-report' : async(browser) =>{
    const login = browser.page.RockPO();
    const mySection = login.section.myFooterSection;

    login
          .Start_New_weekly_floor_report()
          .step2() 
          .step3() 
          .step4() 
          .Laststep() 
          .end()
          
  },

  // 'FAQ' : async(browser) =>{
  //   const login = browser.page.RockPO();

  //   login
  //         .navigate()
  //         .login()
  //         .dashboard('Faqs')
  //         .FAQ()
  //         .pause()
  //         .end()
          
  // }


    
};