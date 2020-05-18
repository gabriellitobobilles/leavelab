module.exports = {
  
    '@tags': ['Regression'],
  
    'Creating a Company': async(browser) =>{
      const leavelab = browser.page.LeaveLabPO();
  
      leavelab
            .navigate()
            .CreatCompany()
       
    },

    'Create department': async(browser) =>{
        const leavelab = browser.page.LeaveLabPO();
    
        leavelab
              .CreateDepartment()
         
    },

    'Create Employee': async(browser) =>{
        const leavelab = browser.page.LeaveLabPO();
    
        leavelab
              .CreateEmployee()
              //  .end()
   
    },

 
    'Request a leave and Approved using new account created': async(browser) =>{
      const leavelab = browser.page.LeaveLabPO();
  
      leavelab    
            // .navigate()
            // .Login()    
            .LeaveRequestAccepted()
            .end();  
  }

  };