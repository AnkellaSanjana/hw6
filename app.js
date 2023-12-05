const app = Vue.createApp({
    data() {
      return {
        showDetails: false,
        edit: false,
        message: 'My Contacts',
        contacts: [
          {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30,
            link: 'https://www.linkedin.com/in/johndoe/',
          },
          {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            age: 28,
            link: 'https://www.linkedin.com/in/janesmith/',
          },
          {
            name: 'Bob Johnson',
            email: 'bob.johnson@example.com',
            age: 35,
            link: 'https://www.linkedin.com/in/bobjohnson/',
          },
        ],
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
      toggleEdit() {
        this.edit = !this.edit;
      },
    },
  });
  
  app.mount('#app');
  