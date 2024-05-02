//modify an object nested within an object

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      //here data is an nested object
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online=45;
  
  console.log(userActivity);