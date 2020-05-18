module.exports = {
  
    '@tags': ['PerformanceEvaluation'],
  
    'weekly-floor-report': async(browser) =>{
      const login = browser.page.RockPO();
  
      login
            .navigate()
            .Clientlogin()
            // .dashboard(`Manage Employees`)
            .dashboard(`Performance Evaluation Review`)
            .PerformanceEval()
            //.pause()
      
    },
  

      
  };