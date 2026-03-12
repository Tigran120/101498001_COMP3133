class Customer {
  firstName: string;
  lastName: string;

  greeter(): void {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

const customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();
