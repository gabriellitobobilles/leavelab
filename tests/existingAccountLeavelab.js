module.exports = {
  
    '@tags': ['existingAccount'],
  
  
    'Request a leave but Denied using existing account': async(browser) =>{
      const leavelab = browser.page.CustomLeaveLab();
  
      leavelab    
            .navigate()         
            .Login()
            .CreateDepartment()
            .CreateEmployee()
            // .LeaveRequestDenied()
            .end();  
  }
  
      
};