module.exports = {
  
  '@tags': ['CustomLeavelab'],



  'Create Company': async(browser) =>{
    const leavelab = browser.page.CustomLeaveLab();

    leavelab
          .navigate()
          .CreatCompany()
          .CreateDepartment()
          .CreateEmployee()         
          .end();
  },

  // 'Creat Department and Create employee': async(browser) =>{
  //   const leavelab = browser.page.CustomLeaveLab();

  //   leavelab    
  //         .navigate()         
  //         .Login()
  //         .CreateDepartment()
  //         .CreateEmployee()
  //         // .LeaveRequestDenied()
  //         .end();  
  // }

    
};

